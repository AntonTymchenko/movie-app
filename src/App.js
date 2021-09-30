import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { MovieDetail } from "./components/MovieDetail/MovieDetail";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:imdbId" component={MovieDetail} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
