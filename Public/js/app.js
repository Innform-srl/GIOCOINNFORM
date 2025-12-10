// LOGICA DI GIOCO KAHOOTINNFORM

// --- DATI DOMANDE ---
// --- DATI DOMANDE ---
const questionsBase = [
    { q: "Cos'è l'HARDWARE?", options: ["I programmi", "Parti fisiche", "Internet", "Virus"], correct: 1 },
    { q: "Differenza Desktop vs Laptop?", options: ["Laptop no tastiera", "Desktop portatile", "Laptop ha batteria", "Desktop costa meno"], correct: 2 },
    { q: "Dove inserisci la chiavetta USB?", options: ["Porta HDMI", "Jack Cuffie", "Porta USB", "Lettore CD"], correct: 2 },
    { q: "Tasto per andare A CAPO?", options: ["Spazio", "Esc", "Invio (Enter)", "Maiusc"], correct: 2 },
    { q: "Tasto per cancellare a sinistra?", options: ["Canc", "Backspace", "Fine", "Esc"], correct: 1 },
    { q: "Quale non è un Browser?", options: ["Chrome", "Edge", "Word", "Firefox"], correct: 2 },
    { q: "Cosa significa CPU?", options: ["Central Process Unit", "Computer Personal Unit", "Central Power Unit", "Control Panel Unit"], correct: 0 },
    { q: "Il mouse serve a...", options: ["Scrivere", "Puntare e cliccare", "Sentire musica", "Stampare"], correct: 1 },
    { q: "Qual è un software?", options: ["Tastiera", "Windows 10", "Schermo", "Cavo"], correct: 1 },
    { q: "Per collegarsi a Internet serve...", options: ["La stampante", "Il modem/router", "Il microfono", "La webcam"], correct: 1 },
    { q: "Cos'è un File?", options: ["Un contenitore di dati", "Un virus", "Un cavo", "Un tasto"], correct: 0 },
    { q: "Ctrl+C serve a...", options: ["Incollare", "Tagliare", "Copiare", "Salvare"], correct: 2 },
    { q: "Ctrl+V serve a...", options: ["Incollare", "Tagliare", "Copiare", "Salvare"], correct: 0 },
    { q: "Il monitor è...", options: ["Input", "Output", "Storage", "Software"], correct: 1 },
    { q: "La RAM è...", options: ["Memoria permanente", "Memoria volatile", "Un disco fisso", "Un processore"], correct: 1 },
    { q: "Quale estensione è un'immagine?", options: [".exe", ".txt", ".jpg", ".mp3"], correct: 2 },
    { q: "Quale estensione è audio?", options: [".png", ".doc", ".mp3", ".pdf"], correct: 2 },
    { q: "Google è...", options: ["Un browser", "Un motore di ricerca", "Un social", "Un antivirus"], correct: 1 },
    { q: "Facebook è...", options: ["Un social network", "Un browser", "Un sistema operativo", "Una mail"], correct: 0 },
    { q: "La password deve essere...", options: ["12345", "Data di nascita", "Segreta e complessa", "Il tuo nome"], correct: 2 },
    { q: "Il tasto ESC serve a...", options: ["Uscire/Annullare", "Scrivere", "Salvare", "Cancellare"], correct: 0 },
    { q: "CAPS LOCK serve a...", options: ["Scrivere tutto maiuscolo", "Cancellare tutto", "Chiudere finestre", "Bloccare il PC"], correct: 0 },
    { q: "Icona cestino serve a...", options: ["Salvare file", "Eliminare file", "Creare cartelle", "Aprire internet"], correct: 1 },
    { q: "Doppio click serve a...", options: ["Selezionare", "Aprire file/cartelle", "Cancellare", "Spostare"], correct: 1 },
    { q: "Tasto destro serve a...", options: ["Aprire menu contestuale", "Confermare", "Annullare", "Scrivere"], correct: 0 },
    { q: "Cos'è il Wi-Fi?", options: ["Internet senza fili", "Un cavo blu", "Un programma", "Un gioco"], correct: 0 },
    { q: "Android è...", options: ["Un robot", "Un sistema operativo", "Un pc", "Un marchio di auto"], correct: 1 },
    { q: "YouTube serve per...", options: ["Scrivere testi", "Vedere video", "Fare calcoli", "Disegnare"], correct: 1 },
    { q: "Excel è un programma di...", options: ["Grafica", "Calcolo/Fogli", "Scrittura", "Musica"], correct: 1 },
    { q: "Word è un programma di...", options: ["Grafica", "Calcolo", "Scrittura", "Montaggio video"], correct: 2 }
];

