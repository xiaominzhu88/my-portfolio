/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import fluidSmallRight from './images/Image-65.jpg';

export default function Content2() {
  const contentStyle = css`
    @media (max-width: 450px) {
      margin: 1em auto;
      display: block;
    }

    display: flex;
    align-items: center;
    padding-bottom: 1em;
  `;

  const divStyle = css`
    width: 100%;
  `;

  const span = css`
    color: #49c39e;
    background-color: rgba(73, 195, 158, 0.1);
    display: inline-block;
    font-size: 1rem;
    font-weight: 900;
    padding: 0.625rem 1.125rem;
    border-radius: 5px;
    margin-bottom: 1rem !important;
    margin-top: 2rem;
    @media (max-width: 450px) {
      margin: 1em auto;
    }
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
  `;

  return (
    <div css={contentStyle} className="edu-container">
      <div css={divStyle} className="edu">
        <div
          className="pr-md-4"
          css={css`
            @media (max-width: 450px) {
            }
            box-sizing: border-box;
            display: block;
          `}
        >
          <span css={span} className="emotion-span">
            Education
          </span>
          <h2 css={h3Style}>Education Overview</h2>
          <h4> 1986 to 1998</h4>
          <p>
            Primary, secendary and high school Nanjing
            <br />
            Nanjing China
          </p>
          <h4> 1998 to 2002</h4>
          <p>
            Music conservatory Shanghai
            <br />
            Shanghai China
          </p>
          <h4> Diploma 2011</h4>
          <p>
            Universitaet fuer Musik und darstellende Kunst
            <br />
            Vienna Austria
          </p>
        </div>
      </div>

      <div className="edu-image">
        <img
          className="img-fluid-right"
          src={fluidSmallRight}
          css={css`
            max-width: 100%;
            width: 20em;
            height: 10em;
            border-radius: 5px;
            margin-left: 2em;
            @media (max-width: 450px) {
              margin: 1em auto;
              width: 10em;
              height: 7em;
            }
          `}
          alt="music uni vienna"
        />
      </div>
    </div>
  );
}
