import React, { useEffect } from 'react';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';
import CardContainer from './CardContainer';
import LogoContainer from './LogoContainer';
import InstaContainer from './InstaContainer';
import axios from 'axios';
import {
    getUser,
    getUserFailed,
    incompleteUserDetails
} from '../redux/auth/authActionCreator';
import { useDispatch } from 'react-redux';
import { HOST } from '../variables';
import { Redirect } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getUserId = async () => {
            try {
                const user = await axios.get(`${HOST}/api/auth/current-user/`, {
                    withCredentials: true
                });
                console.log(user);

                if (user.data.success) {
                    dispatch(
                        getUser(
                            user.data.user.user_id,
                            user.data.user.image_url
                        )
                    );
                    if (user.data.user.name === null) {
                        dispatch(incompleteUserDetails());
                    }
                } else {
                    dispatch(getUserFailed());
                }
            } catch (error) {
                console.log(error);
            }
        };

        getUserId();
    }, [dispatch]);

    return (
        <React.Fragment>
            <AppNavbar />
            <Container fluid>
                <Row>
                    <Col xs='12' md='3'>
                        <LogoContainer />
                        {/* <InstaContainer /> */}
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
