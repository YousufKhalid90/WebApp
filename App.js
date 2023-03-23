import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, container } from 'react-bootstrap';
import {testbutton} from './component/button'

function App() {
  return (
    <div className="App">
      React App Demo
      <testbutton buttonname={"login"}/>
      <testbutton buttonname={"lSignup"}/>

      <testexample></testexample>
    </div>
  );
}

export default App;
