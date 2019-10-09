// import React from 'react';
// import { Link } from 'react-router-dom';

// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = this.props.user;
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleDemoUserLogIn = this.handleDemoUserLogIn.bind(this);
//   }

//   componentDidMount() {
//     this.props.clearError();
//   }

//   handleChange(field) {
//     return e => this.setState({
//       [field]: e.target.value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     // const user = Object.assign({}, this.state); 
//     // this.props.processForm(user); 
//     this.props.processForm(this.state).then(() => this.props.history.push("/")); 
//   }

//   handleDemoUserLogIn(e) {
//     e.preventDefault();
//     this.props.processForm(this.props.demouser).then(() => this.props.history.push("/"));
//   }

//   renderErrors() {
//     return(
//       <ul className="error-messages">
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>
//             {error}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     let title;
//     let subTitle;
//     let demoUserButton;
//     let signUpNames;
//     let signUpZipcode;
//     let footer;

//     if (this.props.formType === 'Log In') {
//       title = "Log In to eHah";
//       // subTitle = <p>New to eHah? <Link to="/signup">sign up instead</Link></p>;
//       subTitle = (
//         <p>New to eHah? 
//           <Link className="signup-link" to="/signup"> Sign up</Link>
//         </p>
//       )
//       demoUserButton = (
//         <>
//           <input onClick={this.handleDemoUserLogIn} className="demo-submit" type="submit" value="Demo Login" />
//           <p className="seperator"><div></div><span>OR</span><div></div></p>
//         </>
//       )
//       footer = (
//         <p className="signup-login-footer">New to eHah? 
//           <Link className="signup-link" to="/signup"> Sign up</Link>
//         </p>
//       )
//     } else {
//       title = "Sign Up for eHah";
//       subTitle = "Connect with great local businesses";
//       signUpNames = (
//         <>
//           {/* First Name Input */}
//           <input type="text"
//             value={this.state.first_name}
//             onChange={this.handleChange('first_name')}
//             className="login-input"
//             placeholder="First Name"
//           />

//           {/* Last Name Input */}
//           <input type="text"
//             value={this.state.last_name}
//             onChange={this.handleChange('last_name')}
//             className="login-input"
//             placeholder="Last Name"
//           />
//         </>
//       )
//       signUpZipcode = (
//         // zipcode input
//         <input type="text"
//           value={this.state.zipcode}
//           onChange={this.handleChange('zipcode')}
//           className="login-input"
//           placeholder="ZIP Code"
//         />
//       )
//       footer = (
//         <p className="signup-login-footer">Already on eHah? 
//           <Link className="signup-link" to="/login"> Login</Link>
//         </p>
//       )
//     }
//     return (
//       <div className="signup-login-page">
       
//         <header className="navbar">
//           <Link to="/">
//             <img className="signup-login-page-logo" src={window.splashLogoURL} />
//           </Link>
//         </header>

//         <section className="signup-login-container">
//           <div className="whole-form-except-img">
//             <div className="whole-form-except-last-signup">
//               {this.renderErrors()}
//               <h1 className="signup-login-title">{title}</h1>
//               <h2 className="signup-login-subtitle">{subTitle}</h2>     
//               {signUpNames}
//               {demoUserButton}

//               <form onSubmit={this.handleSubmit} className="login-form-box">

//                 <div className="login-form">  
//                   {/* email input */}
//                   <input type="text"
//                     value={this.state.email}
//                     onChange={this.handleChange('email')}
//                     className="login-input"
//                     placeholder="Email"
//                   />
//                   <br/>
//                   {/* password input */}
//                   <input type="password"
//                     value={this.state.password}
//                     onChange={this.handleChange('password')}
//                     className="login-input"
//                     placeholder="Password"
//                   />
//                   <br/>
//                   {signUpZipcode}
//                   <br/>
//                   <input className="session-submit" type="submit" value={this.props.formType} />
//                 </div>

//               </form>
//             </div>
//             {footer}
            
//           </div>
        
//           <img className="signup-login-page-image" src={window.signupLoginPageImage} />
//         </section>
//       </div>
//     );
//   }
// }

// export default SessionForm;