import React, { Component } from "react";

import translate from "../i18n/translate";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: props.lang,
      languages: props.languages,
    };
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.name) {
      switch (e.target.name) {
        case "view-detail":
          console.log("VINO");
          this.setState({
            openJobModal: true,
          });
          break;
        // case "close-job":
        //   this.setState({
        //     openJobModal: false,
        //     jobDetail: {
        //       title: "",
        //       description: "",
        //       applyUrl: "",
        //     },
        //   });
        //   break;

        default:
          break;
      }
    }
  }

  render() {
    function loading() {
      return (
        <div className="loading m-4">
          <i className="fab fa-galactic-republic fa-spin fa-4x"></i>
          <p>{translate("general.loading")}</p>
        </div>
      );
    }

    return (
      <div className="container jobs-list mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <strong>{translate("breadcrumb.menu.option1")}</strong>
            </li>
          </ol>
        </nav>

        <div className="">
          {this.props.jobsLoading ? loading() : ""}

          {this.props.jobData.map((job) => (
            <div key={job.id} className=" mb-4">
              <div className="card mb-3">
                <h3>
                  <Link to={`/job/${job.id}`}>{job.title}</Link>
                </h3>
                <p className="cities text-center text-md-left">
                  <span className="label">{translate("joblist.location")}</span>
                  {job.cities.map((city) => {
                    return (
                      <span key={city.id} className="sep">
                        {city.name}
                      </span>
                    );
                  })}
                </p>
                <p className="commitment text-center text-md-left">
                  <span className="label">
                    {translate("joblist.commitment")}
                  </span>
                  {job.commitment.title}
                </p>
                <p className="remote text-center text-md-left">
                  <span className="label">{translate("joblist.type")}</span>
                  {job.remotes.map((remote) => {
                    return (
                      <span key={remote.id} className="sep">
                        {remote.name}
                      </span>
                    );
                  })}
                </p>
                <p className="company text-center text-md-left">
                  <span className="label">{translate("joblist.company")}</span>
                  <a
                    href={job.company.websiteUrl}
                    target="_Blank"
                    rel="noopener noreferrer"
                  >
                    {job.company.name}{" "}
                  </a>
                  <i className="fas fa-external-link-alt"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
