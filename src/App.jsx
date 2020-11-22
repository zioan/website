import React from "react";
import Layout from "./layout";
import HomePage from "./pages/home";
import AboutUs from "./pages/about-us";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
