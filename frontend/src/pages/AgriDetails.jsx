import React,{useEffect, useRef,useState, useContext} from "react";
import '../styles/agri-details.css';
import {Container ,Row, Col,Form,ListGroup} from 'reactstrap';
import { useParams } from "react-router-dom";
import Buying from "../components/Buying/Buying";
import useFetch from "../hooks/useFetch";
import {BASE_URL } from "../utils/config";

const AgriDetails= (tour ) =>{
    const {id}= useParams();
    //fetch data from db
    const {data:agri , loading, error } = useFetch(`${BASE_URL}/agris/${id}`);
    //destructure properties from tour object
    const {photo, title, desc, price, address, city,distance, maxGroupSize }=agri;
    //formate date
    const options ={day:'numeric', month:'long' , year: 'numeric'};

    useEffect(() => {
        window.scrollTo(0,0);
    }, [tour]);

    return (
        <>
        <section>
            <Container>
                {
                    loading && <h4 className="text-center pt-5 ">Loading.........</h4>
                }
                {
                    error && <h4 className="text-center pt-5 ">{error}</h4>
                }
               {
                !loading && !error &&  <Row>
                <Col lg="8">
                <div className="agri__content">
                    <img src={photo} alt="" />
                    <div className="agri__info">
                        <h2>{title}</h2>
                <span>      
                <i class="ri-map-pin-user-fill"></i> {address}
                </span>
          <div className="tour__extra-details">
            <span><i class="ri-map-pin-2-line"></i>{city}</span>
            <span><i class="ri-money-dollar-circle-line"></i> ${price}
            /- </span>
            
          </div>
            <h5>Description</h5>
            <p>{desc}</p>
        </div>
    </div>
    </Col>
            <Col lg="4">
            <Buying agri={agri} />
            </Col>
            </Row>
               }
            </Container>
        </section>
        </>
    )
};

export default AgriDetails;