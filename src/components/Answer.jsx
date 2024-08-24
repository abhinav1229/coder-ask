import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answer }) => {
  return (
    <div key={answer._id} className="answer-card" style={{
      margin: '1rem 0px',
      padding: '1rem',
      background: '#1d2027',
      borderRadius: '20px'
    }}>
      <h2>{answer.answerFor.title}</h2>
      <p><strong>Question Description:</strong> {answer.answerFor.description}</p>
      <p><strong>Answer:</strong> {answer.description}</p>
      <p><strong>Answered On:</strong> {new Date(answer.answeredOn).toLocaleString()}</p>
      <p><strong>Upvotes:</strong> {answer.upvotesList.length}</p>
    </div>
  );
};
 
Answer.propTypes = {
  answer: PropTypes.object.isRequired,
};

export default Answer;