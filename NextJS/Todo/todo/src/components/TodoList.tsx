const TodoList = ({ todos = [] }: any) => {
    return (
        <div>
            {todos.map((todo: string, index: number) => (
                <p key={index}>{todo}</p>
        ))}
    </div>
    )
}

export default TodoList;