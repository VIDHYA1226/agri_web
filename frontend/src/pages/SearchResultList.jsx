import React,{useState} from "react";
import CommonSection from "./../shared/CommonSection";
import { Container,Row,Col } from "reactstrap";
import useTitle  from "./useTitle";
import AgriCard from "./../shared/AgriCard";

const SearchResultList= () =>{

    const title = useTitle();
    const [data]=useState(title.state);


    return ( 
    <>
        <CommonSection title={"Product Search Result"}/>
        <section>
            <Container>
                <Row>
                    {data.length===0 ? (
                    <h4 className="text-center">No product found</h4>)  : ( data?.map(agri=> (
                        <Col lg='3' className="mb-4" key={agri._id}>
                             <AgriCard agri={agri} /> </Col>)
                    ))
                    }
                </Row>
            </Container>
        </section>

    </>
    );
};

export default SearchResultList;