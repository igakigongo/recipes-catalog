import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipeInstructions, fetchRecipes } from '../../api';

const RecipeDetails = ({ dispatch, recipeDetails, recipes }) => {
  const { id } = useParams();
  const { instructions } = recipeDetails;
  const recipe = recipes.data.find(x => x.id === parseInt(id, 10));

  useEffect(() => {
    if (!recipe && !recipes.fetching) {
      dispatch(fetchRecipes());
    }
  }, []);

  useEffect(() => {
    dispatch(fetchRecipeInstructions(id));
  }, [id]);

  if (recipes.fetching || recipeDetails.fetchingInstructions) {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center p-5 text-center"
        style={{ height: '90vh' }}
      >
        <p className="lead">
          Loading Recipe Information.........
        </p>
      </div>
    );
  }

  return (
    <div className="m-5">
      <header
        className="p-3 rounded-lg shadow-sm text-center"
        style={{
          backgroundColor: '#ffc107',
          color: '#000',
        }}
      >
        <h1>{recipe.title}</h1>
      </header>
      {instructions.length === 0 && (
      <div className="text-center">
        No instructions found for this recipe
      </div>
      )}
      {instructions.length > 0 && instructions
        .map(x => (
          <div className="my-2 shadow rounded" key={x.number}>
            <div className="d-flex p-3">
              <span className="mx-2">
                {`${x.number}.`}
              </span>
              <span>{x.step}</span>
            </div>
            {x.ingredients.length > 0 && (
            <div className="px-3 ingredients shadow-lg">
              <p className="mx-2 small py-1">
                Ingredients:
                {` ${x.ingredients.map(x => x.name).join(', ')}`}
              </p>
            </div>
            )}
          </div>
        ))}
    </div>
  );
};

RecipeDetails.defaultProps = {
  recipeDetails: PropTypes.shape({
    recipe: undefined,
  }),
};

RecipeDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  recipeDetails: PropTypes.shape({
    fetchingInstructions: PropTypes.bool.isRequired,
    instructions: PropTypes.arrayOf(PropTypes.object).isRequired,
    recipe: PropTypes.objectOf(PropTypes.any),
  }),
  recipes: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => {
  const { recipeDetails, recipes } = state;
  return {
    recipeDetails,
    recipes,
  };
};

export default connect(mapStateToProps)(RecipeDetails);
