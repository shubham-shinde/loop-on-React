const application = (
        state = {
            processTask:"default task",
            task:[],
            total:0,
            completed:0,
        }
    , action) => {
    switch (action.type) {
        case 'ADD_ON_CHANGE':
            const newS = Object.assign({},state);
            newS.processTask =  action.task; 
            if (action.key === 13) {
                if (action.buttonId === "addValue") {
                    const newTask = newS.processTask;
                    newS.task = [{data:newTask,edit:false,ticked:false,},...state.task];
                    newS.total +=1;
                }
                if (action.buttonClass === "addedText") {
                    const key = action.getId;
                    const newTask= newS.processTask;
                    newS.task[key] = {data:newTask,edit:false};
                }
            }
            return Object.assign({},newS);
            break;

        case 'ADD_TASK':
            const newSt = Object.assign({},state);
            const newTask = newSt.processTask;
            newSt.task = [{data:newTask,edit:false,ticked:false,},...state.task];
            newSt.total +=1;            
            return Object.assign({},newSt);
            break;

        case 'REMOVE':
            const index = action.index;
            const newState = Object.assign({},state)
            const old = newState.task;
            const completed = old[index].ticked ? newState.completed -=1 : newState.completed;
            const total = state.total-1;
            const ne = [...old.slice(0,index),...old.slice(index+1,old.length)];
            return Object.assign({},state,{task:ne,total:total,completed:completed});
            
            return ;
            break;

        case 'SAVE':
            const key = action.key;
            const newStat = Object.assign({},state);
            const newTas= newStat.processTask;
            newStat.task[key] = {data:newTas,edit:false};           
            return newStat;
            break;

        case 'EDIT':
            const ke = action.key;
            const newSta = Object.assign({},state);
            newSta.task[ke].edit = true;            
            return newSta;
            break;

        case 'ON_TICK':
            const ind = action.index;
            const complete= Object.assign({},state);
            complete.task[ind].ticked= true;
            const tot = complete.task.reduce(function (total,data){
                return total = (data.ticked) ? total+1 : total; 
            },0)
            return Object.assign({},state,{completed:tot});
            break;

        default:
            return state;
            break;
    }
}

export default application;