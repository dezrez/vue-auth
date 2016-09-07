import Vue from 'vue'
import App from './containers/App'
import Footer from './containers/Footer'
import Header from './containers/Header'
import Index from './components/Index'
import Home from './components/Home'
import Router from 'vue-router'
//import * as AuthService from './services/authService';

Vue.use(Router);

var router = new Router({
  hashbang: false,
  history: true
});

Vue.component('app-footer', Footer);
Vue.component('app-header', Header);

router.map({
  '/': {
    component: Index
  },
  '/home': {
    component: Home
  }
});

// Authentication logic
router.beforeEach(function (transition) {
  /*if (AuthService.checkIsAuthenticated() || transition.to.query.code) {
    transition.next();
    if (transition.to.query.code) {
      AuthService.getToken(transition.to.query.code, (credentials) => {
        window.location = '/';
      });
    }
  } else {
    window.location = AuthService.BuildAuthUrl();
  }*/
})

router.redirect({
  '*': '/'
});

router.start(App, '#app');
