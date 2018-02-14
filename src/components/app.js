import React, { Component } from 'react';
import './../App.css';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task:[],
            total:0,
            completed:0,
        };
    this.onTick = this.onTick.bind(this);
    this.addTask = this.addTask.bind(this);
    }
    addTask(event) {
        console.log(event.target.getAttribute('id'));
        var newTask= document.getElementById('addValue').value;
        const newState = Object.assign({},this.state);
        newState.task = [{data:newTask,edit:false},...newState.task];
        newState.total +=1;
        this.setState(newState);
    }
    remove(index,event) {
       // const index = event.target.tagName.getAttribute('key');
        console.log(event.target.getAttribute('indexx'));
        const state = Object.assign({},this.state)
        const old = state.task;
        const completed = old[index].ticked ? state.completed -=1 : state.completed;
        const total = state.total-1;
        const before = old.slice(0,index);
        const after = old.slice(index+1,old.length);
        const newState = [...before,...after];
        this.setState(Object.assign({},{task:newState,total:total,completed:completed}));
    }
    save(key) {
       // const key = event.target.tagName.getAttribute('key');
        var newTask= document.getElementById('edited').value;
        const newState = Object.assign({},this.state);
        newState.task[key] = {data:newTask,edit:false};
        this.setState(newState);
    }
    edit(key) {
       // const key = event.target.tagName.getAttribute('key');
        const newState = Object.assign({},this.state);
        newState.task[key].edit = true;
        this.setState(newState);
    }
    onTick(index) {
        const complete= Object.assign({},this.state);
        complete.task[index].ticked= true;
        const total = complete.task.reduce(function (total,data){
            return total = (data.ticked) ? total+1 : total; 
        },0)
        this.setState(Object.assign({},{completed:total}));
    }
    buttonfn() {
        return (
            this.state.task.map((data,index) => {
                if(data.edit===false) {
                    return (
                        <div key={index} id={index} className="showtext">
                            <div className="addedtext">{data.data}</div>
                            <div className="buttoncont">
                                <div onClick={() => this.edit(index)} indexx={index}>
                                    <i className="fas fa-pencil-alt edit"></i>  
                                </div>
                                <div onClick={(event) => this.remove(index,event)} index={index}>
                                    <i className="fas fa-times remove"></i>
                                </div>
                                <div onClick={() => this.onTick(index)}>   
                                    <i className="fas fa-check tick"></i>
                                </div>
                            </div>
                        </div>
                    );
                }
                else {
                    return (
                        <div key={index} className="editingdom">
                          <input type='text' id="edited" defaultValue={data.data}  onKeyDown={
                                (event) => {
                                if(event.which === 13) {
                                    return this.save(index);
                                }}
                            }
                          />
                          <div onClick={() => this.save(index)} key={index}>
                            <i class="fas fa-check save"></i>
                          </div>
                        </div>
                    );
                }
            })            
        );
    }

    render() {
        return(
            <div id ="addevent">
              <input type='text' id="addValue" placeholder="Add another task"  onKeyDown={
                    (event) => {
                    if(event.which === 13) {
                        return this.addTask(event);
                    }}
                }
              />
              <div id="add" onClick={(event) => this.addTask(event)}>  
                <i class="fas fa-plus addbut"></i>
              </div>
              <h1>{this.state.completed} task completed out of {this.state.total}</h1>
              <div className="button">
              {this.buttonfn()}
              </div>
            </div>
        )
    }
}

export default Application;