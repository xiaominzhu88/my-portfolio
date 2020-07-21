/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

export default function SlogComponent() {
  const h2Style = css`
    font-size: calc(1.375rem + (1vw - 3.75px) * 1.1268);
    line-height: calc(1.875rem + 6 * ((100vw - 21rem) / 680));
    font-weight: 700;
    margin: 1em auto;
    font-family: 'Fira Mono', monospace;
    box-sizing: border-box;
    color: #494444;
  `;

  const pStyle = css`
    font-size: 1.2rem;
    font-weight: 400;
    color: #034b35;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 450px) {
      margin: 1em auto;
      font-size: 1rem;
      padding: 0.5em;
    }
  `;
  return (
    <React.Fragment>
      <div className="slog-c">
        <h2 css={h2Style}>Frontend Web Developer</h2>
        <p css={pStyle} className="lead mb-0">
          {' '}
          Life without change is incomplete, thanks to the Web Resources{' '}
        </p>
        <style jsx>{`
          .slog-c {
            background-color: #10a89a12;
            padding: 1.5em;
            border-radius: 10px;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
}
