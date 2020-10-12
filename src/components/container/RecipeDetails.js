import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeInstructions } from '../../api';

const RecipeDetails = ({ dispatch, recipeDetails }) => {
  const { id } = useParams();
  console.log(recipeDetails);

  useEffect(() => {
    dispatch(fetchRecipeInstructions(id));
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

RecipeDetails.defaultProps = {
  recipeDetails: PropTypes.shape({
    recipe: undefined
  }),
};

RecipeDetails.propTypes = {
  recipeDetails: PropTypes.shape({
    fetchingInstructions: PropTypes.bool.isRequired,
    instructions: PropTypes.arrayOf(PropTypes.object).isRequired,
    recipe: PropTypes.objectOf(PropTypes.any),
  }),
};

const mapStateToProps = state => {
  const { recipeDetails } = state;
  return {
    recipeDetails,
  };
};

export default connect(mapStateToProps)(RecipeDetails);
