import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);

    //
    this.state = { show: false };
    //
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  //
  showModal() {
    this.setState({ show: true });

  };

  hideModal() {
    this.setState({ show: false});
  };
  //

  handleRedirect() {
      // this.props.fetchSingleBusiness().then(() => this.props.history.push(`/businesses/${this.props.business.id}`));
      this.props.history.push(`/businesses/${this.props.business.id}`);
  }


  render() {

    let firstphoto;
    firstphoto = <img onClick={this.handleRedirect} className='business-index-page-item-img' src={this.props.business.photoUrls[0]}/>
    // firstphoto = <Link to={`/businesses/${this.props.business.id}`}><img className='business-index-page-item-img' src={this.props.business.photoUrls[0]}/></Link>

    let streetAddress;
    let cityAndState;
    if (this.props.business.address !== undefined) {
      streetAddress = this.props.business.address.split(',')[0];
      cityAndState = this.props.business.address.split(',')[1];
    }


    let category_show;
    let categories = this.props.categories;
    // if (this.props.business.category_name !== undefined) {
      category_show = this.props.business.category_ids.map(category_id => {
        return (
          <Link className="business-index-page-category" key={category_id} to={`/search/categories?category=${categories[category_id].category_name}`}>
              {categories[category_id].category_name}
          </Link>
        )
      })
    // }
   
    let shortDescription;
    if (this.props.business.description.length > 250) {
      shortDescription = (
        <p className="business-index-page-description">
          <span>{this.props.business.description.slice(0, 250)}</span>
          <span>...</span>
          <span onClick={this.showModal}>read more</span>
        </p>
      )
    } else {
      shortDescription = <p className="business-index-page-description">"{this.props.business.description}"</p>
    }

    let showHideClassName = this.state.show ? "modal display-block" : "modal display-none";


    return (
      <>
        <div show={this.state.show}>
            <div className={showHideClassName }>
            <section className="modal-main">
              <h1>About the Business</h1>
              <p>{this.props.business.description}</p>
              <button onClick={this.hideModal}>close</button>
            </section>
            </div>
        </div>
      
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
                    
                {shortDescription}
            </div>

        </li>
      </>
    );
  }
}

export default withRouter(BusinessIndexItem);
