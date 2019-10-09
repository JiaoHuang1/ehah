import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect() {
      this.props.history.push(`/businesses/${this.props.business.id}`)
  }


  render() {

    let firstphoto;
    firstphoto = <img onClick={this.handleRedirect} className='business-index-page-item-img' src={this.props.business.photoUrls[0]}/>

    let streetAddress;
    let cityAndState;
    if (this.props.business.address !== undefined) {
      streetAddress = this.props.business.address.split(',')[0];
      cityAndState = this.props.business.address.split(',')[1];
    }


    let category_show;
    if (this.props.business.category_name !== undefined) {
      category_show = this.props.business.category_name.map((category_name, idx) => {
        return (
          <Link className="business-index-page-category" key={idx} to={`/search/categories?category=${category_name}`}>
              {category_name}
          </Link>
        )
      })
    }
   


    return (
        <li>
            <div>{firstphoto}</div>
            <div className="business-index-page-main-without-img">
                <div className="business-index-page-title-and-address">
                    <div className="business-index-page-business-info-section">
                        <h1>{this.props.idx}. <span onClick={this.handleRedirect}>{this.props.business.name}</span></h1>
                        <p className="second-line">
                            <span>{this.props.business.price_rating}</span>
                            <span>.</span>
                            {category_show}
                        </p>
                    </div>

                    <div className="business-index-page-phone-and-address">
                        <p>{this.props.business.phone}</p>
                        <p>{streetAddress}</p>
                        <p>{cityAndState}</p>
                    </div>
                </div>
                    
                <p className="business-index-page-description">"{this.props.business.description}"</p>
            </div>

        </li>
    );
  }
}

export default withRouter(BusinessIndexItem);
