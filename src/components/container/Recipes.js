import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import api from '../../api';
import Time from '../presentational/Time'

const selectedIngredients = ingredients => ingredients.filter(x => x.checked);

const RecipesList = ({ ingredients }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    api.getRecipes(selectedIngredients(ingredients))
      .then(data => {
        setRecipes(data);
      });
  }, [ingredients]);

  useLayoutEffect(() => {
    window.jQuery('.recipes-grid').isotope({
      itemSelector: '.recipe-item'
    });
  }, [ingredients]);

  return (recipes.length === 0 ? (
    <div className="container-fluid">
      <div className="alert alert-info">
        Information:&nbsp;
        No recipes found.
      </div>
    </div>
  ) : (
      <div className="container-fluid">
        <div className="row recipes-grid">
          {recipes.map(recipe => {
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
                <div className="card mb-3 shadow">
                  <img alt={image} className="card-img-top" src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`} />
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
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
  const { filters } = state;
  return {
    ingredients: filters,
  };
};

export default connect(mapStateToProps)(RecipesList);