const questionsImages = [
    { q: "Come si chiama questo componente?", image: "https://tse2.mm.bing.net/th?q=CPU+processor+computer&w=400", options: ["CPU", "RAM", "Scheda Video", "Hard Disk"], correct: 0 },
    { q: "Che cavo è questo?", image: "https://tse2.mm.bing.net/th?q=HDMI+connector+cable&w=400", options: ["USB", "HDMI", "VGA", "Ethernet"], correct: 1 },
    { q: "Cosa raffigura questa icona?", image: "https://tse2.mm.bing.net/th?q=wifi+icon+symbol&w=400", options: ["Bluetooth", "Wi-Fi", "Batteria", "Volume"], correct: 1 },
    { q: "Chi è questo personaggio?", image: "https://tse2.mm.bing.net/th?q=Bill+Gates+face&w=400", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"], correct: 1 },
    { q: "Che programma è questo?", image: "https://tse2.mm.bing.net/th?q=Microsoft+Word+Logo+Icon&w=400", options: ["Excel", "PowerPoint", "Word", "Paint"], correct: 2 },
    { q: "Cosa indica questo tasto?", image: "https://tse2.mm.bing.net/th?q=window+key+keyboard&w=400", options: ["Start/Windows", "Alt", "Ctrl", "Shift"], correct: 0 },
    { q: "Che dispositivo è?", image: "https://tse2.mm.bing.net/th?q=3d+printer+modern&w=400", options: ["Stampante Laser", "Scanner", "Stampante 3D", "Plotter"], correct: 2 },
    { q: "Che logo è questo?", image: "https://tse2.mm.bing.net/th?q=Apple+logo+black&w=400", options: ["Microsoft", "Apple", "Linux", "Android"], correct: 1 },
    { q: "Cosa vedi nell'immagine?", image: "https://tse2.mm.bing.net/th?q=computer+motherboard+pc&w=400", options: ["Scheda Madre", "Alimentatore", "Hard Disk", "Monitor"], correct: 0 },
    { q: "A cosa serve questa porta?", image: "https://tse2.mm.bing.net/th?q=usb+port+pc&w=400", options: ["Video", "Audio", "Dati/Periferiche", "Rete"], correct: 2 },
    { q: "Che browser è?", image: "https://tse2.mm.bing.net/th?q=google+chrome+logo&w=400", options: ["Firefox", "Edge", "Chrome", "Safari"], correct: 2 },
    { q: "Cosa rappresenta?", image: "https://tse2.mm.bing.net/th?q=android+mascot+robot&w=400", options: ["iOS", "Windows", "Android", "Linux"], correct: 2 },
    { q: "Che tasto è evidenziato?", image: "https://tse2.mm.bing.net/th?q=spacebar+keyboard+highlight&w=400", options: ["Invio", "Spazio", "Shift", "Tab"], correct: 1 },
    { q: "Che tipo di computer è?", image: "https://tse2.mm.bing.net/th?q=laptop+computer+open&w=400", options: ["Desktop", "Laptop", "Server", "Tablet"], correct: 1 },
    { q: "Cosa indica questa icona?", image: "https://tse2.mm.bing.net/th?q=battery+icon+status&w=400", options: ["Rete", "Batteria", "Volume", "Luminosità"], correct: 1 },
    { q: "Che social network è?", image: "https://tse2.mm.bing.net/th?q=instagram+logo+app&w=400", options: ["Facebook", "Twitter", "Instagram", "TikTok"], correct: 2 },
    { q: "Cos'è questo oggetto?", image: "https://tse2.mm.bing.net/th?q=hard+disk+drive+internal&w=400", options: ["RAM", "CPU", "Hard Disk", "Ventola"], correct: 2 },
    { q: "Che cavo vedi?", image: "https://tse2.mm.bing.net/th?q=ethernet+cable+rj45&w=400", options: ["USB", "HDMI", "Ethernet (LAN)", "Audio"], correct: 2 },
    { q: "Che applicazione è?", image: "https://tse2.mm.bing.net/th?q=whatsapp+logo+app&w=400", options: ["Telegram", "WhatsApp", "Messenger", "Skype"], correct: 1 },
    { q: "Cosa fa questo tasto?", image: "https://tse2.mm.bing.net/th?q=esc+key+keyboard&w=400", options: ["Conferma", "Annulla/Esci", "Cancellare", "Maiuscolo"], correct: 1 },
    { q: "Che sistema operativo è?", image: "https://tse2.mm.bing.net/th?q=windows+11+desktop+wallpaper&w=400", options: ["Windows XP", "Windows 11", "Mac OS", "Linux"], correct: 1 },
    { q: "Cosa vedi qui?", image: "https://tse2.mm.bing.net/th?q=webcam+on+monitor&w=400", options: ["Microfono", "Altoparlante", "Webcam", "Proiettore"], correct: 2 },
    { q: "Che icona è?", image: "https://tse2.mm.bing.net/th?q=windows+recycle+bin+icon&w=400", options: ["Documenti", "Download", "Cestino", "Impostazioni"], correct: 2 },
    { q: "Che tasto premi per incollare?", image: "https://tse2.mm.bing.net/th?q=keyboard+ctrl+v+keys&w=400", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], correct: 1 },
    { q: "Cos'è questo?", image: "https://tse2.mm.bing.net/th?q=qr+code+example&w=400", options: ["Codice a barre", "QR Code", "Logo", "Testo"], correct: 1 },
    { q: "Che sito è?", image: "https://tse2.mm.bing.net/th?q=youtube+logo+new&w=400", options: ["Netflix", "YouTube", "Twitch", "Vimeo"], correct: 1 },
    { q: "Cosa vedi?", image: "https://tse2.mm.bing.net/th?q=wifi+linksys+router&w=400", options: ["Modem/Router", "Stampante", "Console", "Decoder"], correct: 0 },
    { q: "Che memoria è?", image: "https://tse2.mm.bing.net/th?q=sd+card+memory&w=400", options: ["Floppy", "CD", "SD Card", "USB"], correct: 2 },
    { q: "Che cursore è?", image: "https://tse2.mm.bing.net/th?q=windows+loading+blue+circle&w=400", options: ["Selezione", "Caricamento/Attesa", "Testo", "Mano"], correct: 1 },
    { q: "Cosa vedi?", image: "https://tse2.mm.bing.net/th?q=audio+headphones&w=400", options: ["Microfono", "Casse", "Cuffie", "Mouse"], correct: 2 }
];

