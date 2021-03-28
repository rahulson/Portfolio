import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1140px;
  max-width: 94%;
  color: white;
  margin: 0 auto;
`;


const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;