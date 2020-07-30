/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import fashion from './images/luxusmode.jpg';

export default function ExComponent() {
  const pStyle = css`
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.5;
    color: #8d8f8a;
    font-family: 'Fira Mono', monospace;
    box-sizing: border-box;
    background-color: #10a89a12;
    padding: 1.5em;
    border-radius: 10px;
  `;

  return (
    <React.Fragment>
      <div className="ex-c" css={pStyle}>
        <p>Orchestra Musician</p>

        <p className="text-luxus">
          Assistant Store Manager at High End Fashion Company
        </p>

        <div className="ex-image">
          <img
            className="ex-img"
            css={css`
              max-width: 100%;
              width: 10em;
              height: 5em;
              margin: 2em auto;
              box-shadow: 0px 5px 15px gray;

              @media (max-width: 450px) {
                margin: 1.5em auto;
                width: 6em;
                height: 3em;
              }
              animation: turner 5s infinite linear;
              @keyframes turner {
                0% {
                  transform: perspective(300px) rotateY(0deg);
                }
                25% {
                  transform: perspective(300px) rotateY(90deg);
                }
                50% {
                  transform: perspective(300px) rotateY(180deg);
                }
                75% {
                  transform: perspective(300px) rotateY(270deg);
                }
                100% {
                  transform: perspective(300px) rotateY(360deg);
                }
              }
            `}
            src={fashion}
            alt="fasion"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
