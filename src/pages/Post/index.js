import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';

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
      <Container>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </Container>
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
