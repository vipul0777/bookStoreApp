import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
      <div className="mt-28 items-center justify-center text-center">
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 ">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here ! :</span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            corporis consequuntur at praesentium error incidunt corrupti
            voluptates atque. Possimus repellendus modi, dolor aliquid quasi hic
            iure sequi deleniti doloribus consequatur quos odio cum voluptate
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            voluptatum? Lorem ipsum dolor sit amet.
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
