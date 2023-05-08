function Info() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    return (
    <div>
    <h2>Personal Information</h2>
    <p>Name: {user.name}</p>
    <p>Username: {user.username}</p>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Website: {user.website}</p>
    </div>
    );
    }