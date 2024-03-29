import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./root/App";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import theme from "./app/MaterialTheme";
import { store } from "./redux/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { SocketContext, socket } from "./context/socket";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SocketContext.Provider value={socket}>
            <Router>
              <App />
            </Router>
          </SocketContext.Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
