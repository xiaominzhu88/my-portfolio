/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import NextJsProjects from './NextJsProjects';
import ReactProjects from './ReactProjects';
import ProjectButtons from './ProjectButtons';

export default function FooterContainer2() {
  const [show, setShow] = useState(false);
  const [showNextProjects, setShowNextProjects] = useState(false);
  const [showReactProjects, setShowReactProjects] = useState(false);

  const FooterContainer2Style = css`
    background-color: #10a89a12 !important;
    text-align: center;
    border-radius: 5px;

    @media (max-width: 450px) {
      margin: 0 auto;
    }
  `;

  const FooterContainerRowStyle = css`
    width: 100%;
    min-height: 1px;
    display: flex;
    flex-wrap: wrap;
  `;
  const span = css`
    color: #49c39e;
    background-color: rgba(4, 30, 22, 0.1);
    font-size: 1rem;
    font-weight: 900;
    padding: 1em;
    border-radius: 5px;
    margin: 0.5em auto;
    transition: 0.2s ease-in-out;
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

  const projectContainer = css`
    margin: 0 auto;
    display: flex;
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
              display: block;
            `}
          >
            <button onClick={showSlogToggle} css={span}>
              Work{' '}
              <span role="img" aria-label="emoji">
                🟢
              </span>
            </button>
            <p
              className="lead mb-0"
              css={footerPStyle}
              style={{ display: show ? 'block' : 'none' }}
            >
              From Web Components and design to React and NextJs, I'm at the
              beginning of this exciting development journey, <br />
              check out my latest web projects.
              <br />⏬
            </p>
          </div>
        </div>

        <div className="project-container" css={projectContainer}>
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
