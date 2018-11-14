import React from "react";
import './TaskList.css';
import Task from './Task';

function TaskList({ taskList, toggleImportant }){
  return (
    <div className='taskList'>
      {taskList.map((task, index) =>
        (
          <div key={index}>
            {index === 0 ? <hr/> : null}
            <Task
              description={task.description}
              id={task.id}
              important={task.important}
              toggleImportant={toggleImportant}/>
            <hr/>
          </div>
        )
      )}
    </div>
  );
}

export default TaskList;
