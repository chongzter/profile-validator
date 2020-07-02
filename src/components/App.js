import React from "react";
import { Router, Route } from "react-router-dom";
import ProfileCreate from "./profiles/ProfileCreate";
import ProfileDelete from "./profiles/ProfileDelete";
import ProfileEdit from "./profiles/ProfileEdit";
import ProfileList from "./profiles/ProfileList";
import ProfileShow from "./profiles/ProfileShow";
import Header from "./Header";
import history from "../history";
import "../style.css";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={ProfileList} />
          <Route path="/profiles/new" exact component={ProfileCreate} />
          <Route path="/profiles/edit/:id" exact component={ProfileEdit} />
          <Route path="/profiles/delete/:id" exact component={ProfileDelete} />
          <Route path="/profiles/show" exact component={ProfileShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
