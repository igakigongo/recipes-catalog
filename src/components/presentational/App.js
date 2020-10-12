import React from 'react';
import SimpleBar from 'simplebar-react';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import ROUTES from '../../routes';
import ConnectedFilter from '../container/Filter';
import ConnectedIngredientsList from '../container/Ingredients';
import ConnectedRecipesList from '../container/Recipes';
import RecipeDetails from '../container/RecipeDetails';
import './App.scss';
import 'simplebar/dist/simplebar.min.css';

const App = () => (
  <>
    <header>
      <Navbar bg="dark" className="fixed-top" id="custom-navbar" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand className="custom-brand">
            Recipes&nbsp;
            <span className="text-white">
              Catalog
            </span>
          </Navbar.Brand>
        </div>
      </Navbar>
    </header>
    <aside className="bg-light p-3 shadow-lg">
      <SimpleBar style={{ maxHeight: '100%' }}>
        <ConnectedFilter />
      </SimpleBar>
    </aside>
    <main className="bg-white p-3">
      <SimpleBar style={{ maxHeight: '100%' }}>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <>
              <ConnectedIngredientsList />
              <ConnectedRecipesList />
            </>
          </Route>
          <Route component={RecipeDetails} path="/recipe/:id" />
        </Switch>
      </SimpleBar>
    </main>
  </>
);

export default App;
