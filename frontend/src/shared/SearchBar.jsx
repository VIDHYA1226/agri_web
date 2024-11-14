import React, { useRef } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const titleRef = useRef("");

    const navigate=useNavigate();

    const searchHandler = async() => {
        const title = titleRef.current.value;

        if (title === "") {
            return alert("Enter the product name!!");
        }

        const res = await fetch(`${BASE_URL}/agris/search/getAgriBySearch?title=${title}`);

        if(!res.ok)  alert("Something went wrong ");

        const result=await res.json();

        navigate(`/agris/search?title=${title}`,
            { state: result.data }
        );
    };

    return (
        <Col lg="12">
            <div className="search__bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-map-pin-line"></i> {/* Changed class to className */}
                        </span>
                        <div>
                            <h6>Product name</h6>
                            <input 
                                type="text" 
                                placeholder="Enter the product name" 
                                ref={titleRef} 
                            />
                        </div>
                    </FormGroup>
              
                    <span 
                        className="search__icon" 
                        type="submit" 
                        onClick={searchHandler}
                    >
                        <i className="ri-search-line"></i> {/* Changed class to className */}
                    </span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;
