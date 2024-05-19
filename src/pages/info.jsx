import React from "react";
import SearchPlace from "../components/place";
import { useParams } from "react-router-dom";
import FetchWeatherData from "../components/weather"

// const id = "ChIJfbK2kZJI4zER_2Z0sRKaMPU"

const Info = () => {
  const { id } = useParams();
  console.log("id: "+id);
  return (
    <>
      <SearchPlace placeId={id} />
    </>
    
  ); 
};



export default Info;
