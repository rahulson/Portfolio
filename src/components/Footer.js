import React from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Menu from './Menu';


const Footeer = styled(Container)`
  background-color: rgb(10, 4, 22);
  bottom: 0px !important;
  height:auto;
  position: fixed;
  padding-top: 10px !important;
  padding-bottom: 8px !important ;
  h3 {
    font-size: 1em;
    color: white !important;
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
  }
`;

const FooterContent = styled(Col)`
  text-align: center !important;
`
const List = styled.ul`
  margin-top: 0.5em !important;
  margin-bottom: 0.5em !important;
  padding: 0 !important;
`

const SocialIcon = styled.li`
  display: inline-block !important;
  padding-right: 15px;
  padding-left: 15px;
`

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Footeer fluid>
      <Row>
        <FooterContent md="4">
          <h3>Designed and Developed by Rahul Soni</h3>
        </FooterContent>
        <FooterContent md="4">
          <h3>Copyright © {year} RS</h3>
        </FooterContent>
        <FooterContent md="4">
          <List>
            <SocialIcon>
              <a
                href="https://github.com/rahulson"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://www.linkedin.com/in/rahul-s-30328330/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://www.instagram.com/lonelyrocksever/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </SocialIcon>
          </List>
        </FooterContent>
      </Row>
    </Footeer>
  )
}


export default Footer;