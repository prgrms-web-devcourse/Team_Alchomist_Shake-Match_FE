import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global
      styles={css`
        ${emotionNormalize}
        *, *::after, *::before {
          box-sizing: border-box;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          background: white;
          min-height: 100%;
          font-family: Helvetica, Arial, sans-serif;
        }
      `}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
