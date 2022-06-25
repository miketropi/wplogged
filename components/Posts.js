import styled from 'styled-components';

const PostsContainer = styled.div`
  padding: 45px 0;
  background: #f2f4f9;
`;

export default ({ posts }) => {
  return <PostsContainer>
    <div className="content-container">
      Posts here...!
    </div>
  </PostsContainer>
}