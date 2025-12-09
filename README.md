# 🎮 Kahoot-Innform

Un clone di Kahoot per uso didattico, sviluppato per giocare in classe con domande di informatica.

## 🚀 Caratteristiche

- ✅ **30 domande** di informatica di base
- ✅ **Timer personalizzabile** per ogni domanda
- ✅ **Auto-avanzamento** quando tutti i giocatori rispondono
- ✅ **Classifica in tempo reale** dopo ogni domanda
- ✅ **Podio finale animato** con medaglie 🥇🥈🥉
- ✅ **Ottimizzato per mobile** - gli studenti giocano dal telefono
- ✅ **Feedback immediato** - corretto/sbagliato/tempo scaduto

## 📱 Come Funziona

1. **Il Docente** apre il gioco sul computer/LIM e sceglie "DOCENTE"
2. Viene generato un **PIN univoco** (es. 123456)
3. **Gli Studenti** accedono dal telefono a `localhost:8082` e scelgono "STUDENTE"
4. Inseriscono il PIN e il loro nome
5. Il docente vede tutti i giocatori connessi e clicca **"INIZIA QUIZ"**
6. Gli studenti rispondono dai loro telefoni
7. Alla fine, il podio mostra i vincitori!

## 🔧 Installazione

### 1. Clona il Repository
```bash
git clone https://github.com/TUO_USERNAME/Khaoot-Innform.git
cd Khaoot-Innform
```

### 2. Configura Firebase

1. Crea un progetto su [Firebase Console](https://console.firebase.google.com/)
2. Abilita **Firestore Database** e **Authentication (Anonymous)**
3. Copia le credenziali Firebase in `Public/firebase-config.js`:

```javascript
const firebaseConfig = {
    apiKey: "TUA_API_KEY",
    authDomain: "TUO_PROGETTO.firebaseapp.com",
    projectId: "TUO_PROGETTO_ID",
    storageBucket: "TUO_BUCKET",
    messagingSenderId: "TUO_SENDER_ID",
    appId: "TUA_APP_ID"
};
```

4. Imposta le **regole Firestore** (Settings → Database → Rules):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 3. Avvia il Server Locale

**Opzione A - Python:**
```bash
python -m http.server 8082
```

**Opzione B - Node.js:**
```bash
npx http-server -p 8082
```

### 4. Gioca!

- **Docente:** Apri `http://localhost:8082` sul computer
- **Studenti:** Aprono `http://localhost:8082` sui telefoni (stessa rete WiFi)

## 🎨 Tecnologie Usate

- HTML5 / CSS3 / Vanilla JavaScript
- Firebase (Firestore + Authentication)
- Responsive Design per mobile

## 📂 Struttura del Progetto

```
Khaoot-Innform/
├── index.html              # Interfaccia principale
├── css/
│   └── style.css          # Stili + mobile optimization
├── Public/
│   ├── firebase-config.js # Configurazione Firebase
│   └── js/
│       └── app.js         # Logica del gioco
└── README.md
```

## ⚠️ Note Importanti

### Sicurezza Firebase
- **NON condividere** le tue chiavi Firebase pubblicamente
- Le regole Firestore attuali sono permissive per test
- Per produzione, implementa regole più restrittive

### Rete Locale
- Docente e studenti devono essere sulla **stessa rete WiFi**
- Oppure usa servizi come **ngrok** per esporre il server

## 🐛 Risoluzione Problemi

**Gli studenti non riescono a connettersi?**
- Verifica che siano sulla stessa rete WiFi
- Usa l'IP del computer invece di `localhost` (es. `192.168.1.10:8082`)

**Errori Firebase?**
- Controlla le regole Firestore
- Verifica che l'autenticazione anonima sia abilitata
- Controlla la console del browser (F12)

**Il podio non appare?**
- Cancella la cache del browser (Ctrl+F5)
- Verifica la versione del file `app.js?v=4`

## 📝 Licenza

Progetto educativo open source. Sentiti libero di usarlo e modificarlo!

## 🙏 Crediti

Ispirato a [Kahoot!](https://kahoot.com) per scopi didattici.
