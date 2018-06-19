import 'babel-polyfill';//required to make use of ES6 promises in the browser, which fetch (isomorphic-fetch) uses
import './polyfills';

import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
//import { Router, browserHistory } from 'react-router';
//import routes from './routes';
import './../content/main.less';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <h2>Home</h2>
    },
    {
      path: "/question1",
      sidebar: () => <div>Question1!</div>,
      main: () => <h2>Question1</h2>
    },
    {
      path: "/question2",
      sidebar: () => <div>Question2!</div>,
      main: () => <h2>Question2</h2>
    },
    {
        path: "/question3",
        sidebar: () => <div>Question3!</div>,
        main: () => <h2>Question3</h2>
      },
      {
        path: "/question4",
        sidebar: () => <div>Question4!</div>,
        main: () => <h2>Question4</h2>
      },
      {
        path: "/question5",
        sidebar: () => <div>Question5!</div>,
        main: () => <h2>Question5</h2>
      },
      {
        path: "/question6",
        sidebar: () => <div>Question6!</div>,
        main: () => <h2>Question6</h2>
      },
      {
        path: "/question7",
        sidebar: () => <div>Question7!</div>,
        main: () => <h2>Question7</h2>
      },
      {
        path: "/question8",
        sidebar: () => <div>Question8!</div>,
        main: () => <h2>Question8</h2>
      },
      {
        path: "/question9",
        sidebar: () => <div>Question9!</div>,
        main: () => <h2>Question9</h2>
      },
      {
        path: "/question10",
        sidebar: () => <div>Question10!</div>,
        main: () => <h2>Question10</h2>
      },
      {
        path: "/question11",
        sidebar: () => <div>Question11!</div>,
        main: () => <h2>Question11</h2>
      },
      {
        path: "/question12",
        sidebar: () => <div>Question12!</div>,
        main: () => <h2>Question12</h2>
      },
      {
        path: "/question13",
        sidebar: () => <div>Question13!</div>,
        main: () => <h2>Question13</h2>
      }

  ];
const store = configureStore();
const SidebarExample = () => (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "20%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/question1">question1</Link>
            </li>
            <li>
              <Link to="/question2">question2</Link>
            </li>
            <li>
              <Link to="/question3">question3</Link>
            </li>
            <li>
              <Link to="/question4">question4</Link>
            </li>
            <li>
              <Link to="/question5">question5</Link>
            </li>
            <li>
              <Link to="/question6">question6</Link>
            </li>
            <li>
              <Link to="/question7">question7</Link>
            </li>
            <li>
              <Link to="/question8">question8</Link>
            </li>
            <li>
              <Link to="/question9">question9</Link>
            </li>
            <li>
              <Link to="/question10">question10</Link>
            </li>
            <li>
              <Link to="/question11">question11</Link>
            </li>
            <li>
              <Link to="/question12">question12</Link>
            </li>
            <li>
              <Link to="/question13">question13</Link>
            </li>
          </ul>
  
          {routes.map((route, index) => (
            
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>
  
        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
render(
    <SidebarExample />,
    document.getElementById('root')
);        
