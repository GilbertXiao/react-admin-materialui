import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
          <Route path="/" component={Admin} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
