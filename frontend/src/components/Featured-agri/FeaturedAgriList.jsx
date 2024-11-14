import React from "react";
import AgriCard from "../../shared/AgriCard";
import { Col } from "reactstrap";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedAgriList = () => {
  const { data: featuredAgris, loading, error } = useFetch(
    `${BASE_URL}/agris/search/getFeaturedAgri`
  );
  //console.log(featuredAgris);
  return (
    <>
      {loading && <h4>Loading...</h4>}
      {error && <h4> {error}</h4>}
      {!loading && !error && featuredAgris?.map(agri => (
        <Col lg="3" className="mb-4" key={agri._id}>
          <AgriCard agri={agri} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedAgriList;
