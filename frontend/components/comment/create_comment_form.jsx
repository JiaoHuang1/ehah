import React from 'react';
import CommentForm from './comment_form';
import { Link } from 'react-router-dom';

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", rating: null }
    this.handleCommentBodyChange = this.handleCommentBodyChange.bind(this);
    this.handleClickStar = this.handleClickStar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCommentBodyChange(e) {
    //   debugger
    this.setState({ body: e.target.value })
  }

  handleClickStar(e) {
    //   debugger
    this.setState({ rating: e.target.value })
  }

  handleSubmit(e) {
    //     // debugger
      e.preventDefault();
      this.props.createComment(this.props.match.params.businessId, this.state);
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
    if (this.props.createButton === "Created!") {
        redirectMessage =  (
        <Link id="" to={`/businesses/${this.props.match.params.businessId}`}>
            <span>Go back to</span>
            <span>{this.props.business.name}</span>
        </Link>
        )
    }
    
    return (

        // <p>test</p>
   
        <div className="update-comment-form-main">
            <Link id="update-comment-form-business-name-title" to={`/businesses/${this.props.match.params.businessId}`}>{this.props.business.name}</Link>
            <form className="update-comment-form-box" onSubmit={this.handleSubmit}>
                <ul>
                    <li className="two-star" onClick={this.handleClickStar} value="1">☆</li>
                    <li className="two-star" onClick={this.handleClickStar} value="2">☆</li>
                    <li className="two-star" onClick={this.handleClickStar} value="3">☆</li>
                    <li className="two-star" onClick={this.handleClickStar} value="4">☆</li>
                    <li className="two-star" onClick={this.handleClickStar} value="5">☆</li>
                </ul>

                <input type="text" className="textarea" onChange={this.handleCommentBodyChange} value={this.state.body} />
                <input type="submit" onSubmit={this.handleSubmit} value={this.props.createButton}/>
            </form>
            {redirectMessage}
        </div>
    );
  }
}

export default CreateCommentForm;