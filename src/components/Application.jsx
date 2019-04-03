import React, { Component } from "react";
import { firestore } from "../firebase";
import Posts from "./Posts";

import { collectIdsAndData } from "../utilities";

class Application extends Component {
  state = {
    posts: []
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection("posts").onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndData);
      this.setState({ posts });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleCreate = async post => {
    const docRef = await firestore.collection("posts").add(post);
    const doc = await docRef.get();

    const newPost = {
      id: doc.id,
      ...doc.data()
    };

    const { posts } = this.state;
    this.setState({ posts: [newPost, ...posts] });
  };

  handleRemove = async id => {
    const allPosts = this.state.posts;

    const posts = allPosts.filter(post => id !== post.id);

    await firestore.doc(`posts/${id}`).delete();

    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts
          posts={posts}
          onCreate={this.handleCreate}
          onRemove={this.handleRemove}
        />
      </main>
    );
  }
}

export default Application;
