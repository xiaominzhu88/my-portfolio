/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import NextJsProjects from './NextJsProjects';
import ReactProjects from './ReactProjects';
import ProjectButtons from './ProjectButtons';

export default function FooterContainer2(props) {
  const [show, setShow] = useState(false);
  const [showNextProjects, setShowNextProjects] = useState(false);
  const [showReactProjects, setShowReactProjects] = useState(false);

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

  const col6 = css`
    /* width: 60%; */
    margin: 0 auto;
    display: flex;
    @media (max-width: 450px) {
      width: 85%;
      margin: 0 auto;
    }
  `;

  const showSlogToggle = () => {
    setShow(!show);
  };
  const showNextProjectsToggle = () => {
    setShowNextProjects(!showNextProjects);
    setShowReactProjects(false);
  };
  const showReactProjectsToggle = () => {
    setShowReactProjects(!showReactProjects);
    setShowNextProjects(false);
  };

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
            <button onClick={showSlogToggle} css={span}>
              My Projects{' '}
              <span role="img" aria-label="emoji">
                🟢
              </span>
            </button>
            <p
              className="lead mb-0"
              css={footerPStyle}
              style={{ display: show ? 'block' : 'none' }}
            >
              I'm at the beginning of this exciting development journey and I
              understand there are lots of improvements. <br />
              I've included some of my recently web projects below.
            </p>
          </div>
        </div>

        <div className="project-container" css={col6}>
          <div className="projects">
            <ProjectButtons
              showNextProjects={showNextProjectsToggle}
              showReactProjects={showReactProjectsToggle}
            />

            {showNextProjects ? <NextJsProjects /> : false}
            {showReactProjects ? <ReactProjects /> : false}
          </div>
        </div>
      </div>
    </div>
  );
}
