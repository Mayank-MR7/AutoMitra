import React from "react";
import { useParams } from "react-router-dom";

const PartnerDetailPage = () => {
  const { id } = useParams();

  // You can use the `id` to fetch data or display detailed info
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Details for {id.replace(/-/g, " ")}</h1>
      <p>Here you can show more info about the partner with ID: {id}</p>
    </div>
  );
};

export default PartnerDetailPage;
