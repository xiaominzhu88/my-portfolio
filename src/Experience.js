/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import fashion from './images/luxusmode.jpg';

export default function Content3() {
  const divContainerStyle = css`
    @media (min-width: 768px) {
      align-items: center !important;
    }
    margin: 0 auto;
  `;

  const textContainerStyle = css`
    box-sizing: border-box;
    display: block;
  `;
  const textContainer2Style = css`
    @media (min-width: 768px) {
      padding-left: 1.5rem !important;
      order: 2;
    }
    box-sizing: border-box;
    display: block;
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
    <div
      css={divContainerStyle}
      className="row justify-content-lg-between align-items-md-center bottom--lg col-12"
    >
      <div
        css={textContainerStyle}
        className="col-md-6 order-md-2 mb-5 mb-md-0"
      >
        <div css={textContainer2Style} className="pl-md-4">
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
      </div>
      <div className="col-md-6 order-md-1 ">
        <img
          className="img-fluid"
          css={css`
            max-width: 100%;
            width: 20em;
            height: 13em;
            border-radius: 5px;
          `}
          src={fashion}
          alt="Web App manager"
        />
      </div>
    </div>
  );
}
