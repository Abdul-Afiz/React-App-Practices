import { useState } from "react";
import Todoinput from "./Components/Todoinput";
import Todolist from "./Components/Todolist";

function App() {
  const [newtodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  const handleAddTodo = () => {
    if (!newtodo.trim()) return;
    setTodos(todos.concat({ text: newtodo, completed: false }));
    setNewTodo("");
  };

  const removeTodo = (todoIndex) => {
    setTodos(todos.filter((_, index) => index !== todoIndex));
  };

  const toggleTodo = (todoIndex) => {
    setTodos(
      todos.map((todo, index) => {
        if (todoIndex === index) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  const bulkToggle = () => {
    const someChecked = todos.some((todo) => todo.completed);
    const noneChecked = todos.every((todo) => !todo.completed);
    const allChecked = todos.every((todo) => todo.completed);

    setTodos(
      todos.map((todo) => {
        todo.completed = allChecked
          ? false
          : noneChecked
          ? true
          : someChecked
          ? true
          : false;
        return todo;
      })
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="App">
      <h1 className="todo">todos</h1>
      <Todoinput
        value={newtodo}
        onchange={(e) => setNewTodo(e.target.value)}
        addTodo={handleAddTodo}
        showCaret={todos.length}
        clickCaret={bulkToggle}
      />
      <Todolist
        list={
          status === "completed"
            ? todos.filter((todo) => todo.completed)
            : status === "active"
            ? todos.filter((todo) => !todo.completed)
            : todos
        }
        showSummary={todos.length}
        itemsLeft={todos.filter((todo) => !todo.completed).length}
        onClickClose={removeTodo}
        onClickToggle={toggleTodo}
        selectedStatus={status}
        onClickStatus={setStatus}
        onClickCLearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
