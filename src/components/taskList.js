import React,{Component} from 'react';
import propTypes from  'prop-types';

const DisplayTask = ({addOnChange,addTask,state,remove,onTick,edit,save}) => {
    const buttons = (data, index) => {
        if (!data.edit) {
            return (
                <div key={index} className="showtext">
                <input type="text" 
                    readOnly={!data.edit} 
                    className="addedtext" 
                    value={data.data}
                    onKeyUp={addOnChange}
                />
                <div className="buttoncont">
                    <div data-id={index} onClick={edit}>
                        <i className="fas fa-pencil-alt edit" data-id={index}></i>  
                    </div>
                    <div onClick={remove} data-id={index}>
                        <i className="fas fa-times remove" data-id={index}></i>
                    </div>
                    <div onClick={onTick} data-id={index}>   
                        <i className="fas fa-check tick" data-id={index}></i>
                    </div>
                </div>
            </div>
            );
        }
        else {
            return (
                <div key={index} className="showtext">
                <input type="text" 
                    readOnly={!data.edit} 
                    className="addedtext" 
                    defaultValue={data.data}
                    onKeyUp={addOnChange}
                />
                <div className="buttoncont">
                    <div data-id={index} onClick={edit} style={{visibility:"hidden"}}>
                        <i className="fas fa-pencil-alt edit" data-id={index}></i>  
                    </div>
                    <div onClick={remove} data-id={index} style={{visibility:"hidden"}}>
                        <i className="fas fa-times remove" data-id={index}></i>
                    </div>
                    <div onClick={save} data-id={index}>   
                        <i className="fas fa-check tick" data-id={index}></i>
                    </div>
                </div>
            </div>
            );
        }
    };

    function buttonfn(data, index) {
        return (
            buttons(data, index)
        );
    };

    return(
        <div id ="addevent">
          <input type='text' 
            id="addValue" 
            placeholder="Add another task" 
            onKeyUp={addOnChange}
          />
          <div id="add" onClick={addTask}>  
            <i className="fa fa-plus addbut" data-id="add"></i>
          </div>
          <h1>{state.completed} task completed out of {state.total}</h1>
          <div className="button">
                {state.task.map(buttonfn)}
          </div>
        </div>
    );
};

DisplayTask.prototype = {
    addOnChange:propTypes.func.isRequired,
    addTask:propTypes.func.isRequired,
    state:propTypes.object.isRequired,
    remove:propTypes.func.isRequired,
    onTick:propTypes.func.isRequired,
    edit:propTypes.func.isRequired,
    save:propTypes.func.isRequired,
}

export default DisplayTask;