let questions = questionsBase; // Default


// VARIABILI STATO
let myRole = '';
let gamePin = '';
let myId = '';
let currentQIndex = 0;
let timerInterval;
// Variabile locale per sapere se il player ha risposto nel round corrente
let hasAnsweredThisRound = false;

// Riferimenti globali a Firebase (inizializzati in firebase-config.js)
// db e auth sono disponibili globalmente qui.

// --- FUNZIONI HOST ---

async function initHost() {
    console.log("Tento di avviare come HOST...");

    if (!window.auth) {
        alert("ERRORE: Firebase Auth non è pronto! Controlla la console.");
        return;
    }

    try {
        myRole = 'HOST';
        await window.auth.signInAnonymously();
        console.log("Login anonimo effettuato.");

        gamePin = Math.floor(100000 + Math.random() * 900000).toString();

        // Riferimento alla sessione
        const sessionRef = window.db.collection('kahoot_sessions').doc(gamePin);

        await sessionRef.set({
            created: firebase.firestore.FieldValue.serverTimestamp(),
            state: 'LOBBY',
            currentQuestion: 0,
            hostId: window.auth.currentUser.uid
        });

        // UI Change
        showScreen('lobby-screen');
        document.getElementById('lobby-pin').innerText = gamePin;
        document.getElementById('host-controls').classList.remove('hidden');

        // Ascolta giocatori
        sessionRef.collection('players').onSnapshot(snapshot => {
            const list = document.getElementById('player-list');
            list.innerHTML = '';
            snapshot.forEach(doc => {
                const p = doc.data();
                const badge = document.createElement('div');
                badge.className = 'btn btn-black';
                badge.innerText = p.nickname;
                list.appendChild(badge);
            });
        });

    } catch (e) {
        console.error("Errore finale in initHost:", e);
        alert("Errore durante la creazione della partita:\n" + e.message);
    }
}

