import { Component } from "react";
import React from 'react';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            singleSelect: '',
            multiSelect: '',
            textarea: ''
        };
    }

    handleSubmit = (event) => {
        this.setState({
            input: event.target[0].value,
            singleSelect: event.target[1].value,
            multiSelect: event.target[2].value,
            textarea: event.target[3].value,
        });
        event.preventDefault();
    }
    
    showInfo = () => {
        document.getElementById("showInfo").style.display = 'block';
    }

    render() {
        return (
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
            <h2>Use Form With event.target</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                <label >Example select</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                </div>
                <div className="form-group">
                <label>Example multiple select</label>
                <select multiple className="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                </div>
                <div className="form-group">
                <label>Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <input type="submit" className="btn btn-primary" value='Submit Form'/>
                <input type="button" className="btn btn-info" value='Show Info' onClick={this.showInfo}/>
            </form>
            <div style={{display: 'none'}} id='showInfo'>
                Input: {this.state.input} <br/>
                single Select: {this.state.singleSelect} <br/>
                Multi Select: {this.state.multiSelect} <br/>
                Text Area: {this.state.textarea}
            </div>
        </div>
      );
    }
}