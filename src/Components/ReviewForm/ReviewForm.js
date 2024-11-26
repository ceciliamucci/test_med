import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  const [ratings, setRatings] = useState([0, 0]); // State to hold ratings for each doctor

  const handleRating = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  return (
    <div className="review-form">
      <h2>Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'Dr. John Doe', specialty: 'Cardiology' },
            { name: 'Dr. Jane Smith', specialty: 'Dermatology' },
          ].map((doctor, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>
                <button className="feedback-link">Leave Review</button>
              </td>
              <td>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${ratings[index] >= star ? 'filled' : ''}`}
                      onClick={() => handleRating(index, star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewForm;