import * as ActionTypes from './../Constant/ActionTypes'
const data = () => {
    return localStorage.getItem('jobs') ? JSON.parse(localStorage.getItem('jobs')) : [];
}
const initialState = {
    jobs: data(),
    showAddJob: false,
    saveJob: {
        id: 0,
        jobName: '',
        status: ''
    }
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_LIST_ALL: {
            return JSON.parse(JSON.stringify(state));
        }
        case ActionTypes.UPDATE_JOB: {
            saveJob(action.job, state.jobs);
            break;
        }
        case ActionTypes.UPDATE_SAVE_JOB: {
            state.saveJob = action.job;
            break;
        }
        case ActionTypes.TOGGLE_POPUP: {
            state.showAddJob = action.showAddJob;
            break;
        }
        case ActionTypes.RESET_SAVE_JOB: {
            state.saveJob = {
                id: 0,
                jobName: '',
                status: 'hide'
            };
            break;
        }
        case ActionTypes.DELETE_JOB: {
            if (state.jobs.filter((item, index) => {
                return item.id === action.id;
            }).length > 0) {
                var test = state.jobs.filter((item, index) => {
                    return item.id !== action.id;
                });
                state.jobs = JSON.parse(JSON.stringify(test));
            }
            localStorage.setItem('jobs', JSON.stringify(state.jobs));
            break;
        }
        case ActionTypes.SEARCH_JOB: {
            state.jobs = searchJob(data(), action.job.field, action.job.value);
            break;
        }
        case ActionTypes.SORT_JOB: {
            state.jobs = sortJob(data(), action.sort.field, action.sort.value);
            break;
        }
        default: break;
    }
    return JSON.parse(JSON.stringify(state));
}
var sortJob = (listSorted, name, logic) => {
    return listSorted.sort((a, b) => {
        if (a[name].toLowerCase() < b[name].toLowerCase()) return logic ? -1 : 1;
        if (a[name].toLowerCase() > b[name].toLowerCase()) return logic ? 1 : -1;
        return 0;
    });
}
var searchJob = (listJobs, field, value) => {
    var searchedJobs = listJobs.filter((item) => {
        return item[field].toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return searchedJobs;
}
var saveJob = (job, listJob) => {
    if (job.jobName === '') {
        alert('please try again !!!');
        return false;
    }
    if (job.id !== 0) {
        var oldJob = listJob.filter(item => item.id === job.id)[0];
        oldJob.id = job.id;
        oldJob.jobName = job.jobName;
        oldJob.status = job.status;
        localStorage.setItem('jobs', JSON.stringify(listJob));
    } else {
        job.id = listJob.length + 1;
        listJob.push(job);
        localStorage.setItem('jobs', JSON.stringify(listJob));
    }

}
export default myReducer;