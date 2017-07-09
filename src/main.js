// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import firebase from "firebase"
import "milligram/dist/milligram.css"

Vue.config.productionTip = false

// init firebase
var config = {
  apiKey: "AIzaSyBpynO_MvHDrAfaMNnEemccUFjTZBNgga8",
  authDomain: "service-fusion-demo-62722.firebaseapp.com",
  databaseURL: "https://service-fusion-demo-62722.firebaseio.com",
  projectId: "service-fusion-demo-62722",
  storageBucket: "",
  messagingSenderId: "188086927425"
}
firebase.initializeApp( config )

// initialize data
store.dispatch("persons/startSync")

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
