import React from "react";
import '../styles/home.css';
import {Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import  heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-img03.JPG';
import worldImg from '../assets/images/world.png';
import Subtitle from "../shared/Subtitle";
import FeaturedAgriList from "./../components/Featured-agri/FeaturedAgriList";

const Home= ( ) =>{
    return( <>
    {/*hero section start*/}
    <section>
        <Container>
            <Row>
                <Col lg="6">
                <div className="hero__content">
                    <div className="hero__subtitle d-flex align-items-center ">
                        <Subtitle subtitle={'Know Before You Go'}/>
                        <img src={worldImg} alt="" />
                    </div>
                <h2>Quality products ensure a bountiful harvest and lasting <span
                className="highlight"> impact</span>
                </h2>
                <p>Quality products ensure a bountiful harvest and lasting impact. 
                    By providing farmers with reliable resources, we support 
                    sustainable growth and help build thriving communities, 
                    fostering a resilient agricultural ecosystem
                </p>
                </div>
                </Col>
                <Col lg="2">
                <div className="hero__img-box">
                    <img src={heroImg} alt="" />
                </div>
                </Col>
                <Col lg="2">
                <div className="hero__img-box mt-4">
                    <img src={heroVideo} alt=""  />
                </div>
                </Col>
                <Col lg="2">
                <div className="hero__img-box mt-5">
                    <img src={heroImg02} alt="" />
                </div>
                </Col>
             
            </Row>
        </Container>
    </section>
    {/* hero section start */}
   
    <section>
        <Container>
            <Row>
                <Col lg="12"className="mb-5">
                <Subtitle subtitle={'Explore'}/>
                <h2 className="featured__agri-title">Our featured products</h2>
                </Col>
                <FeaturedAgriList />
            </Row>
        </Container>
    </section>

    {/*featured tour section end*/}

    </>
    );
};

export default Home;