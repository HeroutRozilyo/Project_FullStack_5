function Albums() {
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
    const fetchAlbums = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    setAlbums(data);
    };
    fetchAlbums();
    }, []);
    
    return (
    <div>
    <h2>Albums</h2>
    {albums.map((album) => (
    <div key={album.id}>
    <h3>{album.title}</h3>
    </div>
    ))}
    </div>
    );
    }