function Todos() {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
    const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    setTodos(data);
    };
    fetchTodos();
    }, []);
    
    return (
    <div>
    <h2>Todos</h2>
    {todos.map((todo) => (
    <div key={todo.id}>
    <p>{todo.title}</p>
    <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
    </div>
    ))}
    </div>
    );
    }