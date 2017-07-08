import Vue from 'vue'

// can't run unit tests without this
// PhantomJS 2.1.1 (Linux 0.0.0) ERROR
//   Error: [vuex] vuex requires a Promise polyfill in this browser.
//   at webpack:///~/vuex/dist/vuex.esm.js:96:0 <- index.js:13554
import "es6-promise/auto"

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)
