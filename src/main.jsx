import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppGlobalContext } from "./context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppGlobalContext>
    <main>
      <App />
    </main>
  </AppGlobalContext>
);
