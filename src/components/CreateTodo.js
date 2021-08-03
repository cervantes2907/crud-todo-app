import React from 'react';
import Todo from './TodoContainer';


const CreateTodo = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {
    return (
        <div>
            <h2 className="text-right display-4">App TodoList</h2>
            
            {
                todos.length === 0
                
                ? (
                    <div className="alert alert-primary">
                        No hay tareas. Por favor agrega una {":)"}
                    </div>
                )
                : (
                    todos.map(todo => (
                        <Todo 
                            todo={todo}
                            key={todo.id} 
                            todoDelete={todoDelete}
                            todoToogleCompleted={todoToogleCompleted}
                            setTodoEdit={setTodoEdit}
                        />
                    ))
                )
            }
            

        </div>
    );
}

export default CreateTodo;