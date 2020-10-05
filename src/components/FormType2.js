import { Component } from "react";
import React from 'react';

export class FormType2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            singleSelect: '',
            multiSelect: [],
            textarea: ''
        };
    }

    getValue = (event) => {
        if (event.target.name === 'multiSelect') {
            var options = event.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
              if (options[i].selected) {
                value.push(options[i].value);
              }
            }
            this.setState({
                [event.target.name]: value,
            });
        } else {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }
    }
    
    showInfoType2 = () => {
        document.getElementById("showInfoType2").style.display = 'block';
    }

    render() {
        return (
        <div>
            <h2>Use Form With OnChange</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input value={this.state.input} onChange={this.getValue} name='input' type="text" className="form-control" placeholder="name@ex ample.com"/>
                </div>
                <div className="form-group">
                <label >Example select</label>
                <select value={this.state.singleSelect} onChange={this.getValue} name='singleSelect' className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                </div>
                <div className="form-group">
                <label>Example multiple select</label>
                <select value={this.state.multiSelect} onChange={this.getValue} name='multiSelect' multiple={true} className="form-control" id="exampleFormControlSelect2">
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                </div>
                <div className="form-group">
                <label>Example textarea</label>
                <textarea value={this.state.textarea} onChange={this.getValue} name='textarea' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <input type="button" className="btn btn-info" value='Show Info' onClick={this.showInfoType2}/>
            </form>
            <div style={{display: 'none'}} id='showInfoType2'> 
                Input: {this.state.input} <br/>
                single Select: {this.state.singleSelect} <br/>
                Multi Select: {this.state.multiSelect} <br/>
                Text Area: {this.state.textarea}
            </div>
        </div>
      );
    }
}