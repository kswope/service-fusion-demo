import firebase from "firebase"

export default {

  startSync( { commit, state } ) {

    let onSuccess = snapshot => {
      commit( "setAll", snapshot.val() )
    }

    let onError = error => {
      console.error( error )
    }

    firebase.database()
      .ref( "persons" )
      .on( "value", onSuccess, onError )

  },

  add( { commit, state }, person ) {

    firebase.database()
      .ref( "persons" )
      .push( person )
      .catch( error => console.error( error ) )

  },

  remove( { commit, state }, pushId ) {

    firebase.database()
      .ref( "persons" )
      .child( pushId )
      .remove()
      .catch( error => console.error( error ) )

  },

  update( { commit, state }, [pushId, person] ) {

    firebase.database()
      .ref( "persons" )
      .child( pushId )
      .update( person )
      .catch( error => console.error( error ) )

  }

}

