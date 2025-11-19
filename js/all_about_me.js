document.addEventListener('DOMContentLoaded', () => {

    var typed = new Typed('#typed-h1', {
        stringsElement: '#typed-h1-strings',
        typeSpeed: 50,
        showCursor: false,
        onComplete: () => {
            startChat();
        },
    });

    const chatBox = document.getElementById('chat-messages');
    let userName = null;
    let isUserTurn = false;

    function initializeScroller(chatBox) {
        let scrollTimer;
        chatBox.addEventListener('scroll', () => {
            chatBox.classList.add('scrolling');

            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                chatBox.classList.remove('scrolling');
            }, 800);
        });
    }

    initializeScroller(chatBox);

    function scrollToBottom(chatBox) {
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    const msgs = [
        'hola!',
        'i need ur name b4 i give u a nickname u might regret ;)',
        `alright polo :)`,
        "let’s play a quick favs quiz",
        "i’ll give options, u guess my fav <3",
        "ready? "
    ];
    let msgCnt = 0;

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    async function startChat() {
        msgCnt = 0;
        isUserTurn = false;

        await delay(500);
        addToChat(msgs[msgCnt++], false);

        await delay(1500);
        addToChat(msgs[msgCnt++], false);

        userName = await getUserMsg(30);
        if (userName.length == 0) {
            userName = getRandom(funNames);
        }
        else {
            addToChat(userName, true);
        }

        await delay(200);
        msgs[2] = `alright ${userName} :)`;
        while (msgCnt < msgs.length) {
            await delay(1200);
            addToChat(msgs[msgCnt++], false);
        }

        let reply = await getUserMsg(10);

        if (reply.length > 0) {
            addToChat(reply, true);

            await delay(500);
            if (reply[0] != 'y') {
                addToChat(`ok ${getRandom(funNames)}`, false);
            }
            else {
                addToChat("lessgo!", false);
            }
        }
        else {
            await delay(1000);
            await replyToEmpty();
        }

        startQuiz();
    }

    const emptyReplies = [
        "is my text invisible?",
        "typing back is free btw",
        "replying must be harder than waking up for an 8am lecture"
    ]

    async function replyToEmpty() {
        addToChat(`ok ${getRandom(funNames)}`, false);
        await delay(1000);
        addToChat(getRandom(emptyReplies), false);
        await delay(1000);
    }

    const questions = [
        ["guilty pleasures", "insta-scrolling / binge-watching / fast food / desert after midnight"],
        ["cartoons", "shinchan / doraemon / ben 10 / tom & jerry"],
        ["food", "aloo paratha / pizza / pani puri / burger"],
        ["series", "sherlock / pantheon / aot / dexter"],
        ["celeb-crush", "shraddha / disha / emma watson / hrithik"],
        ["movies", "3 idiots / inception / grave of the fireflies / bhool bhulaiyaa"],
        ["seasons", "summer / winter / spring / rainy"],
        ["games", "shadow fight 2 / fortnite / clash royale / brawl stars"]
    ]

    const answers = {
        "guilty pleasures": ["fast food", "food", "ff", "f"],
        "cartoons": ["shinchan", "shin chan", "shin-chan", "s", "sc"],
        "food": ["pizza", "piza"],
        "series": ["dexter", "d"],
        "celeb-crush": ["shraddha", "shraddha kapoor", "shraddha kapur", "kapoor", "sk", "s"],
        "movies": ["grave of the fireflies", "grave", "fireflies", "firefly", "gotf", "g", "grave of fireflies", "grave of the firefly", "grave of firefly"],
        "seasons": ["summer", "smr"],
        "games": ["fortnite", "f"]
    }

    const prefixes = [
        "it's",
        "obviously it's",
        "that'd be"
    ]

    const positives = [
        "ok sherlock O-",
        "lucky guess",
        "bingo!",
        "correct"
    ]

    const negatives = [
        "lol, nope",
        "nice try",
        "not even close",
        "bruh, how did u even pick that"
    ]

    const related = {
        "guilty pleasures": "i love watching + eating ff but i hate that i love it :'(",
        "cartoons": "mera naam hi shinchan h, m shararat s bhara...",
        "food": "1 large cheese-burst margherita plz :p'",
        "series": "if crime / detective is ur vibe, 101% rec",
        "celeb-crush": "<3",
        "movies": "i bet u'll cry watching this :'(",
        "seasons": "long vacs, no hw, ice-creams, aam-ras... without a doubt summers r the best ^o^",
        "games": "i wish it was there when i was in school - could've played it all day long"
    }


    async function startQuiz() {
        let reply;
        let qIdx = 0;
        let correctCnt = 0;

        await delay(1500);
        do {
            question = questions[qIdx];

            addToChat(`${question[0]}: ${question[1]}`, false);

            reply = await getUserMsg(20);

            if (reply.length > 0) {
                addToChat(reply, true);

                await delay(1000);
                if (answers[question[0]].includes(reply)) {
                    correctCnt++;
                    addToChat(getRandom(positives), false);
                }
                else {
                    addToChat(getRandom(negatives), false);
                }
            }
            else {
                await delay(500);
                await replyToEmpty();
            }

            await delay(500);
            addToChat(getRandom(prefixes) + " " + answers[question[0]][0], false);
            await delay(1000);
            addToChat(related[question[0]], false);
            await delay(5000); // reading time

            qIdx++;

        } while (qIdx < questions.length);

        await replyFinalMsg(correctCnt, qIdx);
    }

    async function replyFinalMsg(correct, total) {
        const score = correct * 10.0 / total;
        let msg = ["ur score is...", `${correct} / ${total}`];
        if (score > 7.5) {
            msg = [...msg, 'u know me too well', 'kinda scary o.O', 'jk','my insta is "sumantbhoot"', "let's chat there then"];
        }
        else if (score > 3.3) {
            msg = [...msg, 'u...', 'not bad ig', 'ur gpa level score xD'];
        }
        else {
            msg = [...msg, 'hello', 'do i know u?', "cuz u clearly don't know me"];
        }

        for (let i = 0; i < msg.length; i++) {
            addToChat(msg[i], false);
            await delay(i == 0 ? 3000 : 1000);
        }
        await delay(10000);
        addToChat("© 2025 Sumant Bhoot • Built with ❤️ and clean code", false);
    }

    function addToChat(msg, isUser) {
        const span1 = document.createElement('span');
        span1.textContent = msg;
        span1.classList.add('bean');
        if (isUser) {
            span1.classList.add('ms-4', 'dark', 'align-self-end');
        }
        else {
            span1.classList.add('me-4');
        }

        chatBox.prepend(span1);
        scrollToBottom(chatBox);
    }


    const funNames = [
        "Fartknuckle",
        "Snifflesnort",
        "Wobblebutt",
        "Noodlebrain",
        "Burpyface",
        "Pickletoes",
        "Stinkywiggles",
        "Dingleberry",
        "Gigglefart",
        "Boogermeister"
    ];

    const sendBtn = document.querySelector('#chat-form button');
    const msgForm = document.querySelector('#chat-form');
    const inputMsg = document.getElementById('user-msg');

    let userLastMsg = null;
    let lastResolve = null;

    msgForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (isUserTurn) {
            userLastMsg = inputMsg.value.trim().toLowerCase();
            unsetUserTurn();

            lastResolve(userLastMsg);
        }
    });

    let userTimeout;

    function setUserTurn(sec) {
        inputMsg.disabled = false;
        inputMsg.focus();
        sendBtn.disabled = false;
        isUserTurn = true;
        userLastMsg = null;

        userTimeout = setTimeout(() => {
            unsetUserTurn();

            lastResolve('');
        }, sec * 1000);
    }

    function unsetUserTurn() {
        inputMsg.disabled = true;
        sendBtn.disabled = true;
        isUserTurn = false;

        inputMsg.value = '';
        clearTimeout(userTimeout);
    }

    function getUserMsg(sec) {
        setUserTurn(sec);

        return new Promise(resolve => {
            lastResolve = resolve;
        })
    }

    function getRandom(arr) {
        const idx = Math.floor(Math.random() * arr.length);
        return arr[idx];
    }
});
