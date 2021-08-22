import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../Redux/Action/index';

class RowJob extends Component {
    constructor(props) {
        super(props);
        this.onEditJob = this.onEditJob.bind(this);
        this.onDeleteJob = this.onDeleteJob.bind(this);
    }
    onEditJob() {
        this.props.updateSaveJob({ id: this.props.id, jobName: this.props.jobName, status: this.props.status });
        this.props.togglePopup(true);
    }
    onDeleteJob() {
        this.props.deleteJob(this.props.id);

    }
    render() {
        return (
            <tr>
                <th scope="row">{this.props.number}</th>
                <td>{this.props.jobName}</td>
                <td>{this.props.status === 'hide' ? <span className="label  mb-2 bg-info  text-white">Hide</span> : <span className="label  mb-2 bg-danger text-white">Active</span>}</td>
                <td>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={this.onEditJob} >Edit</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.onDeleteJob} >Delete</button>
                    </div>
                </td>
            </tr>


        );
    }
}
const mapStateToAction = (dispatch) => {
    return {
        updateSaveJob: (job) => { dispatch(Actions.updateSaveJob(job)) },
        togglePopup: (showAddJob) => { dispatch(Actions.togglePopup(showAddJob)) },
        deleteJob: (id) => { dispatch(Actions.deleteJob(id)) }
    };
}
const mapStateToProps = (state) => {
    return {
    };
}
export default connect(mapStateToProps, mapStateToAction)(RowJob);
