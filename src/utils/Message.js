import GlobalSnackbars from "../components/custom/GlobalSnackbars";
import ReactDOM from "react-dom";

export default class Message {
  static count = 0;

  static getDivCtn = () => {
    if (!this.div) {
      this.div = document.createElement("div");
      document.body.appendChild(this.div);
    }
    return this.div;
  };

  static info = (msg) => {
    ReactDOM.render(
      <GlobalSnackbars key={Message.count++} content={msg} severity={"info"} />,
      Message.getDivCtn()
    );
  };
  static warn = (msg) => {
    ReactDOM.render(
      <GlobalSnackbars
        key={Message.count++}
        content={msg}
        severity={"warning"}
      />,
      Message.getDivCtn()
    );
  };
  static success = (msg) => {
    ReactDOM.render(
      <GlobalSnackbars
        key={Message.count++}
        content={msg}
        severity={"success"}
      />,
      Message.getDivCtn()
    );
  };
  static error = (msg) => {
    ReactDOM.render(
      <GlobalSnackbars
        key={Message.count++}
        content={msg}
        severity={"error"}
      />,
      Message.getDivCtn()
    );
  };
}
