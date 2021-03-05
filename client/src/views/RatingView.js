import React from 'react';
import { Title } from '../components/Title';
import { useState, useEffect } from 'react';
import api from '../services/ratingService';
import s from '../styles/transactionHistory.module.scss';

export default function RatingView() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    async function renderRatings() {
      api
        .fetchRatings()
        .then(response => {
          setRatings([...response.data]);
        })
        .catch(error => {
          console.log(error);
        });
    }

    renderRatings();
  }, []);

  return (
    <div>
      <Title>Champions' rating</Title>

      {ratings.length > 0 ? (
        <table className={s.transactionHistory}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Id</th>
            </tr>
          </thead>
          {ratings.map(({ name, score, id }) => (
            <tbody key={id}>
              <tr>
                <td>{name}</td>
                <td>{score}</td>
                <td>{id}</td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <p>nothing to render</p>
      )}
    </div>
  );
}

// <li key={id}>
//   <p>
//     User {name} has rating {score}
//     {id}
//   </p>
// </li>
