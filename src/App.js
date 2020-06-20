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
    margin-top: 0;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    color: #000333;
    box-sizing: border-box;
  `;

  const h2_style = css`
    font-size: calc(1.375rem + (1vw - 3.75px) * 1.1268);
    line-height: calc(1.875rem + 6 * ((100vw - 21rem) / 680));
    font-weight: 700;
    margin: 80px 0px 20px 0px;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    color: #000333;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
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
    @media (min-width: 576px) {
      text-align: center;
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
        className="bg.img-hero bg_light"
        css={css`
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top center;
          background-color: #10a89a12 !important;
        `}
      >
        <div
          className="container space-3-top--md space-3-top space-2-bottom"
          css={css`
            @media (max-width: 450px) {
              padding-top: 1.5rem;
            }
            @media (min-width: 768px) {
              padding-top: 2.5rem;
            }
            padding-bottom: 4.0625rem;
            @media (min-width: 768px) {
              max-width: 720px;
            }
            @media (min-width: 1200px) {
              max-width: 1140px;
            }

            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin: 1em auto;
          `}
        >
          <div
            className="container-text-center"
            css={css`
              @media (min-width: 992px) {
                flex: 0 0 100%;
                max-width: 100%;
              }
              text-align: center !important;
            `}
          >
            <div
              className="w-md-80 mx-auto mb-4"
              css={css`
                @media (min-width: 768px) {
                  width: 80% !important;
                }

                margin-left: auto !important;
                margin-right: auto !important;
                margin-bottom: 1.5rem !important;
                box-sizing: border-box;
                display: block;

                @media (min-width: 768px) {
                  width: 80% !important;
                }
              `}
            >
              <h1 css={h1Style} className="display">
                Hi! Welcome to my portfolio
              </h1>

              <p
                className="lead mb-0"
                css={css`
                  font-size: 1.2rem;
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
              `}
              alt="profie"
            />
          </div>
        </div>
      </div>

      <div
        className="container space-2-bottom"
        css={css`
          display: block;
        `}
      >
        <div
          className="rightmobile text-centre"
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
            className="mb-5"
            css={css`
              margin-bottom: 2rem !important;
              box-sizing: border-box;
              display: block;
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
