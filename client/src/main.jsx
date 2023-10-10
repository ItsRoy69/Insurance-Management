import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import "./fonts/Roboto-Black.ttf";
import "./fonts/Montserrat-VariableFont_wght.ttf";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
