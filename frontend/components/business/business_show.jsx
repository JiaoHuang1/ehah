import React from 'react';
import { Link } from 'react-router-dom';
import NavBarSearch from '../nav_bar/nav_bar_search';
import CategoryNavBar from '../nav_bar/category_nav_bar';
import CommentIndexItem from '../comment/comment_index_item';
import Footer from '../contact_footer/footer';


class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleBusiness(this.props.match.params.businessId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.businessId !== prevProps.match.params.businessId) {
      this.props.fetchSingleBusiness(this.props.match.params.businessId);
    }
  }


  render() {
    // if (!this.props.business) {
    //   return null;
    // }
    // debugger
    let photos;
    let firstfourphotos;
    let firstphoto;
    if (this.props.business.photoUrls !== undefined) {
      firstphoto = <img className="show-page-side-image" src={this.props.business.photoUrls[0]}/>

      if (this.props.business.photoUrls.length >= 4) {
        firstfourphotos = (
          <div className="show-page-top-image-group">
            <div>
            <img className="show-page-single-image" src={this.props.business.photoUrls[0]}/>
            </div>
            <div>
            <img className="show-page-single-image" src={this.props.business.photoUrls[1]}/>
            </div>
            <div>
            <img className="show-page-single-image" src={this.props.business.photoUrls[2]}/>
            </div>
            <div>
            <img className="show-page-single-image" src={this.props.business.photoUrls[3]}/>
            </div>  
          </div>
        )
      }

      photos = this.props.business.photoUrls.map((photo, idx) => <img className="show-page-single-image" key={idx} src={photo}/>);
    } 

    let streetAddress;
    let cityAndState;
    if (this.props.business.address !== undefined) {
      streetAddress = this.props.business.address.split(',')[0];
      cityAndState = this.props.business.address.split(',').slice(1).join(",");
    }

    let weekendtime =`${this.props.business.weekend_open_hour} - ${this.props.business.weekend_close_hour}`
    if (this.props.business.weekend_open_hour === "closed") {
      weekendtime = this.props.business.weekend_open_hour;
    }


    let category_show;
    if (this.props.business.category_name !== undefined) {
      category_show = this.props.business.category_name.map((category_name, idx) => {
        return (
          <Link className="show-page-category-link" key={idx} to={`/search/categories?category=${category_name}`}>
              {category_name}
          </Link>
        )
      })
    }

    let comments;
    let sum_rating = 0;
    let showPageAvgReview = 0;
    if (this.props.business.comments !== undefined) {
      comments = this.props.business.comments.map(comment => {
        sum_rating += comment.rating;
        return <CommentIndexItem key={comment.id} comment={comment} users={this.props.business.users} currentUserId={this.props.currentUserId} businessId={this.props.business.id} deleteComment={this.props.deleteComment}/>
      })

      if (sum_rating / this.props.business.comments.length <= 1) {
        showPageAvgReview = "one-star"
      } else if (sum_rating / this.props.business.comments.length <= 2) {
        showPageAvgReview = "two-star"
      } else if (sum_rating / this.props.business.comments.length <= 3) {
        showPageAvgReview = "three-star"
      } else if (sum_rating / this.props.business.comments.length <= 4) {
        showPageAvgReview = "four-star"
      } else {
        showPageAvgReview = "five-star"
      }
    }

    


    return (
      <>
        <NavBarSearch />
        <CategoryNavBar />
        {firstfourphotos}
        {/* {photos} */}
        <div className="show-page-main-aside">
          <main>
            <h1>{this.props.business.name}</h1>
            <div>
              <span className={showPageAvgReview}>☆</span>
              <span className={showPageAvgReview}>☆</span>
              <span className={showPageAvgReview}>☆</span>
              <span className={showPageAvgReview}>☆</span>
              <span className={showPageAvgReview}>☆</span>
            </div>
            <Link className="business-show-page-write-review-button" to={`/businesses/${this.props.match.params.businessId}/newcomment`}><span>☆</span><span>Write a Review</span></Link>
            <p>
              <span>{this.props.business.price_rating}</span>
              <span>.</span>
              {category_show}
            </p>


            <section></section>
            <h4>Location & Hours</h4>
            <div className="show-page-map-and-address">
              <div className="show-page-map-box">
                <p className="show-page-map-image">for google map</p>
                <div className="show-page-address">
                  <p>{streetAddress}</p>
                  <p>{cityAndState}</p>
                </div>
              </div>
              
              <ul>
                  <li><span>Mon </span>{`${this.props.business.weekday_open_hour} - ${this.props.business.weekday_close_hour}`}</li>
                  <li><span>Tue </span>{`${this.props.business.weekday_open_hour} - ${this.props.business.weekday_close_hour}`}</li>
                  <li><span>Wed </span>{`${this.props.business.weekday_open_hour} - ${this.props.business.weekday_close_hour}`}</li>
                  <li><span>Thur </span>{`${this.props.business.weekday_open_hour} - ${this.props.business.weekday_close_hour}`}</li>
                  <li><span>Fri </span>{`${this.props.business.weekday_open_hour} - ${this.props.business.weekday_close_hour}`}</li>
                  <li><span>Sat </span>{weekendtime}</li>
                  <li><span>Sun </span>{weekendtime}</li>

              </ul>
            </div>


            <section></section>
            <h4>About the Business</h4>
            <p>{this.props.business.description}</p>


            <section></section>
            <div>
              <h4>Check out the reviews</h4>
              {comments}
            </div>
          </main>

          <aside>
            {firstphoto}
            <ul className="show-page-sidebar-info-box">
              <div>
              <img className="" src={window.eyeIcon} />
              <li>{this.props.business.website}</li>
              </div>
          
              <div>
              <img className="" src={window.phoneIcon} />
              <li>{this.props.business.phone}</li>
              </div>
            
              <div>
              <img className="" src={window.directionIcon} />
              <li>{this.props.business.address}</li>
              </div>
            </ul>
          </aside>


        
      </div>


      <Footer />
    </>
    );
  }
}

export default BusinessShow;