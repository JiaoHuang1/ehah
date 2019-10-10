import React from 'react';
import { Link } from 'react-router-dom';
import NavBarCreateCommentFormContainer from '../nav_bar/nav_bar_create_comment_form_container'

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", rating: null }
    this.handleCommentBodyChange = this.handleCommentBodyChange.bind(this);
    this.handleClickStar = this.handleClickStar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      this.props.fetchSingleBusiness(this.props.match.params.businessId)
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
        <div>
            <NavBarCreateCommentFormContainer />
        
            <div className="update-comment-form-main">
                <Link id="update-comment-form-business-name-title" to={`/businesses/${this.props.match.params.businessId}`}>{this.props.business.name}</Link>
                <form className="update-comment-form-box" onSubmit={this.handleSubmit}>
                    <ul>
                        <li className="" onClick={this.handleClickStar} value="1">☆</li>
                        <li className="" onClick={this.handleClickStar} value="2">☆</li>
                        <li className="" onClick={this.handleClickStar} value="3">☆</li>
                        <li className="" onClick={this.handleClickStar} value="4">☆</li>
                        <li className="" onClick={this.handleClickStar} value="5">☆</li>
                    </ul>

                    <input type="text" className="textarea" onChange={this.handleCommentBodyChange} value={this.state.body} />
                    <input type="submit" className="submit-button" onSubmit={this.handleSubmit} value={this.props.createButton}/>
                </form>
                {redirectMessage}
            </div>

        </div>
    );
  }
}

export default CreateCommentForm;