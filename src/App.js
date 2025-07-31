import './App.css';
import Kanban_board from './components/Kanban';
// import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <div className="app">
      <h1 className="text-center">Kanban Board</h1>
      {/* <KanbanBoard /> */}
      <Kanban_board/>
    </div>
  );
}

export default App;
