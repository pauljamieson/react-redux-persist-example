import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <Main />
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
