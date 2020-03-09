import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Row className="footer">
            <Col xs={12}>
                <span className="text">
                    Web site created by Andrés Felipe Pérez Rodríguez
                </span>
            </Col>
            <Col xs={12}>
                <span className="year">
                    {new Date().getFullYear()}
                </span>                
            </Col>
        </Row>                
    );
};

export default Footer;