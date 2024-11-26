import React from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  return (
    <div className="review-form">
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>Provide feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dr. John Doe</td>
            <td>Cardiology</td>
            <td>
              <button className="feedback-link">Click Here</button>
            </td>
            <td>
              <button className="review-link">Click Here</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dr. Jane Smith</td>
            <td>Dermatology</td>
            <td>
              <button className="feedback-link">Click Here</button>
            </td>
            <td>
              <button className="review-link">Click Here</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReviewForm;