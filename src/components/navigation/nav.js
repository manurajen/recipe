import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../logo.svg';
import './nav.scss';

export default class TourNav extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav">
            <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}