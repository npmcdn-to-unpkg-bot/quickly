import { browserHistory } from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import {renderTransitionContext, withTransition} from 'react-router-transitions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var CompanyListActions = require('../actions/companyListActions.js');
var CuisinesStore = require('../stores/cuisinesStore.js');
var CuisinesActions = require('../actions/cuisinesActions.js');
var TransitionGroup = React.addons.CSSTransitionGroup;

var SingleCuisine = React.createClass({
    toggleCategory: function(cuisine){
        browserHistory.push('/list/'+this.props.cuisine.cuisine_id);
    },
    render: function(){
/*        var that = this.props.cuisine;
        var itemImage = imageBaseUrl+that.cuisine_image;
        if (that.cuisine_image === undefined || that.cuisine_image === null || that.cuisine_image == '')
        { itemImage = '/images/placeholder-1.png'; }

        var styleProduct = {
            backgroundImage: 'url('+itemImage+')'
        }*/
        return(
        <div onClick={this.toggleCategory} className="cuisine-select-item col-lg-4 col-xs-6 category-item" data-id={this.props.cuisine.cuisine_id}>
            <a href="#">
                <div className="image">
                    <img src={imageBaseUrl+this.props.cuisine.cuisine_image} alt="..." />
                    <div className="overlay"></div>
                </div>
                <div className="food-type">
                    <b>{this.props.cuisine.cuisine_name}</b>
                    <div className="information">
                        <span className="total total-delivery">
                            <span>Доставка:</span>
                            <span className="sum"> {this.props.cuisine.delivery_count}</span>
                        </span>
                        <span className="total total-delivery">
                            <span>Бронь:</span>
                            <span className="sum"> {this.props.cuisine.reservations_count}</span>
                        </span>
                    </div>
                </div>
            </a>
        </div>
        )
    }
});

var CuisinesSelectList = React.createClass({
    mixins: [Reflux.connect(CuisinesStore, 'cuisinesData')],
    limit: 5,
    getInitialState: function() {
      return {
        data: [],
        cuisinesData: []
      };
    },
    componentDidMount: function() {
        CuisinesActions.fetchList();
        console.log('CuisinesSelectList did moumt');
    },
    render: function() {
        var allCuisines = this.state.cuisinesData;
        var list = allCuisines.map(function(the, key) {
            if (key < 6) return (
                <SingleCuisine cuisine={the} key={key} />
            )
        });
        return (
        <section className="the-tab tab-active main-categories types-grid">
            <div className="container">
                <div className="row" id="cuisinesList">
                    {list}
                </div>
            </div>
        </section>
        )
    }
});

module.exports = CuisinesSelectList;
