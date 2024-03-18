import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile data from the backend after login
    axios.get('http://localhost:3000/auth/user_profile')
      .then(response => {
        setUserProfile(response.data);
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  return (
    <div className="container mt-3">
      <h3>User Profile</h3>
      {userProfile ? (
        <div>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Role: {userProfile.role}</p>
          {/* Add more profile information as needed */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
