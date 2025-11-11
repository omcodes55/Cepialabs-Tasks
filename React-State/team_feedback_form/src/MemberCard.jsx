import React from "react";
import "./App.css";

const MemberCard = ({ name, feedback, onFeedback }) => {
  return (
    <div className="member-card">
      <h2>{name}</h2>
      <p>Feedback Count: {feedback}</p>
      <button onClick={onFeedback}>Give Feedback 👍</button>
    </div>
  );
};

export default MemberCard;