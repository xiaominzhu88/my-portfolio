/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function Signup() {
  const textContainerStyle = css`
    height: 3em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 450px) {
      display: block;
      text-align: center;
      height: 6em;
    }
  `;

  const h2Style = css`
    font-size: 1.2em;
    font-weight: 700;
    margin: 0 auto;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    padding: 1em;
    @media (max-width: 450px) {
      text-align: center;
    }
  `;

  return (
    <div
      id="signup"
      className="bg-primary bg-img-hero"
      css={css`
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        background-color: #10a89a12 !important;
        box-sizing: border-box;
      `}
    >
      <div css={textContainerStyle} className="mb-5 text-center">
        <h2 css={h2Style} className="text-white mb-1">
          Thank you
        </h2>
        <p
          css={css`
            font-size: 0.8rem;
            font-weight: 400;
            margin: 1em auto;
            @media (max-width: 450px) {
              text-align: center;
              margin: 0 auto;
            }
          `}
          className="small"
        >
          ©Zhu 2020
        </p>
      </div>
    </div>
  );
}
