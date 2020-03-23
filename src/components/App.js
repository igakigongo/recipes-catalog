import React from 'react';
import './App.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Navbar } from 'react-bootstrap';
import ConnectedFilter from '../containers/Filter';
import ConnectedIngredientsList from '../containers/Ingredients';
import ConnectedRecipesList from '../containers/Recipes';

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
        <ConnectedIngredientsList />
        <ConnectedRecipesList />
      </SimpleBar>
    </main>
  </>
);

export default App;
