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

    let categories;
    if (this.props.business.category_id !== undefined) {
      categories = this.props.business.category_id.map(id => this.props.categories[id])
    }

    let streetAddress;
    let cityAndState;
    if (this.props.business.address !== undefined) {
      streetAddress = this.props.business.address.split(',')[0];
      cityAndState = this.props.business.address.split(',')[1];
    }


    let category_show;
    if (categories !== undefined) {
      category_show = categories.map((category, idx) => 
      {return (
            <Link className="business-index-page-category" key={idx} to={`/search/categories?category=${category.category_name}`}>
              {category.category_name}
            </Link>
      )}
      )
    }
    // {/* <a href="#" className="business-index-page-category" key={category.id}>{category.category_name}</a> */}


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
