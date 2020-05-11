import React, { Component } from "react";

import translate from "../i18n/translate";

class Footer extends Component {
  render() {
    return (
      <footer className="">
        <div className="container rounded pt-4 pb-2 px-5">
          <div className="row">
            <div className="col-12 text-center">
              <p>
                {translate("footer.api")}
                <a
                  href="https://api.graphql.jobs/"
                  target="_Blank"
                  className=""
                  rel="noopener noreferrer"
                >
                  https://api.graphql.jobs/
                </a>
              </p>
              {translate("footer.created")}
            </div>
            <div className="col-12 col-md-9 mx-auto">
              <div className="row row-cols-2 row-cols-lg-6">
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://www.w3schools.com/html/html5_intro.asp"
                      className=""
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <i
                          className="fab fa-html5 fa-2x"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">HTML5</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://www.w3schools.com/css/"
                      className=""
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <i
                          className="fab fa-css3-alt fa-2x"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">CSS3</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://getbootstrap.com/docs/4.4/getting-started/introduction/"
                      className=""
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <i
                          className="fab fa-bootstrap fa-2x"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">Bootstrap</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://sass-lang.com/documentation"
                      className=""
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <i className="fab fa-sass fa-2x" aria-hidden="true"></i>
                        <p className="card-text">Sass</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://reactjs.org/docs/getting-started.html"
                      className=""
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <i
                          className="fab fa-react fa-2x"
                          aria-hidden="true"
                        ></i>
                        <p className="card-text">React JS</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <a
                      href="https://www.apollographql.com/docs/"
                      className=""
                      target="_Blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-body">
                        <p className="fa-apollo mb-0">
                          <svg
                            viewBox="0 0 979 293"
                            className="eetev6l1 css-1yvvkq3"
                          >
                            <g fill="currentColor" fillRule="nonzero">
                              <path d="M159.4 83.1H130L87.5 195.4h26.6l6.9-19h40.1l-7.3-21h-26.4l17.2-48.3 30.6 88.4h26.6zM606.3 195.3V83.1H630v91.2h46.6v21zM742.6 195.3V83.1h23.6v91.2h46.6v21zM475.4 103.2c19.5 0 35.5 16.2 35.5 36.1 0 19.9-15.9 36.1-35.5 36.1-19.5 0-35.4-16.2-35.4-36.1 0-19.9 15.9-36.1 35.4-36.1zm0-22c-31.5 0-57 26-57 58.1s25.5 58.1 57 58.1 57-26 57-58.1-25.5-58.1-57-58.1zM921.5 103.2c19.6 0 35.5 16.2 35.5 36.1 0 19.9-15.9 36.1-35.5 36.1-19.5 0-35.4-16.2-35.4-36.1-.1-19.9 15.8-36.1 35.4-36.1zm0-22c-31.5 0-57 26-57 58.1s25.5 58.1 57 58.1 57-26 57-58.1-25.5-58.1-57-58.1zM322 83.1h-51.4v112.3h23.5v-38.6H322c19.6 0 35.5-16.9 35.5-36.8 0-20.1-15.9-36.9-35.5-36.9zm0 51.6h-27.9V105H322c7.7 0 13.9 7 13.9 14.8 0 7.9-6.2 14.9-13.9 14.9z"></path>
                              <path d="M250.4 229.4c-2 0-3.8 1-4.9 2.6 0 0-5.3 6.2-8.2 9.1-12.1 12.3-26.1 21.9-41.8 28.7-16.2 7-33.4 10.5-51.2 10.5-17.8 0-35-3.5-51.2-10.5-15.6-6.8-29.7-16.5-41.8-28.8-12.1-12.3-21.6-26.6-28.2-42.6-6.9-16.5-10.3-34-10.3-52.1s3.5-35.6 10.3-52.1c6.6-15.9 16.1-30.3 28.2-42.6 12.1-12.3 26.1-22 41.8-28.7 16.2-7 33.4-10.5 51.2-10.5 17.8 0 35 3.5 51.2 10.5 11.4 4.9 22 11.4 31.5 19.3-.5 1.5-.8 3.2-.8 4.9 0 8.3 6.6 15.1 14.8 15.1 8.2 0 14.8-6.8 14.8-15.1S249.2 32 241 32c-2 0-4 .4-5.7 1.2C210.5 12.5 178.8.1 144.3.1 65 .2.7 65.6.7 146.4c0 80.8 64.3 146.2 143.6 146.2 44.4 0 84-20.5 110.4-52.7 1.1-1.1 1.8-2.7 1.8-4.4-.1-3.4-2.8-6.1-6.1-6.1z"></path>
                            </g>
                          </svg>
                        </p>
                        <p className="card-text">Apollo</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <a
                href="https://github.com/jimolina/jobsboard-reactjs-app"
                className=""
                target="_Blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x" aria-hidden="true"></i>
              </a>
              <p className="card-text">
                {translate("footer.getcode")}
                <a
                  href="https://github.com/jimolina/jobsboard-reactjs-app"
                  className=""
                  target="_Blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-3 text-center text-md-left logo">
              JM
            </div>
            <div className="col-12 col-md-9 title text-center text-md-right">
              {translate("header.title")} | {""}
              <a
                href="http://josemolinaresume.com"
                target="_Blank"
                className=""
                rel="noopener noreferrer"
              >
                <u>josemolinaresume.com</u>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
