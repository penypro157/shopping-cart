import React from 'react';
import { Component } from 'react';
import SaveJob from './SaveJob';
import TableJob from './TableJob';
import { connect } from 'react-redux';
import * as Actions from './../Redux/Action/index';


class JobManagement extends Component {
    constructor(props) {
        super(props);
        this.onElementChange = this.onElementChange.bind(this);
        this.showAddJob = this.showAddJob.bind(this);
        this.onEditJob = this.onEditJob.bind(this);
        this.onDeleteJob = this.onDeleteJob.bind(this);
        this.onSearchJob = this.onSearchJob.bind(this);
        this.onSortCondition = this.onSortCondition.bind(this);
        this.state = {
            showAddJob: false,
            jobName: '',
            status: 'hide',
            id: 0,
            jobs: this.getListJobsFromDB()
        }
    }
    getListJobsFromDB() {
        return localStorage.getItem('jobs') ? JSON.parse(localStorage.getItem('jobs')) : [];
    }
    deleteJobFromDB(id) {
        var listJob = this.getListJobsFromDB();
        if (listJob.filter((item, index) => {
            return item.id === id;
        }).length > 0) {
            listJob = listJob.filter((item, index) => {
                return item.id !== id;
            });
            localStorage.setItem('jobs', JSON.stringify(listJob));
        }
    }
    onElementChange(event) {
        var name = event.target.name;
        var value = event.target.type === "checkbox" ? event.target.defaultChecked : event.target.value;
        this.setState({
            [name]: value
        });
    }
    onHideJob = () => {
        this.setState({
            showAddJob: false,
            jobName: '',
            status: 'active',
            id: 0
        })
    }
    onEditJob = (data) => {
        this.setState({
            showAddJob: true,
            jobName: data.jobName,
            status: data.status,
            id: data.id
        })
    }
    onDeleteJob(data) {
        this.deleteJobFromDB(data);
        this.setState({
            jobs: this.getListJobsFromDB()
        });
    }
    showAddJob() {
        this.props.togglePopup(true);
    }
    searchJob(jobName) {
        var listJobs = this.getListJobsFromDB();
        var searchedJobs = listJobs.filter((item) => {
            return item.jobName.toLowerCase().indexOf(jobName.toLowerCase()) !== -1;
        });
        this.setState({
            jobs: searchedJobs
        })
    }
    onSortCondition() {
        var sortObject = JSON.parse(this.refs.statusSort.value);
        this.props.sortJob(sortObject);

    }
    onSearchJob() {
        this.props.searchJob({ field: 'jobName', value: this.refs.textSearch.value });
    }
    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h1>Job Management</h1>
                    </div>
                </div>

                <div className="row">

                    <SaveJob onHide={this.onHideJob}
                    />

                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{ border: 'solid', borderWidth: '1px' }}>
                        <div className="row">
                            <div className="form-group">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-primary" onClick={this.showAddJob}>Add job</button>
                                </div>
                            </div>

                        </div>
                        <div className="row">


                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                                <div className="input-group">
                                    <input type="search" className="form-control rounded"
                                        aria-describedby="search-addon" ref="textSearch" />
                                    <button type="button" className="btn btn-primary" onClick={this.onSearchJob}>search</button>
                                </div>


                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                                <div className="input-group">

                                    <select name="sort" className="form-control" ref="statusSort" onChange={this.onSortCondition}>
                                        <option value='{"field":"jobName" ,"value"  : true}'>Name ASC</option>
                                        <option value='{"field":"jobName" ,"value"  : false}'>Name DESC</option>
                                        <option value='{"field":"status"  ,"value"  : true }' >Status ASC</option>
                                        <option value='{"field":"status"  ,"value"  : false }' >Status DESC</option>
                                    </select>

                                </div>


                            </div>

                        </div>
                        <div className="row">
                            <TableJob onEditJob={this.onEditJob} onDeleteJob={this.onDeleteJob} onAutoSearch={this.onAutoSearch} />
                        </div>

                    </div>
                </div>

            </div>



        );
    }
}
const mapStateToAction = (dispatch) => {
    return {
        togglePopup: (showAddJob) => { dispatch(Actions.togglePopup(showAddJob)) },
        searchJob: (job) => { dispatch(Actions.searchJob(job)) },
        sortJob: (sort) => { dispatch(Actions.sortJob(sort)) }
    };
}
const mapStateToProps = (state) => {
    return {
    };
}
export default connect(mapStateToProps, mapStateToAction)(JobManagement);
