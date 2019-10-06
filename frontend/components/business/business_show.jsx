import React from 'react';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    //   debugger
    this.props.fetchSingleBusiness(this.props.match.params.businessId);
  }

  render() {
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
      cityAndState = this.props.business.address.split(',').slice(1).join(" ");
    }

    let weekendtime =`${this.props.business.weekend_open_hour} - ${this.props.business.weekend_close_hour}`
    if (this.props.business.weekend_open_hour === "closed") {
      weekendtime = this.props.business.weekend_open_hour;
    }

    return (
      <>
        {firstfourphotos}
        {/* {photos} */}
        <div className="show-page-main-aside">
          <main>
            <h1>{this.props.business.name}</h1>
            <p>{this.props.business.price_rating}</p>
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
    </>
    );
  }
}

export default BusinessShow;