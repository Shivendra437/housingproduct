import React from "react";
import Room from "./Room";

export default function Product() {
  let iteams = [
    {
      title: "queen panel bed",
      type: "Household",
      price: 2500,
      rating: 4,
      image: "./images/product-1.jpeg"
    },

    {
      name: "king panel bed",
      type: "Household",
      price: 3000,
      rating: 3,
      image: "./images/product-2.jpeg"
    },
    {
      name: "single panel bed",
      type: "Household",
      price: 2200,
      rating: 5,
      image: "./images/product-3.jpeg"
    },
    {
      name: "twin panel bed",
      type: "Household",
      price: 2800,
      rating: 4,
      image: "./images/product-4.jpeg"
    },
    {
      name: "fridge",
      type: "Kitchen",
      price: 1880,
      rating: 2,
      image: "./images/product-5.jpeg"
    },
    {
      name: "dresser",
      type: "furniture",
      price: 3200,
      rating: 3,
      image: "./images/product-6.jpeg"
    },
    {
      name: "Coombes",
      type: "Lounge",
      price: 4500,
      rating: 5,
      image: "./images/product-7.jpeg"
    },
    {
      name: "Keeve Set",
      type: "Tables & Chairs",
      price: 1300,
      rating: 4,
      image: "./images/product-8.jpeg"
    }
  ];

  return (
    <>
      {/* iteams.map((el)=>{ */}
      {/* //   return <Room names={el.name} type={el.type} price={el.price} rating={el.rating}image={el.image}/> */}
      {/* // }
// )
//     } */}
    </>
  );
}
