import React, { Component } from "react";
import { firestore, auth } from "../firebase";
import Posts from "./Posts";

import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";
import { collectIdsAndData } from "../utilities";

class Application extends Component {
  state = {
    posts: [],
    user: null
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection("posts")
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectIdsAndData);
        this.setState({ posts });
      });
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
    this.unsubscribeFromAuth();
  };

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        {user ? <CurrentUser {...user} /> : <SignInAndSignUp />}
        <h1>Think Piece</h1>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
