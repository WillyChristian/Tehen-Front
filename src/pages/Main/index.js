import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    api.get('/posts').then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts.map((post) => (
          <article key={post._id}>
            <strong>{post.title}</strong>

            <Link to={`/posts/${post._id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    );
  }
}
