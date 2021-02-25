import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
