import styled from 'styled-components';

const FeafureBoxContainer = styled.div`

  .feature-box-inner {
    background: white;
    padding: 20px;
    border: solid 1px #eee;
    border-radius: 3px;
    box-shadow: 1px 3px 8px -4px rgba(1,1,1,.3);

    .f-title {
      font-size: 1.2em;
      text-decoration: underline;
    }
  }
`;

export default function FeafureBox({ title, description, imageUrl }) {
  return <FeafureBoxContainer>
    <div className="feature-box-inner">
      <h4 className='f-title'>{ title }</h4>
      <div className="f-description">{ description }</div>
    </div>
  </FeafureBoxContainer>
}