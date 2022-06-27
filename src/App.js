import React, {useState , useEffect} from 'react'
import './App.css'
import Form from './components/Form';
import ToDoList from './components/TodoList';


function App() {
 
  const [inputText,setInputText] = useState("");
  const [todos,setTodos]= useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  

  // Run once when the app starts
 
  
  // useEffect
  useEffect(() => {
    // Function
    function filterHandler() {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      } }
   
   
    filterHandler();
  
  }, [todos, status]);




  


  return (
    <div className="App">
      <header>
      <h1>goglik's ToDo List</h1>
      </header>
      <Form inputText={inputText}
            todos={todos}
            setTodos={setTodos} 
            setInputText={setInputText}
            setStatus={setStatus}
            />
      <ToDoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
