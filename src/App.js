import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./component/layout/Layout";
import Login from "./component/login/Login";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  return (
    <Layout>
      <Switch>
        {/* <Route path="/" exact>
          <AllMeetupsPage />
        </Route> */}
        <PrivateRoute component={AllMeetupsPage} path="/" exact></PrivateRoute>
        <PrivateRoute
          component={NewMeetupPage}
          path="/new-meetup"
          exact
        ></PrivateRoute>

        <PrivateRoute
          component={FavoritesPage}
          path="/favorites"
          exact
        ></PrivateRoute>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
