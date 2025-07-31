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
                <ul className="taskItem">
                  {stagesTasks[index].map((task, taskIndex) => {
                    return (
                      <div className="taskItem">
                        <li>
                          <h4>
                            <div>
                              <span>{task.name}</span>
                              <div className="taskBtns">
                                <button className="backBtn"> ◀</button>
                                <button className="forwardBtn"> ▶</button>
                              </div>
                            </div>
                          </h4>
                        </li>
                      </div>
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
