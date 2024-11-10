import { useState } from "react";

function App() {
  const[name,setName]=useState('');
  const[pass,setPass]=useState('');
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const validUsername = "user";
  const validPassword = "password";
  function login(e){
    e.preventDefault();
    if(!name || !pass){
      setError("Please enter both username and password.")
      return;
    }
    if (name === validUsername && pass === validPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  }
  return (
    <>
    {isAuthenticated ?(
      <div>
        <h1>Login Page</h1>
        <h5>Welcome, user</h5>
      </div>
    ):(
      <form onSubmit={login}>
        <label>Username:</label>
    <input type="text" value={name} placeholder="username" required onChange={(e)=>{
        setName(e.target.value);
      }}/>
      
      <br/>
      <label>Password:</label>
      <input type="password" placeholder="password" value={pass} required onChange={(e)=>{
        setPass(e.target.value);
      }}/>
      
      <br/>
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
    )}
    
    
    </>
  );
}

export default App;
