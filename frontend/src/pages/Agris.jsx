import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/agri.css";

import AgriCard from "./../shared/AgriCard";
import { Container, Row, Col } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Agris = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const { data: agris, loading, error } = useFetch(`${BASE_URL}/agris?page=${page}`);
    const { data: agriCount } = useFetch(`${BASE_URL}/agris/search/getAgriCount`);

    useEffect(() => {
        // Only update pageCount if agriCount is a valid number
        if (typeof agriCount === 'number' && agriCount > 0) {
            const pages = Math.ceil(agriCount / 8);
            setPageCount(pages);
        }
        window.scrollTo(0, 0);
    }, [page, agriCount, agris]);

    return (
        <>
            <CommonSection title={"All Agris"} />
            <section>
                <Container>
                    <Row>
                       
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    {loading && <h4 className="text-center pt-5">Loading.........</h4>}
                    {error && <h4 className="text-center pt-5">{error}</h4>}
                    {!loading && !error && (
                        <Row>
                            {agris?.map(agri => (
                                <Col lg="3" className="mb-4" key={agri._id}> 
                                    <AgriCard agri={agri} />
                                </Col>
                            ))}
                            <Col lg="12">
                                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                    {[...Array(pageCount).keys()].map(number => (
                                        <span 
                                            key={number} 
                                            onClick={() => setPage(number)}
                                            className={page === number ? "active__page" : ""}
                                        >
                                            {number + 1}
                                        </span>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
        </>
    );
};

export default Agris;
