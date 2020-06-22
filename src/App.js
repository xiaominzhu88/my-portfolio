/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Footer from './Footer.js';
import Content2 from './Edu.js';
import Content3 from './Experience';
import Signup from './Signup';
import FooterContainer from './Slog';
import FooterContainer2 from './FooterContainer2';
import xm from './images/xm.jpg';

function App() {
  const h1Style = css`
    font-size: calc(1.8rem + (1vw - 3.75px) * 1.6901);
    line-height: calc(2.5rem + (1vw - 3.75px) * 2.2535);
    font-weight: 700;
    margin: 0 auto;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    color: #000333;
    box-sizing: border-box;
    padding: 1.5em;

    @media (max-width: 450px) {
      margin: 0 auto;
      padding: 1.2em;
      line-height: 1.5em;
      font-size: 1.5em;
    }
  `;

  const h2_style = css`
    font-size: calc(1.375rem + (1vw - 3.75px) * 1.1268);
    line-height: calc(1.875rem + 6 * ((100vw - 21rem) / 680));
    font-weight: 700;
    margin: 1em auto;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    color: #000333;
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
    color: #000333;
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
        font-family: 'Nunito', Helvetica, Arial, sans-serif;
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.7;
        padding: 0.6em;
        width: 100%;
        margin: 0 auto;
      `}
    >
      {/* <header
        id="headerDropdown"
        className="u-header"
        css={css`
          top: 0;
          position: fixed;
          width: 100%;
          z-index: 1;
          box-sizing: border-box;
        `}
      >
        <div className="u-header-section" css={uheadersectionStyle}>
          <div id="logoandnav" css={logoAndNav}>
            <div
              className="sticky_inner"
              css={css`
                max-height: 90vh;
                box-sizing: border-box;
                display: block;
              `}
            >
              <nav css={navbarStyle} className="navbar">
                <div
                  className="u-header"
                  css={css`
                    box-sizing: border-box;
                    display: block;
                  `}
                ></div>

                <div
                  css={css`
                    @media (min-width: 992px) {
                      display: flex !important;
                      flex-basis: auto;
                    }
                    padding-bottom: 0 !important;
                    padding-top: 0 !important;
                    flex-grow: 1;
                    align-items: center;
                    box-sizing: border-box;
                  `}
                  id="navBarDropdown"
                  className="collapse navbar-collapse"
                >
                  <ul css={ulStyle} className="navbar-nav u-header__navbar-nav">
                    <li className="nav-item u-header__nav-item">
                      <a
                        css={linkStyle}
                        className="nav-link u-header__nav-link"
                        href="/build-a-web-app"
                      >
                        About{' '}
                      </a>
                    </li>
                    <li className="nav-item u-header__nav-item">
                      <a
                        css={linkStyle}
                        className="nav-link u-header__nav-link"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="nav-item u-header__nav-item">
                      <a
                        css={linkStyle}
                        className="nav-link u-header__nav-link"
                        href="/manage-a-web-app"
                      >
                        Contact{' '}
                      </a>
                    </li>
                  </ul> 
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header> */}

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

            margin: 1.5rem auto;
            box-sizing: border-box;
            display: block;
          `}
        >
          <h1 css={h1Style} className="display">
            Hi! Welcome to my portfolio
          </h1>

          <p
            className="lead mb-0"
            css={css`
              font-size: 1.2rem;
              margin: 0 auto;

              @media (max-width: 450px) {
                font-size: 1rem;
              }
            `}
          >
            I'm Xiaomin Zhu and I'm a Front-end Developer
          </p>
        </div>

        <img
          src={xm}
          css={css`
            width: 20em;
            height: 15em;
            margin: 1em auto;
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
            <h2 css={h2_style}>About Me</h2>
            <p css={pStyle}>
              Musician, Assistant Store Manager for Luxury-fashion Company,
              <br /> and now <br />
              I'm a
              <br />
              Frontend Developer
            </p>
          </div>
          <hr />

          <Content2 />
          <Content3 />

          <FooterContainer />
          <FooterContainer2 />

          <Footer />
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default App;