let globalTimeSettings = 20;
let answerListener = null;

async function startGame() {
    const timeInput = document.getElementById('game-timer-input').value;
    globalTimeSettings = parseInt(timeInput) || 20;

    const sessionRef = window.db.collection('kahoot_sessions').doc(gamePin);

    // Seleziona il set di domande
    const selectedSet = document.getElementById('question-set-select').value;
    if (selectedSet === 'images') {
        questions = questionsImages;
    } else {
        questions = questionsBase;
    }

    await sessionRef.update({
        state: 'GAME',
        currentQuestionIndex: 0,
        questionStartTime: firebase.firestore.FieldValue.serverTimestamp(),
        timerSeconds: globalTimeSettings,
        questionSet: selectedSet
    });
    loadHostQuestion(0);
}

async function nextQuestion() {
    currentQIndex++;
    if (currentQIndex >= questions.length) {
        showFinalLeaderboard();
        return;
    }

    const sessionRef = window.db.collection('kahoot_sessions').doc(gamePin);
    await sessionRef.update({
        state: 'QUESTION',
        currentQuestion: currentQIndex,
        startTime: Date.now()
    });
    loadHostQuestion(currentQIndex);
}

function loadHostQuestion(idx) {
    showScreen('host-game-screen');
    document.getElementById('h-stats-view').classList.add('hidden');
    document.getElementById('h-answers-view').classList.remove('hidden');

    // Assicuriamoci che la domanda sia visibile all'inizio
    document.getElementById('h-question-text').classList.remove('hidden');

    const q = questions[idx];
    document.getElementById('h-question-text').innerText = q.q;

    // Gestione Immagine
    const imgEl = document.getElementById('h-question-image');
    if (q.image) {
        imgEl.src = q.image;
        imgEl.classList.remove('hidden');
        imgEl.style.display = 'block';
    } else {
        imgEl.classList.add('hidden');
        imgEl.style.display = 'none';
        imgEl.src = "";
    }

    document.getElementById('h-qnum').innerText = idx + 1;
    for (let i = 0; i < 4; i++) document.getElementById('opt-' + i).innerText = q.options[i];

    let timeLeft = globalTimeSettings;
    document.getElementById('h-timer').innerText = "Tempo / Temps: " + timeLeft;

    // Reset Listeners
    if (answerListener) answerListener(); // Stacca il listener precedente se esiste

    // AUTO-ADVANCE MONITORING
    // Ascoltiamo quanti giocatori hanno risposto
    const playersRef = window.db.collection('kahoot_sessions').doc(gamePin).collection('players');

    // Contiamo prima quanti giocatori ci sono
    playersRef.get().then(snap => {
        const totalPlayers = snap.size;
        if (totalPlayers === 0) return;

        answerListener = playersRef.onSnapshot(snap => {
            let answeredCount = 0;
            snap.forEach(doc => {
                const p = doc.data();
                if (p.currentAnswer !== undefined && p.currentAnswer !== -1) {
                    answeredCount++;
                }
            });

            // Se tutti hanno risposto, ferma timer e mostra stats
            if (answeredCount >= totalPlayers && totalPlayers > 0) {
                console.log("Tutti hanno risposto! Stop timer.");
                clearInterval(timerInterval);
                if (answerListener) answerListener(); // Stop listening
                showStats(idx);
            }
        });
    });

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('h-timer').innerText = "Tempo / Temps: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (answerListener) answerListener();
            showStats(idx);
        }
    }, 1000);
}

