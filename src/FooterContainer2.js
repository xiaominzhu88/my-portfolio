/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import todo from './images/todo.png';
import countdown from './images/countdown.png';
import ecommerce from './images/ecommerce.png';
import randomColor from './images/color.png';
import findogs from './images/findogs.png';
import friends from './images/friends.png';

export default function FooterContainer2() {
  const cartTableStyle = css`
    background-color: #fff !important;
    border-radius: 10px;
    @media (max-width: 450px) {
      width: 100%;
      margin: 0 auto;
      padding-bottom: 0.5em;
    }
    padding-bottom: 1em;
  `;
  const FooterContainer2Style = css`
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
  `;

  const h2Style = css`
    font-size: 1.5em;
    line-height: 0.5em;
    font-weight: 700;
    margin: 1em auto;
    font-family: 'Fira Mono', monospace;
    color: #494444;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
  `;

  const footerPStyle = css`
    font-size: 1em;
    font-weight: 400;
    color: #49c39e;
    margin: 0 auto;

    @media (max-width: 450px) {
      width: 85%;
      margin: 0 auto;
    }
  `;

  const col6 = css`
    width: 60%;
    margin: 0 auto;
    @media (max-width: 450px) {
      width: 85%;
      margin: 0 auto;
    }
  `;

  const projectImg = css`
    width: 10em;
    height: 6em;
    margin: 0 auto;
    box-shadow: 5px 8px 11px gray;
    @media (max-width: 450px) {
      width: 7em;
      height: 5em;
    }
    :hover {
      width: 11em;
      height: 7em;
    }
  `;

  const h5Style = css`
    font-size: 1.1rem;
    margin: 1em auto;
    padding-top: 1em;
    color: #29541c;
    font-family: 'Fira Mono', monospace;
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
          className="text-center"
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
            <h2 css={h2Style}>
              My Projects{' '}
              <span role="img" aria-label="emoji">
                🌟
              </span>
            </h2>
            <p className="lead mb-0" css={footerPStyle}>
              I'm at the beginning of this exciting development journey and I
              understand there are lots of improvements. <br />
              I've included some of my recently projects below.
            </p>
          </div>
        </div>

        <div className="project-container" css={col6}>
          <div
            className="mb-5"
            css={css`
              margin-bottom: 1em !important;
            `}
          >
            <div className="card-table" css={cartTableStyle}>
              <a
                href="https://findogs.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <div css={cardHeaderStyle} className="card-header"> */}
                <h5 css={h5Style}>Findogs</h5>
                <img css={projectImg} src={findogs} alt="todo project" />
                {/* </div> */}
              </a>
            </div>

            <div className="card-table" css={cartTableStyle}>
              {/* <div css={cardHeaderStyle} className="card-header"> */}
              <h5 css={h5Style}>Next.js Ecommerce-page</h5>
              <a
                href="https://next-js-ecommerces-store.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img css={projectImg} src={ecommerce} alt="todo project" />
              </a>
              {/* </div> */}
            </div>

            <div className="card-table" css={cartTableStyle}>
              {/* <div
                css={cardHeaderStyle}
                className="card-header"
                id="basicsHeadingOne"
              > */}
              <h5 css={h5Style}>React Friends App</h5>
              <a
                href="https://react-friends-co.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img css={projectImg} src={friends} alt="todo project" />
              </a>
              {/* </div> */}
            </div>

            <div className="card-table" css={cartTableStyle}>
              {/* <div
                css={cardHeaderStyle}
                className="card-header"
                id="basicsHeadingOne"
              > */}
              <h5 css={h5Style}>React Random Color generator</h5>
              <a
                href="https://react-random-color.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img css={projectImg} src={randomColor} alt="todo project" />
              </a>
              {/* </div> */}
            </div>

            <div className="card-table" css={cartTableStyle}>
              {/* <div
                css={cardHeaderStyle}
                className="card-header"
                id="basicsHeadingOne"
              > */}
              <h5 css={h5Style}>React Todo App</h5>
              <a
                href="https://react-todo-app-zhu.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img css={projectImg} src={todo} alt="todo project" />
              </a>
              {/* </div> */}
            </div>

            <div className="card-table" css={cartTableStyle}>
              {/* <div
                css={cardHeaderStyle}
                className="card-header "
                id="basicsHeadingThree"
              > */}
              <div className="card-table" css={cartTableStyle}>
                <h5 css={h5Style}>React countdown timer</h5>
                <a
                  href="https://count-down-react.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    css={projectImg}
                    src={countdown}
                    alt="countdown project"
                  />
                </a>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
