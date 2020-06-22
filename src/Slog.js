/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function FooterContainer() {
  const divContainerStyle = css`
    @media (max-width: 450px) {
      margin: 2em auto;
    }
    text-align: center !important;
    margin: 2em auto;
    min-height: 1px;
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
    font-size: 1.2rem;
    font-weight: 400;
    color: #000333;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 450px) {
      margin: 1em auto;
      font-size: 1rem;
      padding: 0.5em;
    }
  `;
  const span = css`
    color: #49c39e;
    background-color: rgba(73, 195, 158, 0.1);
    font-size: 1rem;
    font-weight: 900;
    padding: 0.625rem 1.125rem;
    border-radius: 5px;
    margin: 2em auto;
  `;

  return (
    <div css={divContainerStyle} className="col-12 text-center w-md-80 mx-auto">
      <span css={span} className="span">
        Today
      </span>

      <h2 css={h2Style}>As Frontend developer</h2>
      <p css={pStyle} className="lead mb-0">
        {' '}
        Life without change is incomplete, thanks to the Web Resources{' '}
      </p>
    </div>
  );
}
