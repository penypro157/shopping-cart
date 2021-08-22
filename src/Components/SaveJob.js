import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './../Redux/Action/index';

class SaveJob extends Component {
    constructor(props) {
        super(props);
        this.hide = this.hide.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onElementChange = this.onElementChange.bind(this);
    }
    onElementChange(event) {
        var name = event.target.name;
        var value = event.target.type === "checkbox" ? event.target.defaultChecked : event.target.value;
        var temp = { ...this.props.saveJob };
        temp[name] = value;
        this.props.updateSaveJob(temp);
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.addTask(this.props.saveJob);
        this.props.resetSaveJob();
    }
    hide() {
        this.props.resetSaveJob();
        this.props.togglePopup(false);
    }
    render() {
        console.log(this.props.saveJob);
        return (

            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={this.props.showAddJob !== true ? { display: 'none' } : {}} >
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Job Name</label>
                        <input type="text" name="jobName" value={this.props.saveJob.jobName} className="form-control" onChange={this.onElementChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Status</label>
                        <select name="status" className="form-control" value={this.props.saveJob.status} onChange={this.onElementChange}>
                            <option value="active">Active</option>
                            <option value="hide">Hide</option>
                        </select>

                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-success" onClick={this.onSubmit}>Save</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.hide}>Cancel</button>
                    </div>
                </form>
            </div>

        );
    }
}
const mapStateToAction = (dispatch) => {
    return {
        addTask: (job) => { dispatch(Actions.addTask(job)) },
        updateSaveJob: (job) => { dispatch(Actions.updateSaveJob(job)) },
        togglePopup: (showAddJob) => { dispatch(Actions.togglePopup(showAddJob)) },
        resetSaveJob: () => { dispatch(Actions.resetSaveJob()) }
    };
}
const mapStateToProps = (state) => {
    return {
        saveJob: state.job.saveJob,
        showAddJob: state.job.showAddJob
    };
}
export default connect(mapStateToProps, mapStateToAction)(SaveJob);
