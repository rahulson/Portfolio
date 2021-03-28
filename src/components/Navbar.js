import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './css/navbar.css'
// import '../style.css'

function NavBar() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isStickyNavBar, setIsStickyNavBar] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    function handleScroll() {
        if (window.scrollY >= 20) {
            setIsStickyNavBar(true)
        } else {
            setIsStickyNavBar(false)
        }
    }

    return (
        <Navbar
            expanded={isExpanded}
            fixed="top"
            expand="md"
            className={isStickyNavBar ? "sticky" : "navar"}
        >
            <Container>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        setIsExpanded(prevState => prevState ? false : "expanded")
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => setIsExpanded(false)}>
                                <i className="fas fa-home"></i> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => setIsExpanded(false)}
                            >
                                <i className="far fa-user"></i> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/project"
                                onClick={() => setIsExpanded(false)}
                            >
                                <i className="fab fa-codepen"></i> Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/contactus"
                                onClick={() => setIsExpanded(false)}
                            >
                                <i className="fa fa-address-book"></i> Contact
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar