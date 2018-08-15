import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyChNFw34jTt0qQ3cJmi_bNBQudgXNUVRtM",
  authDomain: "repocompare-ab68d.firebaseapp.com",
  projectId: "repocompare-ab68d"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GithubAuthProvider();
export const auth = firebase.auth();
export default firebase;
