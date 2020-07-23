/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

export default function SlogComponent() {
  const h2Style = css`
    font-size: 1em;
    line-height: 1em;
    font-weight: 700;
    margin: 1em auto;
    font-family: 'Fira Mono', monospace;
    box-sizing: border-box;
    color: #8d8f8a;
  `;

  const pStyle = css`
    font-size: 1.2rem;
    font-weight: 400;
    color: #8d8f8a;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 450px) {
      margin: 1em auto;
      font-size: 1rem;
      padding: 0.5em;
    }
  `;
  const slogStyle = css`
    background-color: #10a89a12;
    padding: 1.5em;
    border-radius: 10px;
  `;
  return (
    <React.Fragment>
      <div className="slog-c" css={slogStyle}>
        <h2 css={h2Style}>Frontend Web Developer</h2>
        <p css={pStyle} className="lead mb-0">
          {' '}
          Life without change is incomplete, thanks to the Web Resources{' '}
        </p>
      </div>
    </React.Fragment>
  );
}
