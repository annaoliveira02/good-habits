import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import DashboardMain from "../pages/DashboardMain";
import DashboardHabits from "../pages/DashboardHabits";
import DashboardGroups from "../pages/DashboardGroups";
import { useState } from "react";
import { useEffect } from "react";
import { useToken } from "../Providers/token";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const { token } = useToken();

  useEffect(() => {
    if (token) {
      return setAuthenticated(true);
    }
  }, [token]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route exact path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/signUp">
        <SignUp authenticated={authenticated} />
      </Route>
      <Route exact path="/dashboardMain">
        <DashboardMain authenticated={authenticated} />
      </Route>
      <Route exact path="/dashboardHabits">
        <DashboardHabits authenticated={authenticated} />
      </Route>
      <Route exact path="/dashboardGroups">
        <DashboardGroups authenticated={authenticated} />
      </Route>
    </Switch>
  );
};

export default Routes;
