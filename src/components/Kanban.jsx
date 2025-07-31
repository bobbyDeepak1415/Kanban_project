import React, { useState } from "react";
import "./Kanban.css";

function Kanban(props) {
  const stagesNames = ["Backlogs", "Todo", "Ongoing", "Done"];

  const [newTask, setNewTask] = useState("");
  const [stagesTasks, setStagesTasks] = useState([[], [], [], []]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = { name: newTask.trim(), stage: 0 };

    const updatedStages = [...stagesTasks];
    updatedStages[0].push(task);
    setStagesTasks(updatedStages);
    setNewTask("");
  };

  const moveTask = (stageIndex,taskIndex,direction) => {

    const updatedStages=[...stagesTasks]
    const taskToMove=updatedStages[stageIndex][taskIndex]


    updatedStages[stageIndex].splice(taskIndex,1)
    updatedStages[stageIndex+direction].push(taskToMove)
    setStagesTasks(updatedStages)
    
  };

  const handleDeleteTask=(stageIndex,taskIndex)=>{
    const updatedStages=[...stagesTasks]
    updatedStages[stageIndex].splice(taskIndex,1)
    setStagesTasks(updatedStages)


  }

  return (
    <div className="kanban">
      <div className="form_layout">
        <form onSubmit={handleAddTask}>
          <div className="form">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="task_input"
            ></input>
            <button type="submit" className="addTask_btn">
              Add Task
            </button>
          </div>
        </form>
      </div>
      <div className="containers_layout">
        <div className="containers">
          {stagesNames.map((stage, index) => {
            return (
              <div className="container" key={index}>
                <h4>{stage}</h4>
                <ul className="taskList">
                  {stagesTasks[index].map((task, taskIndex) => {
                    return (
                      <li className="taskItem" key={taskIndex}>
                        <div className="task_content">
                          <span>{task.name}</span>
                          <span className="taskBtns">
                            <button
                              onClick={() => moveTask(index, taskIndex, -1)}
                              disabled={index === 0}
                              
                              className="backBtn"
                            >
                              ◀
                            </button>
                            <button
                              onClick={() => moveTask(index, taskIndex, 1)}
                              disabled={index === 3}
                              className="forwardBtn"
                            >
                              ▶
                            </button>
                            <button
                              onClick={() => handleDeleteTask(index,taskIndex)}
                              className="deleteBtn"
                            >
                              X
                            </button>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Kanban;
