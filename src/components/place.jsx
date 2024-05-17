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

  

  return (
    <div>
      <img src={`https://places.googleapis.com/v1/${photos[0].name}/media?maxHeightPx=400&maxWidthPx=400&key=${API_KEY}`}/>
      <h2>{displayName.text}</h2>
      <p>Address: {formattedAddress}</p>

      <iframe
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyClFj1LlfnQdk7brARTeTrxFZKch7g6VZI&q=place_id:${placeId}`}>
      </iframe>

      <h2>Current Weather Condition in {displayName.text}</h2>
      <p>Temperature: {main.temp} °C</p>
      <p>Weather Condition: {weather[0].main}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>

      <h3>Reviews:</h3>
      <ul>
        {reviews.slice(0, 3).map((review, index) => (
          <li key={index}>
            <p>{review.authorAttribution.displayName}</p>
            <p>Rating: {review.rating}</p>
            {review.text.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPlace;