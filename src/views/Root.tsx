import { Provider } from "react-redux";
import Store from "src/store/index";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "src/routes";
import Menu from "src/views/Menu";
import RandomPlayer from "src/views/RandomPlayer";
import NotFound from "src/views/NotFound";
import InProgress from "src/views/InProgress";
import MainTemplate from "src/templates/MainTemplate";
// import SinglePlayer from "src/views/SinglePlayer";
// import MultiPlayer from "src/views/MultiPlayer";

const Root = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route
              exact
              path={routes.home}
              render={() => <Redirect to="/menu" />}
            />
            <Route exact path={routes.menu} component={Menu} />
            <Route exact path="/sw-app" component={Menu} />
            <Route exact path={routes.random} component={RandomPlayer} />
            <Route exact path={routes.singlePlayer} component={InProgress} />
            <Route exact path={routes.multiPlayer} component={InProgress} />
            <Route exact path={routes.about} component={InProgress} />
            <Route exact path={routes.settings} component={InProgress} />
            <Route exact component={NotFound} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
