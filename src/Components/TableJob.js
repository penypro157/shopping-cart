import React from 'react';
import { Component } from 'react';
import RowJob from './RowJob';
import { connect } from 'react-redux';
import * as Actions from './../Redux/Action/index';
class TableJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobName: '',
            status: '',
        }
        this.onElementChange = this.onElementChange.bind(this);
    }
    onElementChange(event) {
        var name = event.target.name;
        var value = event.target.type === "checkbox" ? event.target.defaultChecked : event.target.value;
        this.setState({
            [name]: value
        });
        this.props.searchJob({ field: name, value });
    }
    render() {
        console.log('Render');
        var listElement = this.props.jobs.map((element, index) => {
            return <RowJob key={index} number={index + 1} id={element.id} jobName={element.jobName} status={element.status} onEditJob={this.props.onEditJob} onDeleteJob={this.props.onDeleteJob} />
        });
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Job Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="search" name="jobName" value={this.state.jobName} onChange={this.onElementChange} className="form-control" />
                            </td>
                            <td>
                                <select name="status" value={this.state.status} onChange={this.onElementChange} className="form-control">
                                    <option value="">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="hide">Hide</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {listElement}
                    </tbody>
                </table>




            </div>


        );
    }
}
const mapStateToAction = (dispatch) => {
    return {
        searchJob: (job) => { dispatch(Actions.searchJob(job)) }
    };
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        jobs: state.job.jobs
    };
}
export default connect(mapStateToProps, mapStateToAction)(TableJob);
