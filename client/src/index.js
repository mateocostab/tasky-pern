import React from "react";
import ReactDOM from "react-dom";
import { TodoProvider } from "./context/TodoContext";

import App from "./routes/App";

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById("root")
);
