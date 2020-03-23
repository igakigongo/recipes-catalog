import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import api from '../api';

const selectedIngredients = ingredients => ingredients.filter(x => x.checked);

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

const RecipesList = ({ ingredients }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    api.getRecipes(selectedIngredients(ingredients))
      .then(data => {
        setRecipes(data);
      });
  }, [ingredients]);

  return (recipes.length === 0 ? (
    <div className="container-fluid">
      <div className="alert alert-info">
        Information:&nbsp;
        There are no recipes for the selected combination of ingredients.
      </div>
    </div>
  ) : (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-lg-6">
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
            <div className="col align-self-start" key={id}>
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
