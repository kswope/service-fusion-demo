
// import Vue from "vue"

function setAll( state, val ) {

  // replace data with passed in value, making sure its reactive, note that all
  // must already exist so it can reatively respond
  state.all = { ...val }

}

export default { setAll }

