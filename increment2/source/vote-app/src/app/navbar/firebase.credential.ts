import { AngularFireModule, AuthMethods, AuthProviders } from "angularfire2";

export const afConfig = {
  apiKey: "AIzaSyD2blKmgSj77debxCIrOfpYdaQ7amGRFxw",
  authDomain: "vote-app-1dd49.firebaseapp.com", 
  databaseURL: "https://vote-app-1dd49.firebaseio.com", 
  storageBucket: "vote-app-1dd49.appspot.com",
  messagingSenderId: "546356016369" 
};

export const afAuthConfig = {
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
};