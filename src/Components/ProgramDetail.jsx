import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProgramDetail = () => {
  const { id } = useParams(); // Get the program ID from the URL
  const [program, setProgram] = useState(null); // State to store program details
  const [enrolledEmployees, setEnrolledEmployees] = useState([]); // State to store enrolled employees

  useEffect(() => {
    // Fetch program details from the backend based on the ID
    axios.get(`backend-url/programs/${id}`)
      .then(response => {
        // Set program details in state
        setProgram(response.data);
      })
      .catch(error => {
        console.error('Error fetching program details:', error);
      });

    // Fetch enrolled employees for the program
    axios.get(`backend-url/programs/${id}/employees`)
      .then(response => {
        // Set enrolled employees in state
        setEnrolledEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching enrolled employees:', error);
      });
  }, [id]); // Fetch details whenever ID changes

  return (
    <div>
      {/* Display program details */}
      {program ? (
        <div>
          <h2>{program.title} Details</h2>
          <p>Description: {program.description}</p>
        </div>
      ) : (
        <p>Loading Program {id} Details...</p>
      )}

      {/* Display list of enrolled employees */}
      <div>
        <h3>Enrolled Employees</h3>
        {enrolledEmployees.length > 0 ? (
          <ul>
            {enrolledEmployees.map(employee => (
              <li key={employee.id}>{employee.name}</li>
            ))}
          </ul>
        ) : (
          <p>No employees enrolled in this program.</p>
        )}
      </div>
    </div>
  );
};

export default ProgramDetail;
