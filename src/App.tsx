import React, {useState} from "react";
import "./App.css";
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed";
export type TodoListType = { id: string, title: string, filter: FilterValuesType }
export type TaskType = { id: string, title: string, isDone: boolean }
export type TasksType = { [key: string]: Array<TaskType> }


function App() {

  // let [tasks, setTasks] = useState([
  //     {id: v1(), title: "HTML&CSS", isDone: true},
  //     {id: v1(), title: "JS", isDone: true},
  //     {id: v1(), title: "ReactJS", isDone: false},
  //     {id: v1(), title: "Rest API", isDone: false},
  //     {id: v1(), title: "GraphQL", isDone: false},
  // ]);
  // let [filter, setFilter] = useState<FilterValuesType>("all");

  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<TodoListType>>([
    {id: todolistID1, title: "What to learn", filter: "all"},
    {id: todolistID2, title: "What to buy", filter: "all"},
  ]);

  let [tasks, setTasks] = useState<TasksType>({
    [todolistID1]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false},
      {id: v1(), title: "Rest API", isDone: false},
      {id: v1(), title: "GraphQL", isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: "HTML&CSS2", isDone: true},
      {id: v1(), title: "JS2", isDone: true},
      {id: v1(), title: "ReactJS2", isDone: false},
      {id: v1(), title: "Rest API2", isDone: false},
      {id: v1(), title: "GraphQL2", isDone: false},
    ],
  });


  function removeTask(id: string, todoListId: string) {
    setTasks({...tasks, [todoListId]: tasks[todoListId].filter(task => task.id !== id)});
  }

  function addTask(title: string, todoListId: string) {
    const newTask = {id: v1(), title, isDone: false};
    setTasks({...tasks, [todoListId]: [newTask, ...tasks[todoListId]]});
  }

  function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
    setTasks({...tasks, [todoListId]: tasks[todoListId].map(task => task.id === taskId ? {...task, isDone} : task)});
  }

  function changeFilter(filter: FilterValuesType, todoListId: string) {
    setTodolists(todolists.map(tl => tl.id === todoListId ? {...tl, filter} : tl));
  }

  function getFilteredTasks(tasks: Array<TaskType>, filter: FilterValuesType) {
    switch (filter) {
      case "active":
        return tasks.filter(t => !t.isDone);
      case "completed":
        return tasks.filter(t => t.isDone);
      default:
        return tasks;
    }
  }

  return (
    <div className="App">
      {
        todolists.map(tl => {
          const filteredTasks = getFilteredTasks(tasks[tl.id], tl.filter);
          return <Todolist key={tl.id}
                           title={tl.title}
                           filter={tl.filter}
                           todoListId={tl.id}
                           tasks={filteredTasks}

                           addTask={addTask}
                           removeTask={removeTask}
                           changeFilter={changeFilter}
                           changeTaskStatus={changeStatus}

          />;
        })
      }
    </div>
  );
}

export default App;
