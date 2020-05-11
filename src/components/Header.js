import React, { Component } from "react";
import Avatar from "react-avatar";

import translate from "../i18n/translate";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: false,
      userAvatar: "",
      isLogged: false,
      openModal: false,
      email: "",
    };

    this.form = React.createRef();
    this.validate = this.validate.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    let valid = this.form.current.reportValidity();

    if (valid) {
      this.setState({
        openModal: false,
        isLogged: true,
        userAvatar: this.state.email,
      });
    }
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();

    if (e.target.name) {
      switch (e.target.name) {
        case "user-profile":
          this.setState({
            userProfile: !this.state.userProfile,
          });
          break;
        case "close":
          this.setState({
            openModal: false,
            email: "",
          });
          break;

        default:
          break;
      }
    }

    if (e.target.name) {
      switch (e.target.name) {
        case "1":
          this.setState({
            openModal: !this.state.openModal,
            userProfile: false,
          });
          break;
        case "4":
          this.setState({
            userProfile: false,
            userAvatar: "",
            isLogged: false,
          });
          break;

        default:
          break;
      }
    }
  }

  render() {
    let userProfileMenu = [
      {
        id: 2,
        name: translate("user.profile"),
        icon: "fa-user",
        alt: translate("user.alt.maybe"),
      },
      {
        id: 3,
        name: translate("user.settings"),
        icon: "fa-cogs",
        alt: translate("user.alt.maybe"),
      },
      {
        id: 4,
        name: translate("user.signout"),
        icon: "fa-sign-out-alt",
        alt: translate("user.alt.signout"),
      },
    ];

    if (!this.state.isLogged) {
      userProfileMenu = [
        {
          id: 1,
          name: translate("user.login"),
          icon: "fa-sign-in-alt",
          alt: translate("user.alt.login"),
        },
      ];
    }

    const userMenu = userProfileMenu.map((menu) => (
      <li key={menu.id} className="list-group-item">
        <a
          href="/"
          name={`${menu.id}`}
          title={`${menu.alt}`}
          alt={`${menu.alt}`}
          onClick={(e) => this.handleClick(e)}
        >
          <i className={`px-2 fas ${menu.icon}`}></i>
          {menu.name}
        </a>
      </li>
    ));

    return (
      <header className="">
        <div className="container py-3">
          <div className="row">
            <div className="col-12 col-md-4 text-center text-md-left logo">
              <h2 className="mb-2 mb-md-0 d-block d-md-inline">
                {translate("header.logo")}
              </h2>
              <small className="ml-0 ml-md-2">
                {translate("header.title")}
              </small>
            </div>
            <div className="col-12 col-md-8 title text-center text-md-right">
              <div className="d-flex flex-column flex-md-row justify-content-center align-content-center justify-content-md-end align-items-center user__profile">
                <div className="input-group language-selector">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-globe"></i>
                    </span>
                  </div>
                  <select
                    className="form-control custom-select"
                    name="languages"
                    value={this.props.data.languages}
                    onChange={(e) => this.props.data.handleChange(e)}
                  >
                    <option value="en-US">ENGLISH</option>
                    <option value="es-ES">SPANISH</option>
                  </select>
                </div>
                <div className="welcome">
                  <div className="mb-0">
                    <Avatar
                      email={this.state.userAvatar}
                      size="35"
                      className="rounded shadow-sm user__avatar mr-2"
                    />
                    {translate("user.hi")}
                    <button
                      name="user-profile"
                      className="btn btn-link p-0 user__name"
                      onClick={(e) => this.handleClick(e)}
                    >
                      {this.state.userAvatar
                        ? this.state.userAvatar
                        : translate("user.guess")}
                    </button>
                    <div
                      className={`user__profile-options rounded bg-light ${
                        this.state.userProfile ? "d-block" : "d-none"
                      }`}
                    >
                      <ul className="list-group">{userMenu}</ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div
          className={`modal ${this.state.openModal ? "show" : "hide"}`}
          id="login"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="loginLabel"
          aria-hidden={this.state.openModal}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginLabel">
                  Log In
                </h5>
                <button
                  name="close"
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => this.handleClick(e)}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form ref={this.form} onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group input-group-lg flex-nowrap">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="row mt-3">
                    <div className="col-12 col-md-6 text-center">
                      <button
                        type="button"
                        name="close"
                        className="btn btn-secondary w-100"
                        onClick={(e) => this.handleClick(e)}
                      >
                        Close
                      </button>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                      <button
                        name="save"
                        className="btn btn-primary w-100"
                        onClick={this.validate}
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <p>
                  <small>
                    <b>NOTE:</b> Remeber this is a code example only. This "Log
                    In" is not a real full login at all. So, the states will be
                    clean when you reload/close the browser.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
