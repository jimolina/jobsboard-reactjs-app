import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppolloClient, { gql } from "apollo-boost";

// import logo from "./images/logo.svg";
import "./sass/jobs-board.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Job from "./pages/Job";

import { I18nProvider, LOCALES } from "./i18n";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: LOCALES.ENGLISH,
      languages: "en_US",
      jobsLoading: true,
      jobData: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const client = new AppolloClient({
      uri: "https://api.graphql.jobs/",
    });

    return client
      .query({
        query: gql`
          {
            jobs {
              id
              title
              description
              applyUrl
              company {
                name
                websiteUrl
              }
              commitment {
                title
              }
              cities {
                id
                name
              }
              remotes {
                id
                name
              }
            }
          }
        `,
      })
      .then((result) => {
        this.setState({
          jobData: result.data.jobs,
          jobsLoading: false,
        });
        console.log("Final Jobs: ", this.state.jobData);
      });
  }

  handleChange(e) {
    const value = e.target.value;
    let newLang = LOCALES.ENGLISH;

    switch (value) {
      case "es-ES":
        newLang = LOCALES.SPANISH;
        break;
      default:
        break;
    }

    this.setState({
      lang: newLang,
      languages: value,
    });
  }

  render() {
    return (
      <I18nProvider locale={this.state.lang}>
        <Router>
          <div className="main container-fluid p-0">
            <Header
              data={{
                lang: this.state.lang,
                languages: this.state.languages,
                handleChange: this.handleChange,
              }}
            />
            <Switch>
              <Route
                path={["/", "job"]}
                render={(props) => (
                  <Dashboard
                    lang={this.state.lang}
                    languages={this.state.languages}
                    jobsLoading={this.state.jobsLoading}
                    jobData={this.state.jobData}
                    {...props}
                  />
                )}
                exact
              />
              <Route
                path={"/job/:id"}
                render={(props) => (
                  <Job
                    lang={this.state.lang}
                    languages={this.state.languages}
                    jobData={this.state.jobData}
                    {...props}
                  />
                )}
                exact
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </I18nProvider>
    );
  }
}

export default App;
