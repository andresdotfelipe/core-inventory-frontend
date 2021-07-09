import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {    
    return (
        <Row className="footer">
            <Col>
                <a href={'https://andresfelipedev.github.io/portfolio'} target={'_blank'} rel={'noopener noreferrer'}>
                    Web application created by Andrés Felipe Pérez Rodríguez
                </a>
            </Col>            
        </Row>                
    );
};

export default Footer;