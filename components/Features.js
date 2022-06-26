import FeatureBox from './FeatureBox';
import styled from 'styled-components';

const FeafuresContainer = styled.div`
  padding: 5em 0;

  .features-loop {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    > * {
      box-sizing: border-box;
      padding: 0 15px;
      margin-bottom: 30px;
      width: calc(100% / 3);
    }
  }
`;

export default ({ title, features }) => {
  return <FeafuresContainer>
    <div className="content-container">
      <div className="features-inner">
        {
          title != '' &&
          <h2 className="ss-title">{ title }</h2>
        }
        <div className="features-loop">
          {
            features.length > 0 && 
            features.map((f, _index) => <FeatureBox
              key={ _index }
              title={ f.title } 
              description={ f.description } 
              imageUrl={ f.imageUrl } />)
          }
        </div>
      </div>
    </div>
  </FeafuresContainer>
}