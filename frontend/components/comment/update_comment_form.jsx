import React from 'react';
import { Link } from 'react-router-dom';
import NavBarEditCommentFormContainer from '../nav_bar/nav_bar_edit_comment_form_container';

class UpdateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log(`1 ${this.props.comment.body}`)
    this.state = { body: "", rating: null}
    this.handleCommentBodyChange = this.handleCommentBodyChange.bind(this);
    this.handleClickStar = this.handleClickStar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleComment(this.props.match.params.commentId)
    // console.log(`2 ${this.props.comment.body}`)
  }

  handleCommentBodyChange(e) {
    //   debugger
    this.setState({ body: e.target.value })
  }

  handleClickStar(e) {
    //   debugger
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
        // debugger
      e.preventDefault();
      this.props.updateComment(this.props.match.params.commentId, this.state);
      this.setState = ({ body: "", rating: null});
  }


  render() {
    // let commentUpdateFormRating = "one-star";
    // if (this.state.rating <= 1) {
    //     commentUpdateFormRating = "one-star";
    // } else if (this.state.rating <= 2) {
    //     commentUpdateFormRating = "two-star";
    // } else if (this.state.rating <= 3) {
    //     commentUpdateFormRating = "three-star";
    // } else if (this.state.rating <= 4) {
    //     commentUpdateFormRating = "four-star";
    // } else {
    //     commentUpdateFormRating = "five-star";
    // }

    let redirectMessage;
    if (this.props.updateButton === "Updated!") {
        redirectMessage =  (
        <Link id="redirect-message" to={`/businesses/${this.props.comment.business.id}`}>
            <span className="redirect-message">Go back to</span>
            <span>{this.props.comment.business.name}</span>
        </Link>
        )
    }
    
    return (

      <div>
        <NavBarEditCommentFormContainer />
        <div className="update-comment-form-main">
            <Link id="update-comment-form-business-name-title" to={`/businesses/${this.props.comment.business.id}`}>{this.props.comment.business.name}</Link>
            <form className="update-comment-form-box" onSubmit={this.handleSubmit}>
                <ul>
                    <li name="star" className="orginal-star-color" onClick={this.handleClickStar} value="1">☆</li>
                    <li name="star" className="orginal-star-color" onClick={this.handleClickStar} value="2">☆</li>
                    <li name="star" className="orginal-star-color" onClick={this.handleClickStar} value="3">☆</li>
                    <li name="star" className="orginal-star-color" onClick={this.handleClickStar} value="4">☆</li>
                    <li name="star" className="orginal-star-color" onClick={this.handleClickStar} value="5">☆</li>
                </ul>

                <input type="text" className="textarea" onChange={this.handleCommentBodyChange} value={this.state.body} />
                <input className="submit-button" type="submit" onSubmit={this.handleSubmit} value={this.props.updateButton}/>
            </form>
            {redirectMessage}
        </div>
      </div>
    );
  }
}

export default UpdateCommentForm;