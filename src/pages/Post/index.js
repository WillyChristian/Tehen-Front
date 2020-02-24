import React, { Component } from 'react';
import propTypes from 'prop-types';

import api from '../../services/api';

class Post extends Component {
  state = {
    post: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    await api.get(`/posts/${id}`).then((res) => {
      const post = res.data;
      this.setState({ post });
    });
  }

  render() {
    const { post } = this.state;

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
}

Post.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Post;
