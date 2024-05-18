import React, { useState, useEffect } from 'react';

const API_KEY = 'AIzaSyClFj1LlfnQdk7brARTeTrxFZKch7g6VZI';

const fetchPlaceDetails = async (placeId) => {
  const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}?fields=displayName,formattedAddress,reviews,photos,location&key=${API_KEY}`);
  const data = await response.json();
  console.log(data);
  return data;
};

const fetchWeather = async (location) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=8666a73b1a889c3fecee46782c5f523c&units=metric`);
  const weather = await response.json();
  console.log(weather);
  return weather;
};

const SearchPlace = ({ placeId }) => {
  const [placeDetails, setPlaceDetails] = useState(null);
  const [placeWeather, setPlaceWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!placeId) return;
    setLoading(true);
    fetchPlaceDetails(placeId)
      .then((data) => {
        setPlaceDetails(data);
        fetchWeather(data.location)
          .then((weather) => {
            setPlaceWeather(weather);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
    
  }, [placeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!placeDetails) {
    return null;
  }

  const { displayName, formattedAddress, reviews, photos } = placeDetails;
  const { weather, main, wind } = placeWeather;

  console.log(location);

  function ReviewText({ review }) {
    if (Object.hasOwn(review,"text")) {return <p>{review.text.text}</p>;}
    return <p>No text was submitted.</p>
  }


  return (
    <div className='mx-10 mb-20'>
      <h2 className='text-3xl font-bold mb-5 lg:text-5xl'>{displayName.text}</h2>
      <div className='flex flex-col lg:flex-row'>
        <img 
        src={`https://places.googleapis.com/v1/${photos[0].name}/media?maxHeightPx=400&maxWidthPx=400&key=${API_KEY}`}
        className='rounded-xl w-full lg:w-1/2 mr-5 mb-5 lg:w-2/5 lg:mr-10'
        />
        <div className='flex flex-col text-lg lg:text-xl mb-4'>
          <p className='whitespace-pre text-bold'>Address:</p>
          <p className='mb-3 overflow-hidden whitespace-wrap text-ellipsis'>{formattedAddress}</p>
          <p className='overflow-hidden whitespace-wrap text-ellipsis mb-0.5'>    Temperature: {main.temp} °C</p>
          <p className='overflow-hidden whitespace-wrap text-ellipsis mb-0.5'>    Weather Condition: {weather[0].main}</p>
          <p className='overflow-hidden whitespace-wrap text-ellipsis mb-0.5'>    Humidity: {main.humidity}%</p>
          <p className='overflow-hidden whitespace-wrap text-ellipsis'>    Wind Speed: {wind.speed} m/s</p>
        </div>
      </div>

      <div>
        <iframe
          width="500"
          height="350"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='rounded-xl w-full mb-5'
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyClFj1LlfnQdk7brARTeTrxFZKch7g6VZI&q=place_id:${placeId}`}>
        </iframe>
      </div>
      <div>
        <h3 className='text-xl font-bold'>Reviews</h3>
        <ul>
          {reviews.slice(0, 3).map((review, index) => (
            <li key={index} className='border-4 border-orange-100 p-5 mb-2 rounded-lg'>
              <p className='text-xl mb-1 font-bold'>{review.authorAttribution.displayName}</p>
              <ReviewText review={review} />
              <p className='font-bold mt-3'>Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default SearchPlace;