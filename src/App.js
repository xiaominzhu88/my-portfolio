/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Footer from './Footer.js';
import Experience from './Experience';
import Slog from './Slog';
import FooterContainer2 from './FooterContainer2';
import xm from './images/xm.jpg';

function App() {
  const h1Style = css`
    font-size: calc(1.8rem + (1vw - 3.75px) * 1.6901);
    line-height: calc(2.5rem + (1vw - 3.75px) * 2.2535);
    font-weight: 700;
    margin: 0 auto;
    font-family: 'Fira Mono', monospace;
    color: #666863;
    padding: 0.5em;

    @media (max-width: 450px) {
      margin: 0 auto;
      padding: 1em;
      line-height: 1.5em;
      font-size: 1.5em;
    }
  `;

  const h2_style = css`
    font-size: 1.8em;
    line-height: 0.5em;
    font-weight: 700;
    margin: 1em auto;
    font-family: 'Fira Mono', monospace;
    color: #666863;

    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    display: block;

    @media (max-width: 450px) {
      text-align: center;
      line-height: 1.5em;
      font-size: 1.5em;
    }
  `;

  const pStyle = css`
    margin-bottom: 0 !important;
    font-size: 1.2rem;
    font-weight: 400;
    color: #8d8f8a;
    margin-top: 0;
    box-sizing: border-box;
    display: block;

    @media (max-width: 450px) {
      text-align: center;
      line-height: 1.5em;
      font-size: 0.8em;
    }
  `;

  return (
    <div
      className="App"
      css={css`
        display: block;
        margin: 0 auto;
        font-family: 'Fira Mono', monospace;
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.7;
        padding: 0.6em;
        width: 100%;
      `}
    >
      <div
        className="header"
        css={css`
          background-color: #10a89a12 !important;
          text-align: center;

          @media (max-width: 450px) {
            width: 100%;
            margin: 0 auto;
          }
        `}
      >
        <div
          className="header-text-container"
          css={css`
            @media (max-width: 450px) {
              width: 100% !important;
            }

            margin: 0 auto;
            box-sizing: border-box;
            display: block;
          `}
        >
          <h1 css={h1Style} className="display">
            Hi! I'm Xiaomin Zhu <br />
            Welcome to my portfolio
          </h1>
        </div>

        <img
          src={xm}
          css={css`
            width: 12em;
            height: 10em;
            margin: 0 auto;
            border-radius: 50%;
            @media (max-width: 450px) {
              width: 60% !important;
              height: 30% !important;
              margin: 1.5em auto;
            }
          `}
          alt="profie"
        />
      </div>

      <div
        className="container about-me"
        css={css`
          display: block;
          padding: 0.8em;
          text-align: center;
        `}
      >
        <div
          className="text-centre"
          css={css`
            @media (min-width: 576px) {
              text-align: center;
            }

            padding-bottom: 8.125rem;
            @media (min-width: 768px) {
              width: 80% !important;
            }
            margin: auto !important;
            position: relative;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
            box-sizing: border-box;
            display: block;
          `}
        >
          <div
            className="about-me-text"
            css={css`
              margin-bottom: 2rem !important;
            `}
          >
            <h2 css={h2_style}>
              About Me{' '}
              <span role="img" aria-label="emoji">
                ☘️
              </span>
            </h2>
            <p css={pStyle}>
              Frontend Web Developer, Musician, Assistant Store Manager
            </p>
          </div>
          <hr />

          <div className="ex-sl">
            <Experience />
            <Slog />
          </div>

          <FooterContainer2 />

          <Footer />
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  );
}

export default App;
