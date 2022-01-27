import Logout from "./Footer.jsx";

function Home() {
    return (
      <div className="App-Page">
        <h2>Shop Keeper Utility Application</h2>
        <h4>Home Page</h4>
        <h5></h5>
        <span>
          <a className="button" href="/addBill">Add Bill</a>
          <br/>
        </span>
        <span>
          <a className="button" href="/addItems">Add Items</a>
          <br/>
          <a className="button">Search Items</a>
          <br/>
        </span>
        <a className="button">Reports</a>
        <br/>
        <a className="button">Add User</a>
        <p></p> 
        <Logout></Logout>
      </div>

    );
  }



  

  
  export default Home;