const TodoList = ({ todos = [] }: any) => {
    return (
        <div>
            {todos.map((todo: string, index: number) => ( // Iterates todo, assigns index to each item.
                <p key={index}>{todo}</p>
        ))}
    </div>
    )
}

export default TodoList;