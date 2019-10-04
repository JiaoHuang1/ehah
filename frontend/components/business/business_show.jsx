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
    // let firstphoto;
    if (this.props.business.photoUrls !== undefined) {
        photos = this.props.business.photoUrls.map((photo, idx) => <img key={idx} src={photo}/>);
        // firstphoto = <img src={this.props.business.photoUrls[0]}/>
    } 
    return (
      <div>
         {/* {firstphoto} */}
         {photos}
        <main>
            <h1>{this.props.business.name}</h1>
            <h3>{this.props.business.price_rating}</h3>
            <h2>Location & Hours</h2>
            <h3>{this.props.business.address}</h3>
            <ul>
                <li><span>Mon </span><span>{`${this.props.business.weekday_open_hour} - ${this.props.business.weekday_close_hour}`}</span></li>
                <li><span>Tue </span><span>{`${this.props.business.weekday_open_hour} - ${this.props.business.weekday_close_hour}`}</span></li>
                <li><span>Wed </span><span>{`${this.props.business.weekday_open_hour} - ${this.props.business.weekday_close_hour}`}</span></li>
                <li><span>Thur </span><span>{`${this.props.business.weekday_open_hour} - ${this.props.business.weekday_close_hour}`}</span></li>
                <li><span>Fri </span><span>{`${this.props.business.weekday_open_hour} - ${this.props.business.weekday_close_hour}`}</span></li>
                <li><span>Sat </span><span>{`${this.props.business.weekend_open_hour} - ${this.props.business.weekend_close_hour}`}</span></li>
                <li><span>Sun </span><span>{`${this.props.business.weekend_open_hour} - ${this.props.business.weekend_close_hour}`}</span></li>
            </ul>
            <h2>About the Business</h2>
            <h3>{this.props.business.description}</h3>
        </main>

        <aside>
            <ul>
                <li>{this.props.business.website}</li>
                <li>{this.props.business.phone}</li>
                <li>{this.props.business.address}</li>
            </ul>
        </aside>
        
      </div>
    );
  }
}

export default BusinessShow;