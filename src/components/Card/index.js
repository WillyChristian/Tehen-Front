import React, { Component } from 'react';
import { Container, Section, PostCard } from './styles';

import api from '../../services/api';

export default class Card extends Component {
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
      <Container>
        <Section>
          {posts.map((post) => (
            <PostCard key={post._id} to={`/posts/${post._id}`}>
              <strong>{post.title}</strong>
            </PostCard>
          ))}
        </Section>
      </Container>
    );
  }
}
