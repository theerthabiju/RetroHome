import { img } from 'framer-motion/client'
import React from 'react'
import Ofimg from '../../assets/Imges/offi.jpg'
import Oneoff from '../../assets/Imges/officeone.jpg'
import Offf from '../../assets/Imges/offoo.jpg'
const offices = [
  {
    id: 1,
    name: "Smoky Hollow",
    address: "9514 Smoky Hollow St. Sulphur, LA 70663",
    phone: "(736) 267-8659",
    email: "rsmartin@gmail.com",
    image: Ofimg
  },
  {
    id: 2,
    name: "North Road",
    address: "19 North Road Piscataway, NJ 08854",
    phone: "(736) 267-8659",
    email: "rsmartin@gmail.com",
    image: Oneoff
  },
  {
    id: 3,
    name: "Rockville Ave",
    address: "8460 Rockville Ave. Greenville, NC 27834",
    phone: "(736) 267-8659",
    email: "rsmartin@gmail.com",
    image: Offf
  },
];
 
 

const Office = () => {
  return (
    
<section className="py-5" style={{ backgroundColor: "#f0f2f5" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-2">Our Offices</h2>
        <p className="text-muted mb-5">
          Easy and smooth guidance to help you through the process.
        </p>

        <div className="row g-4">
          {offices.map((office) => (
            <div className="col-12 col-md-4" key={office.id}>
              <div className="card border-0 shadow-sm">
                <img
                  src={office.image}
                  alt={office.name}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-start">
                  <h5 className="fw-bold">{office.name}</h5>
                  <p className="mb-1">{office.address}</p>
                  <p className="mb-1">
                    <strong>Phone:</strong> {office.phone}
                  </p>
                  <p className="mb-0">
                    <strong>Email:</strong> {office.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Office;
