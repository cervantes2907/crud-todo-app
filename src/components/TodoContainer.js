import React from 'react'

const TodoContainer = ({ todo, todoDelete, todoToogleCompleted, setTodoEdit }) => {
 

    return (
        <>
        <div className="card mt-2">
            <div className="card-body">
                <h3 className="card-title text-right">
                    {todo.task}
                </h3>
                    <p className="card-student text-right">
                    {todo.student}
                    </p>
                    <button
                        onClick={() => todoToogleCompleted(todo)}
                        className={`btn btn-sm ${todo.isCompleted ? 'btn-outline-success' : 'btn-success'} ml-2 `}
                    >
                        { todo.isCompleted ? 'Terminado' : 'sin Terminar'}
                    </button>
                <hr />
                <div className="d-flex justify-content-end">
                    <button 
                        onClick={() => setTodoEdit(todo)}
                        className="btn btn-sm btn-outline-primary mr-2"
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => todoDelete(todo.id)}
                        className="btn btn-sm btn-outline-danger"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default TodoContainer;