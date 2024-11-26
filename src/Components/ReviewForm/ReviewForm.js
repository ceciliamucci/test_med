import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ doctors = [] }) => {
  const [ratings, setRatings] = useState(Array(doctors.length).fill(0));
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', review: '', rating: 0 });
  const isLoggedIn = !!sessionStorage.getItem("auth-token"); // Check if user is logged in

  const handleRating = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  const handleReviewButtonClick = (index) => {
    if (!isLoggedIn) {
      alert('You must be logged in to leave a review.');
      return;
    }
    setShowReviewForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctorIndex = formData.rating === 1 ? 0 : 1; // Adjust this logic as needed
    handleRating(doctorIndex, formData.rating);
    setShowReviewForm(false);
    setFormData({ name: '', review: '', rating: 0 });
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
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td>{index + 1}</td>
              <td>{doctor.name}</td>
              <td>{doctor.speciality}</td>
              <td>
                <button className="feedback-link" onClick={() => handleReviewButtonClick(index)}>Leave Review</button>
              </td>
              <td>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${ratings[index] >= star ? 'filled' : ''}`}
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

      {showReviewForm && <div className="overlay" onClick={() => setShowReviewForm(false)}></div>}

      {showReviewForm && (
        <div className="review-form-container">
          <h2>Give Your Review</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="review">Review:</label>
              <textarea id="review" name="review" value={formData.review} onChange={handleChange} required />
            </div>
            <div>
              <label>Rating:</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${formData.rating >= star ? 'filled' : ''}`}
                    onClick={() => setFormData({ ...formData, rating: star })}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;