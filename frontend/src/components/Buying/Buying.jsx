import React, { useState, useContext } from "react";
import './buying.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Buying = ({ agri }) => {
    const { price, title } = agri;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext); // Assumes `user.token` contains the access token

    const [buying, setBuying] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        agriName: title,
        fullName: "",
        phone: '',
        count: 1,
        AddCart: ''
    });

    const handleChange = e => {
        setBuying(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const serviceFee = 100;
    const totalAmount = Number(price) * Number(buying.count) + Number(serviceFee);

    const handleClick = async e => {
        e.preventDefault();

        console.log(buying)
       
        try {

            if(!user || user===undefined || user===null){
                return alert('Please sign in');
            }
            const res = await fetch(`${BASE_URL}/buyings`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: "include", // Ensures cookies are sent
                body: JSON.stringify(buying)
            });

            const result = await res.json();
            if (!res.ok) {
                return alert(result.message);
            }
            navigate('/thank-you');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="buying">
            <div className="buying__top d-flex align-items-center justify-content-between">
                <h3>${price} <span> /per product </span></h3>
            </div>

            <div className="buying__form">
                <h5>Information</h5>
                <Form className="buying__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input type="date" id="AddCart" required onChange={handleChange} />
                        <input type="number" placeholder="Count" id="count" required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>

            <div className="buying__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">
                            ${price} <i className="ri-close-line"></i> 1 product
                        </h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Service charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Buy Now</Button>
            </div>
        </div>
    );
};

export default Buying;
