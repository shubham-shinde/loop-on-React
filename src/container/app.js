import React, { Component } from 'react';
import './../App.css';
import DisplayTask from '../components/taskList';
import store from '../store/index'; 

class Application extends Component {
    addOnChange(event) {
        const task = event.target.value;
        store.dispatch({
            type: 'ADD_ON_CHANGE',
            key : event.which,
            task : event.target.value,
            buttonId : event.target.getAttribute('id'),
            buttonClass : event.target.getAttribute('className'),
            getId : event.target.getAttribute('data-id')
        });
    }
    addTask(event) {
        store.dispatch({
            type : 'ADD_TASK'
        });
    }
    remove(event) {
        store.dispatch({
            type : 'REMOVE',
            index : Number(event.target.getAttribute('data-id'))
        });
    }
    save(event) {
        store.dispatch({
            type : 'SAVE',
            key : event.target.getAttribute('data-id')
        });
    }
    edit = (event) => {
        store.dispatch({
            type : 'EDIT',
            key : event.target.getAttribute('data-id')
        });
    }
    onTick(event) {
        store.dispatch({
            type : 'ON_TICK',
            index : event.target.getAttribute('data-id')
        });
     }

    render() {
        console.log(this.state);
        return(
            <div>
                <DisplayTask 
                    addOnChange={this.addOnChange} 
                    addTask={this.addTask} 
                    state={store.getState()} 
                    buttonfn={this.buttonfn} 
                    remove= {this.remove}
                    onTick= {this.onTick}
                    edit= {this.edit}
                    save= {this.save}
                />
            </div>
        );
    }
}

export default Application;