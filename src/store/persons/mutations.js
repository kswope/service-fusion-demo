
function setAll( state, val ) {

  // replace data with passed in value, making sure its reactive, note that "state.all"
  // must already exist so it can reatively respond to being replaced
  state.all = { ...val }

}

export default { setAll }

