import React from 'react';
import { Link } from 'react-router-dom';
import NavBarEditCommentFormContainer from '../nav_bar/nav_bar_edit_comment_form_container';

class UpdateCommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: "", rating: null, id: null, updateButton: "Update Review"}
    this.handleCommentBodyChange = this.handleCommentBodyChange.bind(this);
    this.handleClickStar = this.handleClickStar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleComment(this.props.match.params.commentId).then(({comment}) => {
      // debugger
  
      if (comment.rating === 1) {
        document.getElementsByName("star").forEach(ele => {
          return ele.className = "one-star";
        })
      } else if (comment.rating === 2) {
        document.getElementsByName("star").forEach(ele => {
          return ele.className = "two-star";
        })
      } else if (comment.rating === 3) {
        document.getElementsByName("star").forEach(ele => {
          return ele.className = "three-star";
        })
      } else if (comment.rating === 4) {
        document.getElementsByName("star").forEach(ele => {
          return ele.className = "four-star";
        })
      } else if (comment.rating === 5) {
        document.getElementsByName("star").forEach(ele => {
          return ele.className = "five-star";
        })
      } 

      this.setState({body: comment.body})

    } )
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
      this.props.updateComment(this.props.match.params.commentId, {body: this.state.body, rating: this.state.rating}).then(() => this.setState({updateButton: "Updated!"}));
  }


  render() {
    if (!this.props.comment) {
      return null;
    }
    let redirectMessage;
    if (this.state.updateButton === "Updated!") {

        redirectMessage =  (
        <Link id="redirect-message" to={`/businesses/${this.props.business.id}`}>
            <span className="redirect-message">Go back to business: </span>
            <span className="redirect-message">{this.props.business.name}</span>
        </Link>
        )
    }
    // debugger
    return (

      <div>
        <NavBarEditCommentFormContainer />
        <div className="update-comment-form-main">
            <Link id="update-comment-form-business-name-title" to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
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
                <input className="submit-button" type="submit" onSubmit={this.handleSubmit} value={this.state.updateButton}/>
            </form>
            {redirectMessage}
        </div>
      </div>
    );
  }
}

export default UpdateCommentForm;