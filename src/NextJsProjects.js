/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ecommerce from './images/ecommerce.png';
import findogs from './images/findogs.png';

export default function NextJsProjects() {
  const cartTableStyle = css`
    border-radius: 10px;
    @media (max-width: 450px) {
      width: 100%;
      margin: 0 auto;
      padding-bottom: 0.5em;
    }
    padding-bottom: 1em;
  `;
  const projectImg = css`
    width: 10em;
    height: 6em;
    margin: 0 2em;
    box-shadow: 5px 8px 11px gray;
    @media (max-width: 450px) {
      width: 7em;
      height: 5em;
    }
    :hover {
      width: 9em;
      height: 5em;
      transform: rotate(360deg);
      transition: 3s;
    }
  `;
  const h5Style = css`
    font-size: 1.1rem;
    margin: 1em auto;
    padding-top: 1em;
    color: #03a9f4;
    font-family: 'Fira Mono', monospace;
    @media (max-width: 450px) {
      padding: 0.5em;
      margin: 0.5em auto;
      font-size: 0.9em;
    }
  `;
  const aStyle = css`
    text-decoration: none;
  `;

  return (
    <div
      className="projects"
      css={css`
        margin-bottom: 1em !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div className="card-table" css={cartTableStyle}>
        <a
          href="https://findogs.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          css={aStyle}
        >
          <h5 css={h5Style}>Findogs</h5>
          <img css={projectImg} src={findogs} alt="todo project" />
        </a>
      </div>

      <div className="card-table" css={cartTableStyle}>
        <h5 css={h5Style}>NextJs Ecommerce</h5>
        <a
          href="https://next-js-ecommerces-store.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
          css={aStyle}
        >
          <img css={projectImg} src={ecommerce} alt="todo project" />
        </a>
      </div>
      <style jsx="true">{`
        @media (max-width: 450px) {
          .projects {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
