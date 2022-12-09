import {  Route, Switch } from 'react-router';

import Home from "./containers/Home";
import SignUp  from "./containers/SignUp";
import Signin from './containers/Signin';
import OrderConfirmation from "./containers/Thankyou";
import Cart from "./containers/Cart"
import Shipping from "./containers/Shipping"

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/signup"} component={SignUp} />
        <Route exact path={"/signin"} component={Signin} />
        <Route exact path={"/cart"} component={Cart} />
        <Route exact path={"/shipping"} component={Shipping} />
        <Route
          exact
          path={"/Thankyou"}
          component={OrderConfirmation}
        />
      </Switch>
    </>
  );
};
export default Router;