async function showStats(qIdx) {
    // Reset answers logic (deferred to nextQuestion)

    const sessionRef = window.db.collection('kahoot_sessions').doc(gamePin);
    await sessionRef.update({ state: 'RESULTS' });

    const snapshot = await sessionRef.collection('players').get();
    const counts = [0, 0, 0, 0];
    const playersData = [];

    // Batch for clearing answers for next round
    const batch = window.db.batch();

    snapshot.forEach(doc => {
        const p = doc.data();
        playersData.push(p);

        if (p.currentAnswer !== undefined && p.currentAnswer !== -1) {
            counts[p.currentAnswer]++;
        }
        // Prepare clear for next round
        batch.update(doc.ref, { currentAnswer: -1 });
    });

    // Commit clear
    await batch.commit();

    document.getElementById('h-answers-view').classList.add('hidden');
    document.getElementById('h-stats-view').classList.remove('hidden');
    // MODIFICATO: Non nascondo più la domanda sopra, ma la mostro anche dentro stats
    // document.getElementById('h-question-text').classList.add('hidden');

    // 1. RENDER CHART
    const max = Math.max(...counts) || 1;
    for (let i = 0; i < 4; i++) {
        document.getElementById('count-' + i).innerText = counts[i];
        document.getElementById('bar-' + i).style.height = (counts[i] / max * 100) + '%';
        document.getElementById('bar-' + i).style.opacity = (i !== questions[qIdx].correct) ? '0.3' : '1';
    }

    // MOSTRO LA DOMANDA nel riepilogo
    document.getElementById('stats-question-text').innerText = questions[qIdx].q;

    document.getElementById('correct-answer-text').innerText = "Risposta corretta / Réponse correcte: " + questions[qIdx].options[questions[qIdx].correct];

    // 2. RENDER MINI LEADERBOARD (Sorted in JS)
    playersData.sort((a, b) => (b.score || 0) - (a.score || 0));

    const listDiv = document.getElementById('int-list');
    if (listDiv) {
        listDiv.innerHTML = '';
        playersData.slice(0, 5).forEach((p, index) => {
            const row = document.createElement('div');
            row.style.padding = "5px";
            row.style.borderBottom = "1px solid #ccc";
            row.style.display = "flex";
            row.style.justifyContent = "space-between";
            row.innerHTML = `<strong>#${index + 1} ${p.nickname}</strong> <span>${p.score}</span>`;
            listDiv.appendChild(row);
        });
    }
}


async function showFinalLeaderboard() {
    const sessionRef = window.db.collection('kahoot_sessions').doc(gamePin);
    await sessionRef.update({ state: 'FINISH' });

    showScreen('final-screen');
    const snapshot = await sessionRef.collection('players').orderBy('score', 'desc').limit(10).get();

    const podiumDiv = document.getElementById('podium');
    const listDiv = document.getElementById('full-ranking');
    podiumDiv.innerHTML = '';
    listDiv.innerHTML = '';

    const allPlayers = [];
    snapshot.forEach(doc => {
        allPlayers.push(doc.data());
    });

    // Create podium for top 3
    if (allPlayers.length >= 1) {
        // 2nd Place (Left)
        if (allPlayers[1]) {
            const el2 = createPodiumItem(2, allPlayers[1].nickname, allPlayers[1].score, 180);
            podiumDiv.appendChild(el2);
        }

        // 1st Place (Center - Tallest)
        const el1 = createPodiumItem(1, allPlayers[0].nickname, allPlayers[0].score, 250);
        podiumDiv.appendChild(el1);

        // 3rd Place (Right)
        if (allPlayers[2]) {
            const el3 = createPodiumItem(3, allPlayers[2].nickname, allPlayers[2].score, 140);
            podiumDiv.appendChild(el3);
        }
    }

    // Remaining players (4th onwards)
    if (allPlayers.length > 3) {
        for (let i = 3; i < allPlayers.length; i++) {
            const row = document.createElement('div');
            row.style.padding = "8px";
            row.style.borderBottom = "1px solid rgba(255,255,255,0.3)";
            row.style.textAlign = "left";
            row.innerHTML = `#${i + 1} ${allPlayers[i].nickname} - <strong>${allPlayers[i].score}</strong> pt`;
            listDiv.appendChild(row);
        }
    }
}

