import React, { Component } from 'react';
import './../App.css';
import DisplayTask from '../components/taskList';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processTask:"default task",
            task:[],
            total:0,
            completed:0,
        };
    this.onTick = this.onTick.bind(this);
    this.addTask = this.addTask.bind(this);
    this.addOnChange = this.addOnChange.bind(this);
    this.remove=this.remove.bind(this);
    }
    addOnChange(event) {
        const task = event.target.value;
        this.setState(Object.assign({},{processTask:task}));
        if (event.which === 13) {
            this.onEnter(event);
        }
    }
    onEnter(event) {
        if (event.target.getAttribute('id') === "addValue") {
            this.addTask();
        }
    }
    addTask(event) {
        const newState = Object.assign({},this.state);
        const newTask = newState.processTask;
        newState.task = [{data:newTask,edit:false,ticked:false,},...this.state.task];
        newState.total +=1;
        console.log(newState);
        this.setState(newState);
    }
    remove(event) {
        const index = event.target.getAttribute('data-id');
        console.log(index);
        const state = Object.assign({},this.state)
        const old = state.task;
        console.log(old);
        const completed = old[index].ticked ? state.completed -=1 : state.completed;
        const total = state.total-1;
        console.log(old.slice(index+1,old.length).prototype);    //gives null on passing 1 out of 2
        const newState = [...old.slice(0,index),...old.slice(index+1,old.length)];
        this.setState(Object.assign({},{task:newState,total:total,completed:completed}));
    }
    save(event) {
       // const key = event.target.tagName.getAttribute('key');
        // console.log(key);
        // const newTask= this.state.processTask;
        // console.log(newTask);
        // const newState = Object.assign({},this.state);
        // console.log(newState);
        // newState.task[key] = {data:newTask,edit:false};
        // console.log(newState);
    }
    edit(event) {
       // const key = event.target.tagName.getAttribute('key');
        // const newState = Object.assign({},this.state);
        // newState.task[key].edit = true;
        // this.setState(newState);
    }
    onTick(event) {
        const index = event.target.getAttribute('data-id');
        const complete= Object.assign({},this.state);
        complete.task[index].ticked= true;
        const total = complete.task.reduce(function (total,data){
            return total = (data.ticked) ? total+1 : total; 
        },0)
        this.setState(Object.assign({},{completed:total}));
     }

    render() {
        console.log(this.state);
        return(
            <div>
                <DisplayTask 
                    addOnChange={this.addOnChange} 
                    addTask={this.addTask} 
                    state={this.state} 
                    buttonfn={this.buttonfn} 
                    remove= {this.remove}
                    onTick= {this.onTick}
                    edit= {this.edit}
                />
            </div>
        );
    }
}

export default Application;