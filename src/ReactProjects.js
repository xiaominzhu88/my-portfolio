/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import todo from './images/todo.png';
import countdown from './images/countdown.png';
import randomColor from './images/color.png';
import friends from './images/friends.png';
import weather from './images/weather.png';
import meme from './images/meme.png';
import videoPlayer from './images/videoplayer.png';

export default function ReactProjects() {
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
    margin: 0 auto;
    box-shadow: 5px 8px 11px gray;

    @media (max-width: 450px) {
      width: 7em;
      height: 5em;
    }
    :hover {
      width: 9em;
      height: 5em;
      transform: skew(-13deg, -13deg);
      transition: 1s;
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
      `}
    >
      <div className="card-table" css={cartTableStyle}>
        <h5 css={h5Style}>React weather-app</h5>
        <a
          href="https://zhu-weather-react.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img css={projectImg} src={weather} alt="todo project" />
        </a>
      </div>

      <div className="card-table" css={cartTableStyle}>
        <h5 css={h5Style}>React friends-app</h5>
        <a
          href="https://react-friends-co.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img css={projectImg} src={friends} alt="todo project" />
        </a>
      </div>

      <div className="card-table" css={cartTableStyle}>
        <h5 css={h5Style}>React random-color-generator</h5>
        <a
          href="https://react-random-color.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img css={projectImg} src={randomColor} alt="todo project" />
        </a>
      </div>

      <div className="card-table" css={cartTableStyle}>
        <h5 css={h5Style}>React todo-app</h5>
        <a
          href="https://react-todo-app-zhu.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img css={projectImg} src={todo} alt="todo project" />
        </a>
      </div>
      <div className="card-table" css={cartTableStyle}>
        <div className="card-table" css={cartTableStyle}>
          <h5 css={h5Style}>React countdown-timer</h5>
          <a
            href="https://count-down-react.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            css={aStyle}
          >
            <img css={projectImg} src={countdown} alt="countdown project" />
          </a>
        </div>
      </div>
      <div className="card-table" css={cartTableStyle}>
        <div className="card-table" css={cartTableStyle}>
          <h5 css={h5Style}>React meme-generator</h5>
          <a
            href="https://meme-generator-zhu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            css={aStyle}
          >
            <img css={projectImg} src={meme} alt="countdown project" />
          </a>
        </div>
      </div>
      <div className="card-table" css={cartTableStyle}>
        <div className="card-table" css={cartTableStyle}>
          <h5 css={h5Style}>React video player</h5>
          <a
            href="https://videoplayer-zhu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            css={aStyle}
          >
            <img css={projectImg} src={videoPlayer} alt="countdown project" />
          </a>
        </div>
      </div>
    </div>
  );
}
