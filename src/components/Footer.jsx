


function Logout() {
    return (
      <div>
        <p></p>
        <p></p>
        <button className="button" onClick={loggoff}>Log out</button>
      </div>
    );
  }

  function loggoff(){
    window.location.href = "/";
    window.localStorage.clear();
  }
  
  export default Logout;