function createPodiumItem(rank, nickname, score, height) {
    const wrapper = document.createElement('div');
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";
    wrapper.style.animation = "podiumPop 0.6s ease-out";
    wrapper.style.animationDelay = (rank === 1 ? "0.3s" : rank === 2 ? "0.1s" : "0.5s");
    wrapper.style.opacity = "0";
    wrapper.style.animationFillMode = "forwards";

    const colors = { 1: '#FFD700', 2: '#C0C0C0', 3: '#CD7F32' }; // Gold, Silver, Bronze
    const medals = { 1: '🥇', 2: '🥈', 3: '🥉' };

    const bar = document.createElement('div');
    bar.style.width = "100px";
    bar.style.height = height + "px";
    bar.style.background = `linear-gradient(135deg, ${colors[rank]}, ${colors[rank]}dd)`;
    bar.style.borderRadius = "12px 12px 0 0";
    bar.style.display = "flex";
    bar.style.flexDirection = "column";
    bar.style.alignItems = "center";
    bar.style.justifyContent = "flex-start";
    bar.style.paddingTop = "15px";
    bar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
    bar.style.fontWeight = "bold";
    bar.style.color = "white";
    bar.style.fontSize = "2.5rem";
    bar.innerHTML = medals[rank];

    const nameLabel = document.createElement('div');
    nameLabel.style.marginTop = "15px";
    nameLabel.style.color = "white";
    nameLabel.style.fontSize = "1.3rem";
    nameLabel.style.fontWeight = "bold";
    nameLabel.style.textShadow = "0 2px 4px rgba(0,0,0,0.5)";
    nameLabel.innerText = nickname;

    const scoreLabel = document.createElement('div');
    scoreLabel.style.color = "white";
    scoreLabel.style.fontSize = "1rem";
    scoreLabel.style.opacity = "0.9";
    scoreLabel.innerText = score + " pt";

    wrapper.appendChild(bar);
    wrapper.appendChild(nameLabel);
    wrapper.appendChild(scoreLabel);

    return wrapper;
}

// --- FUNZIONI PLAYER ---

function showPlayerLogin() {
    showScreen('player-login');
}

async function initPlayer() {
    const pin = document.getElementById('p-pin').value;
    const nick = document.getElementById('p-name').value;
    if (pin.length < 6 || nick.length < 1) return alert("Inserisci dati validi / S'il vous plaît entrer des données valides");

    await window.auth.signInAnonymously();
    myRole = 'PLAYER';
    gamePin = pin;
    myId = window.auth.currentUser.uid;

    const sessionRef = window.db.collection('kahoot_sessions').doc(gamePin);
    const doc = await sessionRef.get();
    if (!doc.exists) return alert("Partita non trovata! / Partie introuvable!");

    await sessionRef.collection('players').doc(myId).set({
        nickname: nick,
        score: 0,
        currentAnswer: -1
    });

    // Reindirizza alla Lobby Privata dello studente
    showScreen('player-lobby-screen');
    // document.getElementById('player-controls').classList.remove('hidden'); // Non serve più
    document.getElementById('p-nick').innerText = nick;
    // Mostriamo il nick anche nella lobby di attesa
    const lobbyNick = document.getElementById('lobby-p-nick');
    if (lobbyNick) lobbyNick.innerText = nick;

    sessionRef.onSnapshot(docSnap => {
        const data = docSnap.data();

        // Sincronizza il set di domande se presente
        if (data.questionSet) {
            if (data.questionSet === 'images') {
                questions = questionsImages;
            } else {
                questions = questionsBase;
            }
        }

        handleGameStateChange(data);
    });
}

