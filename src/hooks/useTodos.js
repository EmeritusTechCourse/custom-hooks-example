import { useCallback, useEffect, useState } from "react";

export const useTodos = (id) => {
    const [todos, setTodos] = useState([]);
    const [todosLoading, setTodosLoading] = useState(false);
    console.log('useTodos');
    useEffect(() => {
        console.log('useTodos, useEffect')
        if(id)  {
            setTodosLoading(true);
            fetch(`https://dummyjson.com/users/${id}/todos`)
            .then(res => res.json())
            .then(json => {
                setTodos(json.todos);
                setTodosLoading(false);
            });
        }
    }, [id]);

    const create = useCallback((newTodo) => {
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: newTodo,
                completed: false,
                userId: id,
                        })
            })
            .then(res => res.json())
            .then(json => setTodos([...todos, json]));
                }, [id, todos]);
    return {
        todos,
        todosLoading,
        create
    };

};