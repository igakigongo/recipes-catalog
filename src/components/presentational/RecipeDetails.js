import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    
  }, [id]);

  return (
    <div>
      <h1>
        Recipe Details:
        {id}
      </h1>
    </div>
  );
};

export default RecipeDetails;
