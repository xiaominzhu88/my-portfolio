/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function FooterContainer() {
  const divContainerStyle = css`
    @media (min-width: 768px) {
      width: 80% !important;
    }
    text-align: center !important;
    margin-left: auto !important;
    margin-right: auto !important;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    display: block;
  `;

  const h2Style = css`
    font-size: calc(1.375rem + (1vw - 3.75px) * 1.1268);
    line-height: calc(1.875rem + 6 * ((100vw - 21rem) / 680));
    font-weight: 700;
    margin: 1em auto;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
  `;

  const pStyle = css`
    margin-bottom: 0 !important;
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.8;
    color: #000333;
    margin-top: 0;
    box-sizing: border-box;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
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
    margin-top: 2rem !important;
  `;

  return (
    <div css={divContainerStyle} className="col-12 text-center w-md-80 mx-auto">
      <div
        css={css`
          margin-bottom: 2rem !important;
          box-sizing: border-box;
          display: block;
        `}
        className="mb-5"
      >
        <span css={span} className="u-label u-label--yellow mb-3">
          Today
        </span>

        <h2 css={h2Style}>As Frontend developer</h2>
        <p css={pStyle} className="lead mb-0">
          {' '}
          Life without change is incomplete, thanks to the Web Resources{' '}
        </p>
      </div>
    </div>
  );
}
