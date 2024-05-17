import React, { useState, useEffect } from 'react';

const API_KEY = 'AIzaSyClFj1LlfnQdk7brARTeTrxFZKch7g6VZI';

const fetchPlaceDetails = async (placeId) => {
  const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}?fields=displayName,formattedAddress,reviews,photos,location&key=${API_KEY}`);
  const data = await response.json();
  console.log(data);
  return data;
};

const SearchPlace = ({ placeId }) => {
  const [placeDetails, setPlaceDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!placeId) return;
    setLoading(true);
    fetchPlaceDetails(placeId)
      .then((data) => {
        setPlaceDetails(data);
        setLoading(false);
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

  return (
    <div>
      <img src={`https://places.googleapis.com/v1/${photos[0].name}/media?maxHeightPx=400&maxWidthPx=400&key=${API_KEY}`}/>
      <h2>{displayName.text}</h2>
      <p>Address: {formattedAddress}</p>
      <h3>Reviews:</h3>
      <ul>
        {reviews.slice(0, 3).map((review, index) => (
          <li key={index}>
            <p>{review.authorAttribution.displayName}</p>
            <p>Rating: {review.rating}</p>
            <p>{review.text.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPlace;