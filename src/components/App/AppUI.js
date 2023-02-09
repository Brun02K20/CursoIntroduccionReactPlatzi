import React from "react";

import { TodoCounter } from '../TodoCounter/TodoCounter.js';
import { TodoSearch } from '../TodoSearch/TodoSearch.js';
import { TodoList } from '../TodoList/TodoList.js';
import { TodoItem } from '../TodoItem/TodoItem.js';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton.js';

function AppUI({totalTodos, 
    completedTodos, 
    searchValue, 
    setSearchValue, 
    searchedTodos, 
    toggleCompleteTodo, 
    deleteTodo
}){
    return(
        // para que funcione la aplicacion primero debo crear esos componentes que declare antes de ver los resultados en mi navegador
        // nota: a la lista de TO-DOs le puse apertura y cierre porque va a haber componentes dentro de ese componente, es decir, la lista es un componente compuesto por componentes

        // dentro del todoList creamos el componente reutilizable en el que figurara un todo individual, ahora bien, que hace ese .map()? Por cada uno de los TODO que haya dentro de la lista renderice ese todoitem

        // nota: a la hora de juntar los componentes debo encerrarlos todos en un div, pero hay un problema, es que por cada componente no quiero crear un div para envolver el resto de elementos a renderizar porque seria dificil establecer los estilos en css, para solucionar esto lo que hacemos es en vez de poner un div, le pediremos a react que renderice una "etiqueta invisible" llamada React.Fragment.

        // Lo que pasa es que react necesita que enviemos solo una etiqueta por componente, y dentro de dicha etiqueta enviemos lo que se nos cante el ogt

        // ahora bien, a la hora de crear componentes, se crea un archivo por cada componente a crear, asi que procedemos con eso
        <React.Fragment>
            < TodoCounter 
                total={totalTodos}  // asi es como envio propiedades a los componentes hijos
                completed={completedTodos}
            /> 
            
            < TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            /> 
            
            <TodoList>
                {searchedTodos.map(todo => (
                    < TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete = {() => toggleCompleteTodo(todo.text)} // pongo el todo.text porque es lo que asignamos como id unico
                        onDelete = {() => deleteTodo(todo.text)}
                    />))
                }
            </TodoList>
            
            < CreateTodoButton />
        </React.Fragment>
    );
};

export { AppUI };