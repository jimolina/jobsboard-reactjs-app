import React, { Component } from "react";
import { Link } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import translate from "../i18n/translate";

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: props.lang,
      languages: props.languages,
      jobsData: props.jobData,
      jobId: props.match.params.id,
      jobDetail: "",
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const jobDetail = this.state.jobsData.find(
      (job) => job.id === this.state.jobId
    );

    return this.setState({
      jobDetail: jobDetail,
    });
  }
  render() {
    function noData() {
      return (
        <div className="loading m-4">
          <i className="fas fa-exclamation fa-4x mb-4"></i>
          <p>{translate("jobdetail.nodate")}</p>
        </div>
      );
    }

    return (
      <div className="container job-detail mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/">{translate("breadcrumb.menu.option1")}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {translate("breadcrumb.menu.option2")}
              {this.state.jobDetail ? this.state.jobDetail.title : ""}
            </li>
          </ol>
        </nav>

        <div className="card mb-3">
          {!this.state.jobDetail ? noData() : ""}
          {this.state.jobDetail ? <h1>{this.state.jobDetail.title}</h1> : ""}
          {this.state.jobDetail ? (
            <p>
              <span className="label">{translate("joblist.location")}</span>
              {this.state.jobDetail.cities.map((city) => {
                return (
                  <span key={city.id} className="sep">
                    {city.name}
                  </span>
                );
              })}
            </p>
          ) : (
            ""
          )}

          {this.state.jobDetail ? (
            <p>
              <span className="label">{translate("joblist.commitment")}</span>
              {this.state.jobDetail.commitment.title}
            </p>
          ) : (
            ""
          )}

          {this.state.jobDetail ? (
            <p className="company text-center text-md-left">
              <span className="label">{translate("joblist.company")}</span>
              <a
                href={this.state.jobDetail.company.websiteUrl}
                target="_Blank"
                rel="noopener noreferrer"
              >
                {this.state.jobDetail.company.name}{" "}
              </a>
            </p>
          ) : (
            ""
          )}

          <hr />
          <div className="description">
            {this.state.jobDetail ? (
              <ReactMarkdown source={this.state.jobDetail.description} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
