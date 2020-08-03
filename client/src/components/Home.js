import React, { useEffect } from 'react';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';
import CardContainer from './CardContainer';
import LogoContainer from './LogoContainer';
import InstaContainer from './InstaContainer';
import axios from 'axios';

const Home = () => {
    // useEffect(() => {
    //     axios
    //         .get('http://ygc-server:5000/api/auth/current-user')
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // });

    return (
        <React.Fragment>
            <AppNavbar />
            <Container fluid>
                <Row>
                    <Col xs='12' md='3'>
                        <LogoContainer />
                        <InstaContainer />
                    </Col>
                    <Col xs='12' md='8' className='mx-auto'>
                        <div className='all_cards_container'>
                            <CardContainer />
                            <CardContainer />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export default Home;
