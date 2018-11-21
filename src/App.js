import React, { Component } from "react";
//import user from "./images/user.png";
import "./App.css";
import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  name: "Shakal Shaktishaali",
  description: "Bhoot, Ghost and Serial Killer",
  likes: "Cats, Wine, and Black dresses",
  location: "Haveli"
};

const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    const { name, description, likes, location } = store.getState();
    const user =
      "https://png2.kisspng.com/20180509/sxe/kisspng-avatar-youtube-8-ball-pool-user-5af328dc4a5fe1.9082586915258851483047.png";
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>
        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>
          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
