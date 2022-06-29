import styled from 'styled-components';

const HeroSectionContainer = styled.div`
  position: relative;
  background-color: black;
  color: white;
  padding: 18vh 0;
  background-image: url('https://images.unsplash.com/photo-1594235046256-90e5572fd5f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(1,1,1,.6);
  }

  .hero-section__entry {
    position: relative;
    z-index: 3;
    width: 500px;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;

    .heading {
      font-size: 2em;
      line-height: 1.3em;

      @media(max-width: 768px) {
        font-size: 6vw;
      }
    }

    .sub-heading {

    }

    .description {

    }

    .actions {
      margin-top: 2em;
    }
  }
`

export default ({ heading, subHeading, description, actions }) => {
  return <HeroSectionContainer>
    <div className="site-container">
      <div className="hero-section__entry">
        {
          heading != null && 
          <h2 className="heading">{ heading }</h2>
        }
        
        {
          subHeading != null &&
          <div className="sub-heading">{ subHeading }</div>
        }
        
        {
          description != null &&
          <div className="description"><p>{ description }</p></div>
        }

        {
          actions &&
          <div className="actions">
            {
              actions.map(item => item)
            }
          </div>
        }
      </div>
    </div>
  </HeroSectionContainer>
}