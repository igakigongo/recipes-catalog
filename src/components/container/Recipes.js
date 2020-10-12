import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BASE_URL } from '../../utils';
import api from '../../api';
import NoRecipesFound from '../presentational/NoRecipesFound';
import Time from '../presentational/Time';

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
      itemSelector: '.recipe-item',
    });
  }, [ingredients]);

  const clickHandler = e => {
    e.preventDefault();
  };

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
                onClick={clickHandler}
                onKeyPress={clickHandler}
                role="link"
                tabIndex={index}>
                <img alt={image}
                  className="card-img-top"
                  src={`${BASE_URL}/recipeImages/${id}-480x360.${imageType}`} />
                <div className="card-body bg-warning">
                  <b>{title}</b>
                </div>
                {readyInMinutes && (
                  <div className="card-footer bg-dark text-white">
                    <Time minutes={readyInMinutes} />
                  </div>)}
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
