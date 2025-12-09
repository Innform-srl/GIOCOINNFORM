// CONFIGURAZIONE FIREBASE
// Sostituisci questo blocco con quello che hai copiato dalla Console di Firebase

const firebaseConfig = {
    apiKey: "AIzaSyB56cjlVB11Ko2N3-W2P027suqLQBopXe0",
    authDomain: "kahootinn.firebaseapp.com",
    projectId: "kahootinn",
    storageBucket: "kahootinn.firebasestorage.app",
    messagingSenderId: "481945276356",
    appId: "1:481945276356:web:ad29980b5f8f0e1be39e91"
};

// Variabili globali per Firebase
// Usiamo window per garantire che siano accessibili ovunque
window.db = null;
window.auth = null;

// Inizializzazione
try {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
    window.auth = firebase.auth();
    console.log("Firebase collegato con successo!");
    // Togli questo alert se è fastidioso, ma utile per debug
    // alert("Firebase collegato!"); 
} catch (e) {
    console.error("Errore connessione Firebase:", e);
    alert("Errore GRAVE su Firebase Config: " + e.message);
}
