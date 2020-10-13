import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../utils';
import { fetchRecipes } from '../../api';
import NoRecipesFound from '../presentational/NoRecipesFound';
import Time from '../presentational/Time';
import ROUTES from '../../routes';

const selectedIngredients = ingredients => ingredients.filter(x => x.checked);

const RecipesList = ({ dispatch, ingredients, recipesState: { data: recipes, fetching } }) => {
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchRecipes(selectedIngredients(ingredients)));
  }, [ingredients]);

  const clickHandler = recipeId => {
    history.push(`${ROUTES.RECIPE_DETAILS}/${recipeId}`);
  };

  if (fetching) {
    return (
      <div style={{ textAlign: 'center' }}>
        Loading.....!!
      </div>
    );
  }

  return (recipes.length === 0 ? (<NoRecipesFound />) : (
    <div className="container-fluid">
      <div className="row recipes-grid">
        {recipes.map((recipe, index) => {
          const {
            id, image, readyInMinutes, title,
          } = recipe;
          let { imageType } = recipe;
          const imageTokens = image.split('.');
          if (typeof imageType === 'undefined') {
            (imageType = imageTokens[imageTokens.length - 1]);
          }

          return (
            <div className="col col-lg-2 recipe-item" key={id}>
              <div
                className="card mb-3 shadow"
                onClick={() => { clickHandler(id); }}
                onKeyPress={() => { clickHandler(id); }}
                role="link"
                tabIndex={index}
              >
                <img
                  alt={image}
                  className="card-img-top"
                  src={`${BASE_URL}/recipeImages/${id}-480x360.${imageType}`}
                />
                <div className="card-body bg-warning">
                  <b>{title}</b>
                </div>
                {readyInMinutes && (
                  <div className="card-footer bg-dark text-white">
                    <Time minutes={readyInMinutes} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ));
};

RecipesList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipesState: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetching: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => {
  const { filters, recipes } = state;
  return {
    ingredients: filters,
    recipesState: recipes,
  };
};

export default connect(mapStateToProps)(RecipesList);
