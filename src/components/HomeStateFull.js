import React, { Component } from 'react';
import store from '../store';

const axios = require('axios');
class HomeStateFull extends Component {
    dataAPI = {};
    constructor(props) {
        super(props);
        
        this.state = this.getCurrentStateFromStore();
        
        this.changeState = this.changeState.bind(this);
    }
    // state = this.getCurrentStateFromStore();

    getCurrentStateFromStore = () => {
        return {
          user: store.getState().user,
          product: store.getState().product
        }
    }

    changeState = (type, id) => {
        let action = {};
        let newData = {};
        let flag = false;
        if (type === "add") {
            let index = this.state.user[this.state.user.length - 1].id + 1;
            if (Number.isNaN(index)) {
              index = this.state.user[this.state.user.length - 2].id + 1;
            }

            newData = {
                id: index,
                name: Math.random().toString(36).substring(7) +index,
                age: Math.floor(Math.random()*(25-10+1))+10
            }
            flag= true;
        } else if (type === "delete" || type === "update") {
            newData = {
                id: id
            }
            flag = true;
        } else if (type === "add with api") {
            console.log("log " + this.getUser());
        }

        if (flag) {
            action = {
                type: type,
                payload: newData
            };
            store.dispatch(action);
        }
        console.log(this.state);
    }

    async getUser () {
        await axios.get('http://localhost:3000/API-users')
        .then(function (response) {
            console.log(response.data);
            let action = {
                type: "add with api",
                payload: response.data
            }
            store.dispatch(action);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // if (responseData.status === 200) {
            //     return responseData.data;
            // } else {
            //     return {message: "Error Data"};
            // }
        });
    }

    updateStateFromStore = () => {
        const currentState = this.getCurrentStateFromStore();
        
        if (this.state !== currentState) {
          this.setState(currentState);
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    }
      
    componentWillUnmount() {
        console.log("end");
        this.unsubscribeStore();
    }

    // componentWillMount() {
    //     console.log("will mount");
    // }

    // componentWillUpdate() {
    //     console.log("will update");
    // }

    render() {
        var arrayUser = this.state.user.map((value, index) => {
            return (
                    <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                    </tr>
            )});

        return (
            <div>
                <h1>DEMO REDUX</h1>
                <button onClick={() => this.changeState("add", null)}>ADD</button>
                <button onClick={() => this.changeState('delete', 1)}>DELETE</button>
                <button onClick={() => this.changeState('update', 2)}>UPDATE</button>
                <button onClick={() => this.changeState('add with api', null)}>ADD WITH API (REDUX THUNK)</button>
                <table>
                    <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th> 
                                <th>Age</th>
                            </tr>
                    </thead>
                    <tbody>
                        {arrayUser}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default HomeStateFull;
