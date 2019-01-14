import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    font-size: 14px;
    color: ${props => props.active ? 'pink' : '#fff'};
    line-height: 1.714;
    padding-right: 33px;
    border-right: 1px dotted #fff;

    &:hover {
        color: #8d8d8d;
        text-decoration: none;
    }

    &:last-child {
        border-right: none;
    }
`

class Link extends Component {
    render() {
      return (
        <StyledLink href={this.props.link}> {this.props.text} </StyledLink>
      );
    }
  }

export default Link;