function handleGameStateChange(data) {
    if (!data) return;

    if (data.state === 'QUESTION' || data.state === 'GAME') {
        // RESET per nuova domanda
        hasAnsweredThisRound = false;

        showScreen('player-game-screen');
        document.getElementById('p-waiting').classList.add('hidden');
        document.getElementById('p-feedback').classList.add('hidden');
        document.getElementById('p-controller').classList.remove('hidden');
        document.getElementById('p-msg').innerText = "Rispondi ora! / Répondez maintenant!";

        const btns = document.querySelectorAll('.control-btn');
        btns.forEach(b => { b.disabled = false; b.style.opacity = 1; });

    } else if (data.state === 'RESULTS') {
        // Se siamo nei risultati e NON hai risposto... TEMPO SCADUTO
        if (!hasAnsweredThisRound) {
            document.getElementById('p-controller').classList.add('hidden');
            document.getElementById('p-feedback').classList.remove('hidden');
            const fbTitle = document.getElementById('fb-title');
            const fbPts = document.getElementById('fb-points');

            fbTitle.innerText = "TEMPO SCADUTO!";
            fbTitle.style.color = "orange";
            fbPts.innerText = "0 Punti";
        }
    } else if (data.state === 'FINISH') {
        // Mostro al player la sua posizione finale
        const sessionRef = window.db.collection('kahoot_sessions').doc(gamePin);
        sessionRef.collection('players').orderBy('score', 'desc').get().then(snapshot => {
            let myRank = null;
            let myScore = 0;
            let totalPlayers = 0;

            snapshot.forEach((doc, index) => {
                totalPlayers++;
                if (doc.id === myId) {
                    myRank = index + 1;
                    myScore = doc.data().score || 0;
                }
            });

            // Fallback se non troviamo il player
            if (myRank === null || myRank === 0) {
                myRank = totalPlayers || 1;
            }

            document.getElementById('p-controller').classList.add('hidden');
            document.getElementById('p-feedback').classList.remove('hidden');
            const fbTitle = document.getElementById('fb-title');
            const fbPts = document.getElementById('fb-points');

            fbTitle.innerText = "FINE GIOCO!";
            fbTitle.style.color = "green";
            fbPts.innerHTML = `Sei arrivato <strong>#${myRank}</strong><br>${myScore} punti totali`;
            fbPts.style.fontSize = "1.5rem";
        }).catch(err => {
            console.error("Errore nel recuperare la classifica:", err);
            // Mostra comunque un messaggio
            document.getElementById('p-controller').classList.add('hidden');
            document.getElementById('p-feedback').classList.remove('hidden');
            document.getElementById('fb-title').innerText = "FINE GIOCO!";
            document.getElementById('fb-points').innerText = "Grazie per aver giocato!";
        });
    }
}

async function submitAnswer(ansIdx) {
    if (hasAnsweredThisRound) return; // Doppia sicurezza
    hasAnsweredThisRound = true;

    const btns = document.querySelectorAll('.control-btn');
    btns.forEach(b => { b.disabled = true; b.style.opacity = 0.3; });

    const sessionRef = window.db.collection('kahoot_sessions').doc(gamePin);
    const sessSnap = await sessionRef.get();
    const qIdx = sessSnap.data().currentQuestion;
    const correct = questions[qIdx].correct;
    const isCorrect = (ansIdx === correct);

    const myRef = sessionRef.collection('players').doc(myId);

    await window.db.runTransaction(async (t) => {
        const doc = await t.get(myRef);
        const newScore = (doc.data().score || 0) + (isCorrect ? 1000 : 0);
        t.update(myRef, { currentAnswer: ansIdx, score: newScore });
        document.getElementById('p-score').innerText = "Punti: " + newScore;
    });

    document.getElementById('p-controller').classList.add('hidden');
    document.getElementById('p-feedback').classList.remove('hidden');

    const fbTitle = document.getElementById('fb-title');
    const fbPts = document.getElementById('fb-points');

    if (isCorrect) {
        fbTitle.innerText = "Corretto!";
        fbTitle.style.color = "green";
        fbPts.innerText = "+1000";
    } else {
        fbTitle.innerText = "Sbagliato!";
        fbTitle.style.color = "red";
        fbPts.innerText = "Coraggio!";
    }
}

// UTILITY
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}
