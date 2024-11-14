import React  from "react";
import { Card,CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import './agri-card.css';
const AgriCard= ({agri}) => {
    const {_id,title,city,photo,price,featured }= agri;

    return (
        <div className="agri__card">
            <Card>
                <div className="agri__img">
                    <img src={photo} alt="agri-img" />
                    {featured && <span>Featured</span>}
                </div>

                <CardBody>
                <div className="card__top d-flex align-items-center justify-content-between">
                    <span className="agri__location d-flex align-items-center gap-1">
                    <i class="ri-map-pin-line"></i>{city}
                    </span>
                </div>
                <h5 className="agri__title">
                    <Link to={`/agris/${_id}`}>{title}</Link>
                </h5>
                <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                    <h5>${price} <span> /- </span></h5>
                    <button className="btn buying__btn">
                        <Link to={`/agris/${_id}`}>Buy Now</Link>
                    </button>
                </div>
            </CardBody>
            </Card>
            
        </div>
    );
};

export default AgriCard;