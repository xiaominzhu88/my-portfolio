/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import todo from './images/todo.png';
import countdown from './images/countdown.png';
import ecommerce from './images/ecommerce.png';
import randomColor from './images/color.png';
import weather from './images/weather.png';

export default function FooterContainer2() {
  const cartTableStyle = css`
    background-color: #fff !important;
    border-radius: 10px;
    @media (max-width: 450px) {
      width: 100%;
      margin: 1em auto;
    }
  `;
  const FooterContainer2Style = css`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-color: #10a89a12 !important;
    text-align: center;
    @media (max-width: 450px) {
      margin: 0 auto;
    }
  `;

  const FooterContainerRowStyle = css`
    width: 100%;
    min-height: 1px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    box-sizing: border-box;
  `;

  const h2Style = css`
    font-size: calc(1.375rem + (1vw - 3.75px) * 1.1268);
    line-height: calc(1.875rem + 6 * ((100vw - 21rem) / 680));
    font-weight: 700;
    margin: 1em auto;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    color: #29541c;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
  `;

  const footerPStyle = css`
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

  const col6 = css`
    width: 60%;
    padding-left: 15px;
    margin: 0 auto;
    @media (max-width: 450px) {
      width: 85%;
      margin: 0 auto;
    }
  `;

  const cardHeaderStyle = css`
    border-radius: 0.25rem 0.25rem 0 0;
    padding: 0;
    background-color: transparent;
    transition: 0.3s ease-in-out;
    margin-bottom: 0;
    @media (max-width: 450px) {
      padding: 0.5em;
      margin: 0.5em auto;
    }
  `;

  const projectImg = css`
    width: 10em;
    height: 6em;
    margin: 1em auto;
    box-shadow: 5px 8px 11px gray;
    @media (max-width: 450px) {
      width: 7em;
      height: 5em;
    }
  `;

  const h5Style = css`
    font-size: 1.1rem;
    margin: 1em auto;
    padding-top: 2em;
    color: #29541c;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    @media (max-width: 450px) {
      padding: 0.5em;
      margin: 0.5em auto;
      font-size: 0.9em;
    }
  `;

  return (
    <div className="footerContainer2" css={FooterContainer2Style}>
      <div className="footerContainerRow" css={FooterContainerRowStyle}>
        <div
          className="col-lg-8 text-center mx-auto"
          css={css`
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            position: relative;
            width: 100%;
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
            <h2 css={h2Style}>My Projects</h2>
            <p className="lead mb-0" css={footerPStyle}>
              I'm at the beginning of this exciting development journey and i
              understand there are lots of improvments. <br />
              I've included some of my recently projects below.
            </p>
          </div>
        </div>

        <div className="project-container" css={col6}>
          <div
            className="mb-5"
            css={css`
              margin-bottom: 2rem !important;
              box-sizing: border-box;
              display: block;
            `}
          >
            <div className="card-table" css={cartTableStyle}>
              <div css={cardHeaderStyle} className="card-header">
                <h5 css={h5Style}>Next.js Ecommerce-page</h5>
                <a
                  href="https://next-js-ecommerces-store.herokuapp.com/content"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img css={projectImg} src={ecommerce} alt="todo project" />
                </a>
              </div>
              <div
                id="basicsCollapseTwo"
                className="collapse"
                aria-labelledby="basicsHeadingTwo"
                data-parent="#basicsAccordion1"
              ></div>
            </div>

            <div className="card-table" css={cartTableStyle}>
              <div
                css={cardHeaderStyle}
                className="card-header card-collapse__header"
                id="basicsHeadingFour"
              >
                <h5 css={h5Style}>React weather app</h5>
                <a
                  href="https://codesandbox.io/s/github/xiaominzhu88/react-weather-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img css={projectImg} src={weather} alt="todo project" />
                </a>
              </div>
              <div
                id="basicsCollapseFour"
                className="collapse"
                aria-labelledby="basicsHeadingFour"
                data-parent="#basicsAccordion1"
              ></div>
            </div>

            <div className="card-table" css={cartTableStyle}>
              <div
                css={cardHeaderStyle}
                className="card-header card-collapse__header"
                id="basicsHeadingOne"
              >
                <h5 css={h5Style}>React Random Color generator</h5>
                <a
                  href="https://nostalgic-roentgen-e8596b.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img css={projectImg} src={randomColor} alt="todo project" />
                </a>
              </div>
              <div
                id="basicsCollapseOne"
                className="collapse"
                aria-labelledby="basicsHeadingOne"
                data-parent="#basicsAccordion2"
              ></div>
            </div>
            <div className="card-table" css={cartTableStyle}>
              <div
                css={cardHeaderStyle}
                className="card-header card-collapse__header"
                id="basicsHeadingOne"
              >
                <h5 css={h5Style}>React Todo App</h5>
                <a
                  href="https://affectionate-heyrovsky-7618fd.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img css={projectImg} src={todo} alt="todo project" />
                </a>
              </div>
              <div
                id="basicsCollapseOne"
                className="collapse"
                aria-labelledby="basicsHeadingOne"
                data-parent="#basicsAccordion2"
              ></div>
            </div>

            <div className="card-table" css={cartTableStyle}>
              <div
                css={cardHeaderStyle}
                className="card-header card-collapse__header"
                id="basicsHeadingThree"
              >
                <div className="card-table" css={cartTableStyle}>
                  <h5 css={h5Style}>React countdown timer</h5>
                  <a
                    href="https://elastic-meninsky-ca3d1e.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      css={projectImg}
                      src={countdown}
                      alt="countdown project"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
