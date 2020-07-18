/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import twitter from './images/twitter.png';
import github from './images/github.png';
import linkedIn from './images/linkedIn.png';
import email from './images/email.png';
import tel from './images/tel.png';

export default function Footer() {
  const footerh3Style = css`
    color: #fff !important;
    margin-bottom: 1rem !important;
    font-size: 1em;
    font-weight: 500;
    line-height: 1.5;
    font-family: 'Fira Mono', monospace;
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
      <div
        className="footer"
        css={css`
          height: 100%;
        `}
      >
        <h3 css={footerh3Style} className="h6 text-white mb-3">
          Thank You
        </h3>

        <div
          css={divRowStyle}
          className="list-group list-group-flush list-group-transparent"
        >
          <a
            href="https://twitter.com/Zhu23592976"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              css={css`
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
                height: 29px;
                margin-left: 1em;
              `}
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/xiaomin-zhu-79462815/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedIn}
              css={css`
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
          alt="email"
        />

        <img
          src={tel}
          css={css`
            height: 1.1em;
            width: 2em;
            margin-left: 1em;
          `}
          alt="tel"
        />
      </div>
    </footer>
  );
}
