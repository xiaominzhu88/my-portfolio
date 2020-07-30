/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function ProjectButtons(props) {
  const span = css`
    color: #49c39e;
    background-color: rgba(4, 30, 22, 0.1);
    font-weight: 900;
    padding: 0.625rem;
    border-radius: 5px;
    margin: 0.5em 1em;
    transition: 0.2s ease-in-out;
    border: none;
    text-align: center;

    cursor: pointer;
    outline: none;
    :hover {
      background-color: #f7e654;
      text-decoration: none;
    }
  `;

  return (
    <div className="projectButtons">
      <button onClick={props.showNextProjects} css={span}>
        NextJs{' '}
        <span role="img" aria-label="emoji">
          ✏️
        </span>
      </button>
      <button onClick={props.showReactProjects} css={span}>
        React{' '}
        <span role="img" aria-label="emoji">
          ✏️
        </span>
      </button>
      <style jsx="true">{`
        .projectButtons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          text-align: center;
        }
        @media (max-width: 600px) {
          margin: 0 auto;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
