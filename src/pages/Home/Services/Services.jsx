import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  
  

  useEffect(() => {
    fetch("https://car-service-server-ruddy.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        
        setServices(data)});
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-red-600 font-semibold">Our Services</h2>
      <h2 className="text-3xl">Our Service Area</h2>

      <p>
        The majority have suffered alteration in osme form, by injected humour,
        or randomised<br></br> words which do not look even slightly beleivable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
