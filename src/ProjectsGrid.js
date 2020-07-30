/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import ProjectButtons from './ProjectButtons';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import todo from './images/todo.png';
import countdown from './images/countdown.png';
import ecommerce from './images/ecommerce.png';
import randomColor from './images/color.png';
import findogs from './images/findogs.png';
import friends from './images/friends.png';
import weather from './images/weather.png';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 700,
    height: 450,
  },
}));

const projectsData = [
  {
    img: findogs,
    title: 'findogs',
    author: 'NextJs',
    href: 'https://findogs.herokuapp.com/',
  },
  {
    img: ecommerce,
    title: 'ecommerce-store',
    author: 'NextJs',
    href: 'https://next-js-ecommerces-store.herokuapp.com',
  },
  {
    img: weather,
    title: 'weather-app',
    author: 'React',
    href: 'https://zhu-weather-react.netlify.app/',
  },
  {
    img: todo,
    title: 'todo-list',
    author: 'React',
    href: 'https://react-todo-app-zhu.netlify.app',
  },
  {
    img: countdown,
    title: 'countdown-timer',
    author: 'React',
    href: 'https://count-down-react.netlify.app/',
  },
  {
    img: randomColor,
    title: 'random-color-generator',
    author: 'React',
    href: 'https://react-random-color.netlify.app/',
  },

  {
    img: friends,
    title: 'friends-app',
    author: 'React',
    href: 'https://react-friends-co.netlify.app/',
  },
];

const span = css`
  color: #49c39e;
  background-color: rgba(4, 30, 22, 0.1);
  font-size: 1rem;
  font-weight: 900;
  padding: 0.625rem 1.125rem;
  border-radius: 5px;
  margin: 0.5em auto;
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #343734;
    text-decoration: none;
  }
`;
const FooterContainerRowStyle = css`
  width: 100%;
  min-height: 1px;
  display: flex;
  flex-wrap: wrap;
`;

const footerPStyle = css`
  font-size: 1em;
  font-weight: 400;
  color: #8d8f8a;
  margin: 1em auto;
  width: 70%;

  @media (max-width: 450px) {
    width: 85%;
    margin: 0 auto;
  }
`;
const FooterContainerStyle = css`
  background-color: #10a89a12 !important;
  text-align: center;
  margin: 0 auto;
`;

const projectImg = css`
  width: 330px;
  height: 180px;
  box-shadow: 5px 8px 11px gray;
  margin: 1em auto;
  border-radius: 13px;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 6em;
    height: 5em;
  }
  :hover {
    width: 310px;
  }
`;
const spanStyle = css`
  color: #ffc107;
  font-family: monospace;
  font-weight: 700;
  font-size: 1.2em;
  :hover {
    color: #fff;
  }
`;

export default function ProjectsGrid() {
  const [showText, setShowText] = useState(false);

  const classes = useStyles();

  const showSlogToggle = () => {
    setShowText(!showText);
  };

  return (
    <div className="footerContainer" css={FooterContainerStyle}>
      <div className="footerContainerRow" css={FooterContainerRowStyle}>
        <div
          className="text-center"
          css={css`
            text-align: center !important;
            margin: 1em auto;
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
              margin-bottom: 1em;
              display: block;
            `}
          >
            {' '}
            <button onClick={showSlogToggle} css={span}>
              My Projects{' '}
              <span role="img" aria-label="emoji">
                🟢
              </span>
            </button>
            <p
              className="projectText"
              css={footerPStyle}
              style={{ display: showText ? 'block' : 'none' }}
            >
              I'm at the beginning of this exciting development journey and I
              understand there are lots of improvements. <br />
              I've included some of my recently web application projects below.
            </p>
          </div>
          <ProjectButtons />
        </div>
      </div>

      <div
        className={classes.root}
        style={{
          marginBottom: '1.5em',
        }}
      >
        <GridList cellHeight={200} className={classes.gridList}>
          {/* <GridListTile
            key="Subheader"
            cols={3}
            style={{ height: 'auto' }}
          ></GridListTile> */}

          {projectsData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} css={projectImg} />{' '}
              <a href={tile.href}>
                <GridListTileBar
                  title={<span css={spanStyle}>{tile.title} </span>}
                  subtitle={
                    <span style={{ color: '#FFC107', fontFamily: 'monospace' }}>
                      <span role="img" aria-label="write-emoji">
                        {' '}
                        ✍️ {tile.author}
                      </span>
                    </span>
                  }
                />{' '}
              </a>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
