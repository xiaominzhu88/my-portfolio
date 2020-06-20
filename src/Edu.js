/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import fluidSmallRight from './images/Image-65.jpg';

export default function Content2() {
  const contentStyle = css`
    padding-bottom: 8.125rem;
    @media (min-width: 768px) {
      -ms-flex-align: center !important;
      align-items: center !important;
    }
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    padding-bottom: 1em;
    box-sizing: border-box;
  `;

  const divStyle = css`
    @media (min-width: 768px) {
      margin-bottom: 0 !important;
    }
    @media (min-width: 768px) {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    display: block;
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
    margin-top: 2rem;
    box-sizing: border-box;
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

  return (
    <div
      css={contentStyle}
      className="row justify-content-lg-between align-items-md-center space-3-bottom space-2-bottom--lg col-12"
    >
      <div css={divStyle} className="col-md-6 mb-5 mb-md-0">
        <div
          className="pr-md-4"
          css={css`
            @media (min-width: 768px) {
              padding-right: 1.5rem !important;
            }
            box-sizing: border-box;
            display: block;
          `}
        >
          <span css={span} className="u-label u-label--green mb-3">
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

        <div
          css={css`
            padding-top: 2rem;
            padding-bottom: 2rem;
            @media (min-width: 768px) {
              padding-left: 1.5rem !important;
            }
            box-sizing: border-box;
            display: block;
          `}
          className="pl-md-4 space-1"
        ></div>
      </div>

      <div
        className="col-md-6"
        css={css`
          @media (min-width: 768px) {
            -ms-flex-order: 1;
            order: 1;
          }
          @media (min-width: 768px) {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
          }
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;
          box-sizing: border-box;
          display: block;
        `}
      >
        <img
          className="img-fluid-right"
          src={fluidSmallRight}
          css={css`
            max-width: 100%;
            width: 20em;
            height: 13em;
            border-radius: 5px;
          `}
          alt="music uni vienna"
        />
      </div>
    </div>
  );
}
