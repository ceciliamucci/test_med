import React from 'react';
import './ProfileCard.css';

function ProfileCard({ user }) {
    return (
        <div className="profile-card">
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Joined: {user.joinedDate}</p>
        </div>
    );
}

export default ProfileCard;
