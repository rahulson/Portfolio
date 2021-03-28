import React from 'react'
import { Container } from '../../components'
import Particles from "react-particles-js";
import Typed from 'react-typed';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import particles from '../../data/particle'
import '../../components/css/home.css'

function Home() {
  return (
    <>
      <Background params={particles} />
      <Intro>
        <Container>
          <Headline>
            Hi all!  <span className="wave">👋🏻</span>
          </Headline>
          <Headline>
            <Typed
              loop
              typeSpeed={80}
              backSpeed={20}
              strings={[
                "I'm <span class='accent'>Rahul</span> Soni.",
                "I'm a <span class='accent'>MERN Stack developer</span>.",
                "I'm an <span class='accent'>Open Source Contributor</span>.",
                "I'm a <span class='accent'>creative</span> mind.",
              ]}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
              className="typed"
            />
          </Headline>
          <Text>
            As a senior software engineer with years of experience I create
            amazing websites and mobile apps to make the internet a better place.{' '}
            <strong>
              <Link to="/contactus/">Get in touch</Link>
            </strong>{' '}
            to discuss how we can work together.
          </Text>
        </Container>
      </Intro>
    </>
  )
}

const Background = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

const Intro = styled.section`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Headline = styled.h1`
  font-size: 3rem;
  line-height: normal;
  margin: 0.5rem 0;
  color: white;
  .accent {
    color: #e94e1b;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0.5rem 0;
  color: white
`;

export default Home