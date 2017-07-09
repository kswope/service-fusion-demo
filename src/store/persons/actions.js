import firebase from "firebase"

export default {

  startSync( { commit, state } ) {

    firebase.database()
      .ref( "persons" )
      .on( "value", snapshot => {
        commit( "setAll", snapshot.val() )
      } )

    // single shot "once" promise version
    // firebase.database().ref( "persons" ).once( "value" )
    //   .then( snapshot => {
    //     commit( "setAll", snapshot.val() )
    //   } )
    //   .catch( error => {
    //     console.error( "Error: " + error.code )
    //   } )

  }

}

