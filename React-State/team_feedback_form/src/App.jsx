import React, { useState } from "react";
import MemberCard from "./MemberCard";
import "./App.css";

const App = () => {
 
  const teamMembers = ["Ram", "Suraj", "Jay", "Sweta"];

  // State to store feedback count for each member
  const [feedbackCounts, setFeedbackCounts] = useState(
    Array(teamMembers.length).fill(0)
  );

  
  const handleFeedback = (index) => {
    const newCounts = [...feedbackCounts];
    newCounts[index] += 1;
    setFeedbackCounts(newCounts);
  };

  
  const resetAll = () => {
    setFeedbackCounts(Array(teamMembers.length).fill(0));
  };

  return (
    <div className="app">
      <h1>Team Feedback Board</h1>
      <div className="member-list">
        {teamMembers.map((name, index) => (
          <MemberCard
            key={index}
            name={name}
            feedback={feedbackCounts[index]}
            onFeedback={() => handleFeedback(index)}
          />
        ))}
      </div>
      <button className="reset-btn" onClick={resetAll}>
        Reset All
      </button>
    </div>
  );
};

export default App;
