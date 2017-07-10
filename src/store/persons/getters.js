
export default {

  all( state ) {

    return state.all

  },

  total( state, others ) {

    return Object.keys( others.all ).length

  }

}
