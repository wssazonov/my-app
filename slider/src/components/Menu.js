import React, { Component } from 'react';
import '../App.css';

import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Repair = styled.div `
    color: #464646;
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
`

const WorkTime = styled.div `
    color: #2a2a2a;
    font-size: 12px;
    font-weight: 300;
    line-height: 24px;

    span {
        display: block;
        font-weight: 700;
        color: #464646;
        font-size: 21px;
    }
`

const Calls = styled.div `
    color: #2a2a2a;
    font-size: 12px;
    font-weight: 300;
    line-height: 24px;

    span {
        display: block;
        font-weight: 700;
        color: #464646;
        font-size: 21px;
    }
`

class Address extends Component {
    render() {
        return (
            <span>
                {this.props.addr}
            </span>
        )
    }
}

class PhoneNumber extends Component {
    render() {
        return (
            <span>
                {this.props.phone}
            </span>
        )
    }
}

class Menu extends Component {
    render() {
        return (
            <Row>
                <Col lg={3}>
                    <Repair>
                        Ремонт айфонов в сервисном центре и на выезде
                    </Repair>
                </Col>
                <Col lg={3} lgOffset={1}>
                    <WorkTime>
                        Пн-Пт с 10 до 20, сб, вс с 11 до 18
                        <Address addr="Ленинская, 301" />
                    </WorkTime>
                </Col>
                <Col lg={3}>

                </Col>
                <Col lg={2}>

                </Col>
            </Row>
        )
    }
}

export default Menu;