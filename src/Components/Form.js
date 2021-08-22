import React from 'react';
import { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.onElementChange = this.onElementChange.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            userName: '',
            passWord: '',
            desc: '',
            gender: 0,
            lang: 'vi',
            status: false
        }
    }
    onElementChange(event) {
        debugger
        var name = event.target.name;
        var value = event.target.type === "checkbox" ? event.target.defaultChecked : event.target.value;
        this.setState({
            [name]: value
        });
    }
    onReset(event) {
        this.setState(() => {
            return {
                username: '',
                password: '',
                desc: '',
                gender: 0,
                lang: 'vi',
                status: false
            }
        });
    }
    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (

            <div className="container">

                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form Register</h3>
                            </div>
                            <div className="panel-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Username</label>
                                        <input type="text" className="form-control" name="userName" value={this.state.username} onChange={this.onElementChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Password</label>
                                        <input type="password" className="form-control" name="passWord" value={this.state.password} onChange={this.onElementChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Description</label>
                                        <textarea name="desc" className="form-control" rows="3" value={this.state.desc} onChange={this.onElementChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Gender</label>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="gender" checked={this.state.gender === 0} value={0} onChange={this.onElementChange} /> Female
                                            </label><br />
                                            <label>
                                                <input type="radio" name="gender" checked={this.state.gender === 1} value={1} onChange={this.onElementChange} /> Male
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Language</label>
                                        <select className="custom-select my-1 mr-sm-2" name="lang" value={this.state.lang} onChange={this.onElementChange}>
                                            <option value={'vi'}>Viet Nam</option>
                                            <option value={'usa'}>USA</option>
                                            <option value={'korea'}>Korea</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                Status&nbsp;
                                                <input type="checkbox" name="status" onChange={this.onElementChange} />
                                            </label>
                                        </div>

                                    </div>

                                    <div className="form-group">
                                        <div className="col-sm-10 col-sm-offset-2">
                                            <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>&nbsp;
                                            <button type="reset" className="btn btn-primary" onClick={this.onReset}>Reset</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>



        );
    }
}

export default Form;
