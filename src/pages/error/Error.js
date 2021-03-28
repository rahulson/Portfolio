import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction: column;
 color: white;
 align-items: center;
 justify-content: center;
`;

const Error = () => (
    <>
        <Container>
            <h1>This page was not found</h1>
            <p>I'm sorry for the confusion. Please go back and try again.</p>
        </Container>
    </>
);

export default Error