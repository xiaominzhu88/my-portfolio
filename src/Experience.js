/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ExComponent from './ExComponent';
import { useState } from 'react';

export default function Content3() {
  const [show, setShow] = useState(false);

  const divContainerStyle = css`
    @media (max-width: 450px) {
      align-items: center !important;
    }
    margin: 1.5em auto;
  `;

  const textContainer2Style = css`
    margin: 0 auto;
  `;

  const span = css`
    color: #49c39e;
    background-color: rgba(73, 195, 158, 0.1);
    display: inline-block;
    font-size: 1rem;
    font-weight: 900;
    padding: 0.625rem 1.125rem;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    outline: none;
    margin: 0.5em auto;
  `;

  const showExToggle = () => {
    setShow(!show);
  };
  return (
    <div css={divContainerStyle} className="ex-container">
      <div css={textContainer2Style} className="ex-text-container">
        <button onClick={showExToggle} css={span}>
          Experience
        </button>
        {show ? <ExComponent /> : null}
      </div>
      <style jsx>{`
        button:hover {
          background-color: #343734;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
