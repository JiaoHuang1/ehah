import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { find: "", loc: "" }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={() => this.props.history.push(`/search/businesses?find=${this.state.find}&loc=${this.state.loc}`)} className="search-bar-search-form">
                <span className="search-bar-label-input">
                    <label>Find</label>
                    <input value={this.state.find} onChange={this.handleChange('find')} type="text" placeholder="Restaurants"/>
                </span>
                <span className="search-bar-label-input">
                    <label>Near</label>
                    <input value={this.state.loc} onChange={this.handleChange('loc')} type="text" placeholder="New York, NY"/>
                </span>
                <button><img className="search-bar-search-img" className="" src={window.searchIcon} /></button>
            </form>
        )
    }
 
}

export default withRouter(SearchForm);