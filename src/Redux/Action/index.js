import * as ActionTypes from './../Constant/ActionTypes'
export const listAll = () => {
    return {
        type: ActionTypes.GET_LIST_ALL
    }
}
export const addTask = (job) => {
    return {
        type: ActionTypes.UPDATE_JOB,
        job
    }
}
export const getSaveJob = () => {
    return {
        type: ActionTypes.GET_SAVE_JOB
    }
}
export const updateSaveJob = (job) => {
    return {
        type: ActionTypes.UPDATE_SAVE_JOB,
        job
    }
}
export const togglePopup = (showAddJob) => {
    return {
        type: ActionTypes.TOGGLE_POPUP,
        showAddJob
    }
}
export const resetSaveJob = () => {
    return {
        type: ActionTypes.RESET_SAVE_JOB
    }
}
export const deleteJob = (id) => {
    return {
        type: ActionTypes.DELETE_JOB,
        id
    }
}
export const searchJob = (job) => {
    return {
        type: ActionTypes.SEARCH_JOB,
        job
    }
}
export const sortJob = (sort) => {
    return {
        type: ActionTypes.SORT_JOB,
        sort
    }
}