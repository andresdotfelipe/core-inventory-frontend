import React, { PureComponent } from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Row className="justify-content-center">
            <Col xs={12}>
                <span>
                    Site created by Andrés Felipe Pérez Rodríguez
                </span>
            </Col>
            <Col xs={12}>
                <span>
                    {(new Date).getFullYear()}
                </span>                
            </Col>
        </Row>                
    );
};

export default Footer;