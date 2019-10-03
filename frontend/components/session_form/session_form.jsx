import React from 'react';
import { Link } from 'react-router-dom';
// import NavBar from '../nav_bar/nav_bar_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: '',
    //   password: ''
    // };
    this.state = this.props.user;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUserLogIn = this.handleDemoUserLogIn.bind(this);
  }

  componentDidMount() {
    this.props.clearError();
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state); 
    // this.props.processForm(user); 
    this.props.processForm(this.state).then(() => this.props.history.push("/")); 
  }

  handleDemoUserLogIn(e) {
    e.preventDefault();
    this.props.processForm(this.props.demouser).then(() => this.props.history.push("/"));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let title;
    let subTitle;
    let demoUserButton;
    let signUpNames;
    let signUpZipcode;
    let footer;

    if (this.props.formType === 'Log In') {
      title = "Log In to eHah";
      // subTitle = <p>New to eHah? <Link to="/signup">sign up instead</Link></p>;
      subTitle = (
        <p>New to eHah? 
          <Link className="signup-link" to="/signup"> Sign up</Link>
        </p>
      )
      demoUserButton = (
        <div>
          <input onClick={this.handleDemoUserLogIn} className="demo-submit" type="submit" value="Demo Login" />
          <p className="seperator">OR</p>
        </div>
      )
      footer = (
        <p>New to eHah? 
          <Link className="signup-link" to="/signup"> Sign up</Link>
        </p>
      )
    } else {
      title = "Sign Up for eHah";
      subTitle = "Connect with great local businesses";
      signUpNames = (
        <div>
          {/* First Name Input */}
          <input type="text"
            value={this.state.first_name}
            onChange={this.handleChange('first_name')}
            className="login-input"
            placeholder="First Name"
          />

          {/* Last Name Input */}
          <input type="text"
            value={this.state.last_name}
            onChange={this.handleChange('last_name')}
            className="login-input"
            placeholder="Last Name"
          />
        </div>
      )
      signUpZipcode = (
        // zipcode input
        <input type="text"
          value={this.state.zipcode}
          onChange={this.handleChange('zipcode')}
          className="login-input"
          placeholder="ZIP Code"
        />
      )
      footer = (
        <p>Already on eHah? 
          <Link className="signup-link" to="/login"> Login</Link>
        </p>
      )
    }
    return (
      <div className="signup-login-page">
       
        <header className="navbar">
          <Link to="/">
            <img className="signup-login-page-logo" src={window.splashLogoURL} />
          </Link>
        </header>

        <section className="signup-login-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <h1 className="signup-login-title">{title}</h1>
            <h2 className="signup-login-subtitle">{subTitle}</h2>
            <div className="login-form">
              <br/>
              {signUpNames}
              <br/>
              {demoUserButton}
              <br/>
              {/* email input */}
              <input type="text"
                value={this.state.email}
                onChange={this.handleChange('email')}
                className="login-input"
                placeholder="Email"
              />
              <br/>
              {/* password input */}
              <input type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                className="login-input"
                placeholder="Password"
              />
              <br/>
              {signUpZipcode}
              <br/>
              <input id="session-submit" type="submit" value={this.props.formType} />
              <h3 className="signup-login-footer">{footer}</h3>
            </div>
          </form>
          <img className="signup-login-page-image" src={window.signupLoginPageImage} />
        </section>
      </div>
    );
  }
}

export default SessionForm;