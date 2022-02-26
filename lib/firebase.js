import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCbpQ8o-3N9BPecCChG7CzHu4nokjhwjbs',
	authDomain: 'recipe-next.firebaseapp.com',
	projectId: 'recipe-next',
	storageBucket: 'recipe-next.appspot.com',
	messagingSenderId: '886447704707',
	appId: '1:886447704707:web:23c0173ad1bbe82be369b6'
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
export const firestore = firebase.firestore();
/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
	const data = doc.data();
	return {
		...data
		// Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
	};
}
