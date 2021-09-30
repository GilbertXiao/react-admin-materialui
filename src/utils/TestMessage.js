import GlobalSnackbarsTest from '../components/custom/GlobalSnackbarsTest'
import ReactDOM from "react-dom";


export default class TestMessage {
  
  static info = (msg) => {
    
  }
  static warn = (msg) => {
    
  }
  static success = (msg) => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<GlobalSnackbarsTest open={true} content={msg} severity={"success"}/>,document.getElementById("root"));
  }
  static error = (msg) => {}
}
