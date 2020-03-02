import React, { Component } from 'react';
import propTypes from 'prop-types';

import { Container, BackLink, Title } from './styles';

import leftArrow from '../../assets/leftArrow.png';

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
        <BackLink to="/">
          <img src={leftArrow} alt="Back" />
        </BackLink>

        <Title>
          <h1>{post.title}</h1>
        </Title>
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
