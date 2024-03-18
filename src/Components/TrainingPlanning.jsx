import React from 'react';
import { Link } from 'react-router-dom';

const TrainingPlanning = () => {
  // Dummy data for available training programs (replace with actual data from backend)
  const trainingPrograms = [
    { id: 1, title: 'Business Analyst', imageUrl: '/public/Images/program1.jpg', duration: '3 months', price: '$300' },
    { id: 2, title: 'Artificial Intelligence', imageUrl: '/public/Images/program2.jpg', duration: '6 weeks', price: '$150' },
    { id: 3, title: 'Machine Learning', imageUrl: '/public/Images/program3.jpg', duration: '2 months', price: '$200' },
  ];

  return (
    <div className="container mt-3">
      <h3>Training Planning</h3>
      {/* Link to AddProgram component */}
      <Link to="/dashboard/add_training_plan" className="btn btn-primary mb-3">Add New Plan</Link>
      {/* List of available training programs */}
      <div className="row">
        {trainingPrograms.map(program => (
          <div key={program.id} className="col-md-4 mb-3">
            {/* Link to program detail page */}
            <Link to={`/dashboard/training_plans/${program.id}`} className="text-decoration-none">
              <div className="card">
                {/* Program image */}
                <div className="card-img-top" style={{ backgroundImage: `url(${program.imageUrl})`, height: '200px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                <div className="card-body">
                  {/* Program title */}
                  <h5 className="card-title">{program.title}</h5>
                  {/* Program duration */}
                  <p className="card-text">Duration: {program.duration}</p>
                  {/* Program price */}
                  <p className="card-text">Price: {program.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPlanning;