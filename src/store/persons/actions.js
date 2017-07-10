import firebase from "firebase"

export default {

  // This commits persons data to the store.  using setAll.
  // Important note: below you'll see .on(), this starts a firebase listener
  // that reacts to data changes up on server.  If we had used .once instead it
  // would only fire once.  Note also that .on() doesn't return a promise, its
  // strictly callback, however once() returns a promise.
  // If we had big data sets using .on() would probably be a disaster and we'd
  // prefer to watch for smaller changes using onChildAdded, onChildRemoved,
  // etc
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

