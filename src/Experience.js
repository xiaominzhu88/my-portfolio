/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ExComponent from './ExComponent';
import { useState } from 'react';

export default function Content3() {
  const [show, setShow] = useState(true);

  const divContainerStyle = css`
    background-color: #10a89a12 !important;

    @media (max-width: 450px) {
      align-items: center !important;
    }
    margin: 0 auto;
  `;

  const textContainer2Style = css`
    margin: 0 auto;
    text-align: center;
  `;

  const span = css`
    color: #49c39e;
    background-color: rgba(4, 30, 22, 0.1);
    display: inline-block;
    font-size: 1rem;
    font-weight: 900;
    padding: 0.625rem 1.125rem;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    border: none;
    cursor: pointer;
    outline: none;
    margin: 0.5em auto;

    :hover {
      background-color: #343734;
      text-decoration: none;
    }
  `;

  const showExToggle = () => {
    setShow(!show);
  };
  return (
    <div css={divContainerStyle} className="ex-container">
      <div css={textContainer2Style} className="ex-text-container">
        <button onClick={showExToggle} css={span}>
          <span role="img" aria-label="emoji show more">
            📂
          </span>
        </button>
        {show ? <ExComponent /> : null}
      </div>
    </div>
  );
}
