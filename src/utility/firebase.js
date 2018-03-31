import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBwPybczrhNw1Sf5mA1yEe6CEYdZ3OClKI',
  authDomain: 'geoideas-35cad.firebaseapp.com',
  databaseURL: 'https://geoideas-35cad.firebaseio.com',
  projectId: 'geoideas-35cad',
  storageBucket: 'geoideas-35cad.appspot.com',
  messagingSenderId: '344888956881',
};

const init = firebase.initializeApp(config);

export default init;
