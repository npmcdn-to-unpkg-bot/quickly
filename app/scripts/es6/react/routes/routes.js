import {hashHistory, Router, Route, IndexRoute, RouteHandler, Link,IndexLink, browserHistory} from 'react-router';
import {TransitionMotion, spring, presets} from 'react-motion';

var PageHeader = require('../components/pageHeader.js');
var ScreenShop = require('../screens/screenShop.js');
var ScreenProfile = require('../screens/screenProfile.js');
var ScreenCompanyList = require('../screens/screenCompanyList.js');
var ScreenMain = require('../screens/screenMain.js');
var BottomPanel = require('../components/bottomPanel.js');
var NotFoundPage = require('../components/notFoundPage.js');

var routesMap = require('./map.js');

var Routes = React.createClass({
  getInitialState: function(){
    return {
        transitionDirection:1
    }
  },
  willEnter: function(){
    const toLeft = this.state.transitionDirection < 0
    return {
      left: toLeft ? 100 : 0,
      opacity: 0,
      scale: 0.95
    }
  },
  willLeave: function(){
    const toLeft = this.state.transitionDirection < 0
    return {
      left: toLeft ? spring(0, presets.stiff) : spring(100, presets.stiff),
      opacity: spring(0),
      scale: spring(0.95)
    }
  },
  refreshHome: function(e){
    console.log('Refreshing Home! ', e);
  },
  render: function() {
    var routes = routesMap.routes;

  console.log('ROUTES: ', routes);
    return (

      <div>
          <PageHeader />
          <Router history={browserHistory}>
            <Route path={routes.main.path} name={routes.main.name} handle={this.refreshHome} component={ScreenMain} >
                <Route name={routes.main.name} path={routes.home.path} component={ScreenMain} />
            </Route>
            <Route name={routes.list.name} path={routes.list.path} handle={this.refreshHome} component={ScreenCompanyList} />
            <Route name={routes.profile.name} path={routes.profile.path} handle={this.refreshHome} component={ScreenProfile} />
            <Route name={routes.shop.name} path={routes.shop.path} handle={this.refreshHome} component={ScreenShop} />
          </Router>
      </div>
      );
  }
});

module.exports = Routes;
