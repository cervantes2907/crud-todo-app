import React, {useState, useEffect} from 'react';
import CreateTodo from './components/CreateTodo';
import TodoItem from './components/TodoItem';


const App = () => {

    const URL_BASE = 'https://todos-go.herokuapp.com/api'

    const [todos, setTodos] = useState([]);
    const [todoEdit, setTodoEdit] = useState(null);

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);

    const fetchApi = async () => {  
      fetch (`${URL_BASE}/todos`)
      .then(response => response.json())
      .then(data => {
        setData(data.todos)
  
      });
    };

    const [data, setData] = useState([])
    useEffect (() => {  
            
        fetchApi()
    
    }, []);

    const todoDelete = async (todoId) => {

        let data = await fetch(`${URL_BASE}/todos/${todoId}`,{
          headers: { 'Content-Type': 'application/json' },
          method: 'DELETE'
        })
      
        const newTodo = {
            ...data,
        
        }
      
        const changedTodos = [
            newTodo,
            ...todos,
        ]

        setTodos(changedTodos);
        fetchApi();
    }

    const todoToogleCompleted = async (todoEdit) => {

      todoEdit.isCompleted =  !todoEdit.isCompleted 
      let data = await fetch(`${URL_BASE}/todos/${todoEdit.id}`,{
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(todoEdit)
      })
      

        const newTodo = {
            ...data,
        
        }
      
        const changedTodos = [
            newTodo,
            ...todos,
        ]

        setTodos(changedTodos);
        fetchApi();
    }
    
    const todoAdd = async (todo) => {

      let data = await fetch(`${URL_BASE}/todos`,{
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(todo)
      })

      const newTodo = {
          ...data,

      }

      const changedTodos = [
          newTodo,
          ...todos,
      ]

      setTodos(changedTodos);
      fetchApi();
    }
    
    const todoUpdate = async (todoEdit) => {
      let data = await fetch(`${URL_BASE}/todos/${todoEdit.id}`,{
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(todoEdit)
      })
      

        const newTodo = {
            ...data,
        
        }
      
        const changedTodos = [
            newTodo,
            ...todos,
        ]

        setTodos(changedTodos);
        fetchApi();

    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <CreateTodo
                        todos={data}
                        todoDelete={todoDelete}
                        todoToogleCompleted={todoToogleCompleted}
                        setTodoEdit={setTodoEdit}
                    />
                </div>
                <div className="col-4">
                    <TodoItem 
                        todoEdit={todoEdit}
                        todoAdd={todoAdd}
                        todoUpdate={todoUpdate}
                        setTodoEdit={setTodoEdit}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
