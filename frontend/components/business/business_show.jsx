import React from 'react';
import { Link } from 'react-router-dom';
import NavBarSearchContainer from '../nav_bar/nav_bar_search_container';
import CategoryNavBar from '../nav_bar/category_nav_bar';
import CommentIndexItem from '../comment/comment_index_item';
import Footer from '../contact_footer/footer';



class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleBusiness(this.props.match.params.businessId).then(() => this.initMap()); 
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.businessId !== prevProps.match.params.businessId) {
      this.props.fetchSingleBusiness(this.props.match.params.businessId);
    }
  }

  initMap() {

    let uluru = { lat: this.props.business.latitude, lng: this.props.business.longitude };
    let map = new google.maps.Map(
      document.getElementById('map'), { zoom: 15, center: uluru }
    );

    let marker = new google.maps.Marker({ position: uluru, map: map });
  }


  render() {
    if (!this.props.business) {
      return null;
    }
  
    let firstfourphotos;
      const firstphoto = <img className="show-page-side-image" src={this.props.business.photoUrls[0]}/>

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

    const photos = this.props.business.photoUrls.map((photo, idx) => <img className="show-page-single-image" key={idx} src={photo}/>);

    const streetAddress = this.props.business.address.split(',')[0];
    const cityAndState = this.props.business.address.split(',').slice(1).join(",");

    let weekendtime =`${this.props.business.weekend_open_hour} - ${this.props.business.weekend_close_hour}`
    if (this.props.business.weekend_open_hour === "closed") {
      weekendtime = this.props.business.weekend_open_hour;
    }


    const category_show = this.props.categories.map(category => {
      return (
        <Link className="show-page-category-link" key={category.id} to={`/search/categories?category=${category.category_name}`}>
            {category.category_name}
        </Link>
      )
    })
   
    let sum_rating = 0;
    let showPageAvgReview = 0;
    let users = this.props.users;
    let currentUserId = this.props.currentUserId;
    let deleteComment = this.props.deleteComment;
  
    const sortedComments = this.props.comments.sort((a, b) => b.updated_at > a.updated_at ? 1 : -1)
   
    const comments_show = sortedComments.map(comment => {
      sum_rating += comment.rating;
      return <CommentIndexItem key={comment.id} comment={comment} users={users} currentUserId={currentUserId} deleteComment={deleteComment}/>
    })

    if (sum_rating / this.props.business.comment_ids.length <= 1) {
      showPageAvgReview = "one-star"
    } else if (sum_rating / this.props.business.comment_ids.length <= 2) {
      showPageAvgReview = "two-star"
    } else if (sum_rating / this.props.business.comment_ids.length <= 3) {
      showPageAvgReview = "three-star"
    } else if (sum_rating / this.props.business.comment_ids.length <= 4) {
      showPageAvgReview = "four-star"
    } else if (sum_rating / this.props.business.comment_ids.length <= 5) {
      showPageAvgReview = "five-star"
    } else {
      showPageAvgReview = "no-star"
    }
  
    return (
      <>
        <NavBarSearchContainer />
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
            
              <Link className="business-show-page-write-review-button" to={`/businesses/${this.props.match.params.businessId}/newcomment`}><span>☆</span><span>Write a Review</span></Link>
            </div>
            <p id="show-page-category-show">
              <span>{this.props.business.price_rating}</span>
              <span>.</span>
              {category_show}
            </p>


            <section></section>
            <h4>Location & Hours</h4>
      
            <div className="show-page-map-and-address">
              <div className="show-page-map-box">
 
                <div id="map"></div>
               
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
              {comments_show}
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