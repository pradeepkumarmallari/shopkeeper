import './App.css';
import './components/Login.jsx'
import Login from './components/Login.jsx';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home.jsx';
import AddItems from './components/AddItems.jsx';
import AddBill from './components/AddBill';
function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route path="/" exact component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/addItems" component={AddItems}/>
          <Route path="/addBill" component={AddBill}/>
        </>
        
      </Router>
    </div>
  );
}

export default App;
