import React from 'react';
import './App.scss';
import { Navbar } from 'react-bootstrap';
import WrappedFilter from '../containers/Filter';

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
      <WrappedFilter />
    </aside>
    <main />
  </>
);

export default App;
