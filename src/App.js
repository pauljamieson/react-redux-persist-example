import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
