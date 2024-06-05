import React, { useEffect, useState } from "react";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

// import List from "../../public/list.json";
import Cards from "./Cards";

function FreeBook() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios("http://localhost:4000/book");
        // console.log(res.data)
        const data = res.data.filter((data) => data.category === "free");
        setBook(data)
      }
      catch (error) {
        console.log("error",error)
      }
    }
    getBook();
  },[])
  // const filterData = List.filter((data) => data.category === "free");
  // console.log(filterData)
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            dolorum odit voluptatibus nulla quia, animi, quidem aperiam
            doloremque molestiae eum culpa nobis ipsam?
          </p>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id}></Cards>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default FreeBook;
