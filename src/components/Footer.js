import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {    
    return (
        <Row className="footer">
            <Col>
                <a href={'https://andresfelipedev.github.io/resume'} target={'_blank'}>
                    Web site created by Andrés Felipe Pérez Rodríguez | {new Date().getFullYear()}
                </a>
            </Col>            
        </Row>                
    );
};

export default Footer;