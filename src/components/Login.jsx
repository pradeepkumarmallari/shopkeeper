import GetRequest from "../api/GetRequest";

function Login() {
    return (
      <div className="App-Page">
        <h2>Shop Keeper Utility Application</h2>
        <h5>Login Page</h5>
        <input type="input" placeholder="Username" id="username" className="input"></input>
        <p></p>
        <input type="password" placeholder="Password" id="password" className="input"></input>
        <p></p>
        <button onClick={authenticate} className="button">Login</button>
        <label id="message" className="error"></label>
        
      </div>
    );
  }

  
  
  function authenticate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username==="admin" && password==="admin"){
      GetRequest.executeHelloWorldService()
      .then(response =>GetRequest.message=response.value)
      window.location.href = "/home";
      
    }
    else{
      document.getElementById("message").innerHTML="Invalid Username or Password!!!"
     
    }
}
  export default Login;