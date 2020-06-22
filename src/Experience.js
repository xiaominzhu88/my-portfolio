/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import fashion from './images/luxusmode.jpg';

export default function Content3() {
  const divContainerStyle = css`
    @media (max-width: 450px) {
      align-items: center !important;
    }
    margin: 1.5em auto;
  `;

  const textContainer2Style = css`
    @media (max-width: 450px) {
      margin: 1em auto;
    }
    margin: 2em auto;
  `;

  const h3Style = css`
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    line-height: 1.5;
    color: #000333;
    margin-top: 0;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `;

  const h5Style = css`
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.5;
    color: #000333;
    margin-top: 0;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
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
    margin-bottom: 1rem !important;
    box-sizing: border-box;
  `;

  return (
    <div css={divContainerStyle} className="ex-container">
      <div css={textContainer2Style} className="ex-text-container">
        <span css={span} className="u-label u-label--yellow mb-3">
          Experience
        </span>
        <h2 css={h3Style}>Professional Experience</h2>
        <h5 css={h5Style}>Film and Fashion</h5>
        <p>
          Catering assistant at „Allegro Film“ Austria
          <br />
          2011
        </p>
        <p class="text-luxus">
          Assistant Store Manager for luxury-mode Company
          <br />
          2012 - 2020
        </p>
      </div>

      <div className="ex-image">
        <img
          className="ex-img"
          css={css`
            max-width: 100%;
            width: 18em;
            height: 12em;
            border-radius: 5px;
            margin: 2em auto;

            @media (max-width: 450px) {
              margin: 1.5em auto;
              width: 10em;
              height: 7em;
            }
          `}
          src={fashion}
          alt="fasion"
        />
      </div>
    </div>
  );
}
