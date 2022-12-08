
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
