import React from 'react'
import services from "../data/serviceData.js";
import { useParams } from 'react-router-dom';
const ServiceDetails = () => {
    const { id } = useParams();
    const service = services.find((a) => a.id === parseInt(id));  
    if (!service) {
      return <div>Service not found</div>;
    }

  return (
    <>
    <div className='container'>
    <div><p>{service.description}</p></div>
    </div>
    </>
  )
}

export default ServiceDetails
