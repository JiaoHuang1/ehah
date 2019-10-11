import React from 'react';
import { Link } from 'react-router-dom';
import NavBarCreateCommentFormContainer from '../nav_bar/nav_bar_create_comment_form_container'

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", rating: null, createButton: "Post Review"}
    this.handleCommentBodyChange = this.handleCommentBodyChange.bind(this);
    this.handleClickStar = this.handleClickStar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      this.props.fetchSingleBusiness(this.props.match.params.businessId)
  }

  
  handleCommentBodyChange(e) {
    this.setState({ body: e.target.value })
  }

  handleClickStar(e) {
    
    this.setState({ rating: e.target.value })

    if (e.target.value === 1) {
      document.getElementsByName("star").forEach(ele => {
        return ele.className = "one-star";
      })
    } else if (e.target.value === 2) {
      document.getElementsByName("star").forEach(ele => {
        return ele.className = "two-star";
      })
    } else if (e.target.value === 3) {
      document.getElementsByName("star").forEach(ele => {
        return ele.className = "three-star";
      })
    } else if (e.target.value === 4) {
      document.getElementsByName("star").forEach(ele => {
        return ele.className = "four-star";
      })
    } else if (e.target.value === 5) {
      document.getElementsByName("star").forEach(ele => {
        return ele.className = "five-star";
      })
    } 



  }

  handleSubmit(e) {
      e.preventDefault();
      this.props.createComment(this.props.match.params.businessId, this.state).then(() => this.setState({createButton: "Created!"}));
  }


  render() {

    let redirectMessage;
    if (this.state.createButton === "Created!") {
      // debugger
        redirectMessage =  (
        <Link id="redirect-message" to={`/businesses/${this.props.match.params.businessId}`}>
            <span className="redirect-message-content">Go back to </span>
            <span className="redirect-message-content">{this.props.business.name}</span>
        </Link>
        )
    }
    
    return (
        <div>
            <NavBarCreateCommentFormContainer />
        
            <div className="update-comment-form-main">
                <Link id="update-comment-form-business-name-title" to={`/businesses/${this.props.match.params.businessId}`}>{this.props.business.name}</Link>
                <form className="update-comment-form-box" onSubmit={this.handleSubmit}>
                    <ul>
                        <li name="star" className="orginal-star-color" onClick={this.handleClickStar} value="1">☆</li>
                        <li name="star" className="orginal-star-color" onClick={this.handleClickStar} value="2">☆</li>
                        <li name="star" className="orginal-star-color" onClick={this.handleClickStar} value="3">☆</li>
                        <li name="star" className="orginal-star-color" onClick={this.handleClickStar} value="4">☆</li>
                        <li name="star" className="orginal-star-color" onClick={this.handleClickStar} value="5">☆</li>
                    </ul>
                    <textarea className="textarea" onChange={this.handleCommentBodyChange} value={this.state.body} cols="30" rows="10"></textarea>
                    {/* <input type="text" className="textarea" onChange={this.handleCommentBodyChange} value={this.state.body} /> */}
                    <input type="submit" className="submit-button" onClick={this.handleSubmit} value={this.state.createButton}/>
                </form>
                {redirectMessage}
            </div>

        </div>
    );
  }
}

export default CreateCommentForm;