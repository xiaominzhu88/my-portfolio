/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import SlogComponent from './SlogComponent';

export default function FooterContainer() {
  const [show, setShow] = useState(false);

  const divContainerStyle = css`
    @media (max-width: 450px) {
      margin: 2em auto;
    }
    text-align: center !important;
    margin: 2em auto;
    min-height: 1px;
  `;

  const span = css`
    color: #49c39e;
    background-color: rgba(73, 195, 158, 0.1);
    font-size: 1rem;
    font-weight: 900;
    padding: 0.625rem 1.125rem;
    border-radius: 5px;
    margin: 0.5em auto;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    outline: none;
    :hover {
      background-color: #343734;
      text-decoration: none;
    }
  `;

  const showSlogToggle = () => {
    setShow(!show);
  };
  return (
    <div css={divContainerStyle} className="col-12 text-center w-md-80 mx-auto">
      <button css={span} className="span" onClick={showSlogToggle}>
        Today
      </button>
      {show ? <SlogComponent /> : null}
    </div>
  );
}
