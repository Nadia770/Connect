import React from "react";
import Spinner from "react-bootstrap/Spinner";


export default function Loader() {
  return (
<>
  <Spinner animation="border" size="lg" variant="primary" />
  <Spinner animation="border"  variant="secondary" />
  <Spinner animation="grow" variant="danger" size="lg" />
  <Spinner animation="grow" variant="warning" />
</>
  )
}