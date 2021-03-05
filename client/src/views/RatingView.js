import React from 'react';
import { Title } from '../components/Title';
import { useState, useEffect } from 'react';
import api from '../services/ratingService';
import axios from 'axios';

export default function RatingView() {
  const [ratings, setRatings] = useState([]);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function renderRatings() {
  //     api
  //       .fetchRatings()
  //       .then(data => console.log(data))
  //       .then(data => setRatings({ ratings: data }))
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }

  //   renderRatings();
  // }, []);

  // setTimeout(() => {
  //   console.log(ratings);
  // }, 4000);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/ratings/')
      .then(response => {
        setRatings({ ratings: response.data });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Title>Champions' rating</Title>
      <h2>Hijhjh</h2>
      {/* {ratings.length > 0 && (
        <ul>
          {ratings.map(({ name, score, id }) => (
            <li>
              <p>
                User {name} has rating {score}
                {id}
              </p>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
