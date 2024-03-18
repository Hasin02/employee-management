import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProgram = () => {
  // State variables to store program details
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement code to submit program details to backend
    // You can use Axios or fetch for this purpose
    // After successful submission, you can navigate to another page
  };

  return (
    <div className="container mt-3">
      <h3>Add New Program</h3>
      {/* Form for adding a new program */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration</label>
          <input type="text" className="form-control" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {/* Link to go back to Training Planning */}
      <Link to="/dashboard/training_planning" className="btn btn-secondary mt-3">Back to Training Planning</Link>
    </div>
  );
};

export default AddProgram;
