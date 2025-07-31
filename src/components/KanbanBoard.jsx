import { useState } from "react";
import "./kanbanBoard.css";

function KanbanBoard(props) {
  const stagesNames = ["Backlog", "To Do", "Ongoing", "Done"];

  

  const [taskName, setTaskName] = useState("");
  const [stagesTasks, setStagesTasks] = useState([[], [], [], []]); 

  function handleAddTask(e) {
    e.preventDefault(); 
    if (!taskName.trim()) return;

    const newTask = {
      name: taskName.trim(),
      stage: 0, 
    };

    const updatedStages = [...stagesTasks];
    updatedStages[0].push(newTask); 
    setStagesTasks(updatedStages);
    setTaskName("");
  }

  return (
    <div className="mt-20 layout-column justify-content-center align-items-center">
      <form
        className="mt-50 layout-row align-items-center justify-content-center"
        >
        <input
          id="create-task-input"
          type="text"
          className="large"
          placeholder="New task name"
          data-testid="create-task-input"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          />
        <button
          type="submit"
          onClick={handleAddTask}
          className="ml-30"
          data-testid="create-task-button"
        >
          Create task
        </button>
      </form>

      <div className="mt-50 layout-row">
        {stagesTasks.map((tasks, i) => (
          <div className="card outlined ml-20 mt-0" key={i}>
            <div className="card-text">
              <h4>{stagesNames[i]}</h4>
              <ul
                data-testid={`stage-${i}`}
                className="styled mt-50 pl-0"
                id={`stage-${i}`}
              >
                {tasks.map((task, index) => {
                  const taskId = task.name.split(" ").join("-");
                  return (
                    <li className="slide-up-fade-in" key={`${i}-${index}`}>
                      <div className="li-content layout-row justify-content-between align-items-center">
                        <span data-testid={`${taskId}-name`}>{task.name}</span>
                        <div className="icons">
                          <button
                            data-testid={`${taskId}-backward`}
                            className="icon-only x-small mx-2"
                            disabled={i === 0}
                          >
                            <i className="material-icons">backward</i>
                          </button>
                          <button
                            data-testid={`${taskId}-forward`}
                            className="icon-only x-small mx-2"
                            disabled={i === 3}
                          >
                            <i className="material-icons">forward</i>
                          </button>
                          <button
                            data-testid={`${taskId}-delete`}
                            className="icon-only danger x-small mx-2"
                          >
                            <i className="material-icons">delete</i>
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
