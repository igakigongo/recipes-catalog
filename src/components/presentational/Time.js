import React from 'react';
import PropTypes from 'prop-types';

const Time = ({ minutes }) => {
  let str;
  if (minutes < 60) {
    str = `Ready In: ${minutes} Minutes`;
  } else if (minutes % 60 === 0) {
    str = `Ready In: ${minutes / 60} Hours`;
  } else {
    str = `Ready In: ${Math.floor(minutes / 60)} Hours and ${minutes % 60} Minutes`;
  }

  return (
    <>
      {str}
    </>
  );
};

Time.propTypes = {
  minutes: PropTypes.number.isRequired,
};

export default Time;
