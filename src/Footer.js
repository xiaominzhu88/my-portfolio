/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import twitter from './twitter.png';
import github from './github.png';
import linkedIn from './linkedIn.png';
import email from './email.png';
import tel from './tel.png';

export default function Footer() {
  const footerh3Style = css`
    color: #fff !important;
    margin-bottom: 1rem !important;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    display: block;
    padding: 1em;
    background-color: #7d787882;
  `;

  const divRowStyle = css`
    margin-bottom: 3rem !important;
    @media (min-width: 768px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
    display: flex;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    margin: 1em auto;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <footer
      className="bg-dark"
      css={css`
        background-color: #000333 !important;
        display: block;
        box-sizing: border-box;
      `}
    >
      <div className="col-6 col-md-3 col-lg-2 order-lg-6 mb-7 mb-lg-0">
        <h3 css={footerh3Style} className="h6 text-white mb-3">
          Get In Touch
        </h3>

        <div
          css={divRowStyle}
          className="list-group list-group-flush list-group-transparent"
        >
          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              css={css`
                height: 17.5px;
                height: 29px;
              `}
              alt="twitter"
            />
          </a>
          <a
            href="https://github.com/xiaominzhu88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              css={css`
                height: 17.5px;
                height: 29px;
                margin-left: 1em;
              `}
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/m-a-xiaomin-zhu-79462815/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedIn}
              css={css`
                height: 17.5px;
                height: 29px;
                margin-left: 1em;
              `}
              alt="github"
            />
          </a>
        </div>

        <img
          src={email}
          css={css`
            height: 1em;
            width: 1.5em;
            margin-left: 1em;
          `}
          alt="github"
        />

        <img
          src={tel}
          css={css`
            height: 1.1em;
            width: 2em;
            margin-left: 1em;
          `}
          alt="github"
        />
      </div>

      <div
        css={css`
          align-items: flex-start !important;
          flex-direction: column !important;
          display: flex !important;
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;
          box-sizing: border-box;
        `}
        className="col-lg-4 order-lg-1 d-flex align-items-start flex-column"
      ></div>
    </footer>
  );
}
