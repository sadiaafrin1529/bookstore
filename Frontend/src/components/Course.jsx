import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom'
import axios from 'axios'
function Course() {
  const [book,setBook]=useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_LIVE_URL}/book`);
        // console.log(res.data)
        setBook(res.data)
      }

      catch (error) {
        console.log("error",error)
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here !!!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto
            aperiam ea similique odit minus asperiores aut molestiae. Recusandae
            perspiciatis iusto dolorum sint ex ea error consectetur inventore ab
            exercitationem, voluptatem, quibusdam veniam. Fugit quaerat eaque
            modi aliquam! Veritatis commodi, explicabo mollitia rerum aliquid
            magni quidem deleniti quaerat non qui soluta nam unde expedita
            facilis, quisquam perspiciatis aspernatur ex nostrum.
          </p>

          <Link to='/'>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course
