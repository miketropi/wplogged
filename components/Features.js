import FeatureBox from './FeatureBox';
import styled from 'styled-components';

const FeafuresContainer = styled.div`
  padding: 5em 0;

  .features-loop {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    @media(max-width: 768px) { 
      width: 420px;
      max-width: 100%;
      margin: 0 auto;
    }

    > * {
      box-sizing: border-box;
      padding: 0 15px;
      margin-bottom: 30px;
      width: calc(100% / 3);

      @media(max-width: 768px) {
        width: calc(100% / 1);
      }
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