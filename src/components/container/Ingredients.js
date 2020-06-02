import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const IngredientsList = ({ ingredients }) => (ingredients.some(x => x.checked) ? (
  <div className="col-12">
    {ingredients.filter(x => x.checked).map(x => (
      <span className="badge badge-pill badge-warning p-2 mb-2 mr-2" key={x.code}>
        {x.name}
      </span>
    ))}
  </div>
)
  : (
    <></>
  ));

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
  const { filters } = state;
  return {
    ingredients: filters,
  };
};

export default connect(mapStateToProps)(IngredientsList);
