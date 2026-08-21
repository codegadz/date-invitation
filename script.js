/* ==================================================
   EMAILJS CONFIGURATION
================================================== */

const EMAILJS_PUBLIC_KEY = "LtfshhLM45M9wmPw5";
const EMAILJS_SERVICE_ID = "service_dpvd47y";
const EMAILJS_TEMPLATE_ID = "template_hl9dd58";


/* ==================================================
   INITIALIZE EMAILJS
================================================== */

emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
});


/* ==================================================
   PAGE ELEMENTS
================================================== */

const questionPage = document.getElementById("questionPage");
const successPage = document.getElementById("successPage");
const ticketPage = document.getElementById("ticketPage");
const choicePage = document.getElementById("choicePage");
const emailPage = document.getElementById("emailPage");
const finalPage = document.getElementById("finalPage");


/* ==================================================
   BUTTONS
================================================== */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const nextBtn = document.getElementById("nextBtn");
const ticketNextBtn = document.getElementById("ticketNextBtn");

const splitBtn = document.getElementById("splitBtn");
const yourTreatBtn = document.getElementById("yourTreatBtn");
const myTreatBtn = document.getElementById("myTreatBtn");


/* ==================================================
   PAYMENT MESSAGE
================================================== */

const paymentMessage =
    document.getElementById("paymentMessage");


/* ==================================================
   EMAIL ELEMENTS
================================================== */

const emailForm =
    document.getElementById("emailForm");

const emailInput =
    document.getElementById("emailInput");

const sendEmailBtn =
    document.getElementById("sendEmailBtn");

const emailStatus =
    document.getElementById("emailStatus");


/* ==================================================
   PAGE SWITCHER
================================================== */

function showPage(page) {

    const pages = [
        questionPage,
        successPage,
        ticketPage,
        choicePage,
        emailPage,
        finalPage
    ];


    pages.forEach(function (currentPage) {

        if (currentPage) {
            currentPage.classList.add("hidden");
        }

    });


    if (page) {
        page.classList.remove("hidden");
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==================================================
   PAGE 1 — YES BUTTON
================================================== */

yesBtn.addEventListener(
    "click",
    function () {

        showPage(successPage);


        createGhosts(
            document.getElementById("ghosts"),
            12
        );

    }
);


/* ==================================================
   PAGE 1 — NO BUTTON
================================================== */

let noAttempts = 0;


function moveNoButton() {

    noAttempts++;


    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    const maxX =
        Math.max(
            10,
            window.innerWidth -
            buttonWidth -
            20
        );


    const maxY =
        Math.max(
            10,
            window.innerHeight -
            buttonHeight -
            20
        );


    const randomX =
        Math.floor(
            Math.random() *
            (maxX - 10)
        ) + 10;


    const randomY =
        Math.floor(
            Math.random() *
            (maxY - 10)
        ) + 10;


    noBtn.style.position = "fixed";


    noBtn.style.left =
        randomX + "px";


    noBtn.style.top =
        randomY + "px";


    const attemptText =
        document.getElementById(
            "attemptText"
        );


    const messages = [

        "Nice try. 😏",

        "You really thought. 💀",

        "NOPE.",

        "That button has commitment issues.",

        "Try again. 👀",

        "Absolutely not.",

        "The NO button said no.",

        "You're not escaping this date.",

        "Why are you still trying? 😭",

        "JUST SAY YES. 😭"

    ];


    attemptText.textContent =
        messages[
            Math.min(
                noAttempts - 1,
                messages.length - 1
            )
        ];


    createSmoke();

}


/* ==================================================
   NO BUTTON — DESKTOP
================================================== */

noBtn.addEventListener(
    "mouseenter",
    function () {

        moveNoButton();

    }
);


/* ==================================================
   NO BUTTON — MOBILE
================================================== */

noBtn.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();

    },
    {
        passive: false
    }
);


/* ==================================================
   SMOKE EFFECT
================================================== */

function createSmoke() {

    const container =
        document.getElementById(
            "smokeContainer"
        );


    if (!container) {
        return;
    }


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.className =
            "smoke-particle";


        const size =
            Math.random() * 25 + 18;


        particle.style.width =
            size + "px";


        particle.style.height =
            size + "px";


        particle.style.left =
            (Math.random() * 120 - 10) + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        particle.style.setProperty(
            "--duration",
            (Math.random() * 1.5 + 1.5) + "s"
        );


        particle.style.setProperty(
            "--drift1",
            (Math.random() * 40 - 20) + "px"
        );


        particle.style.setProperty(
            "--drift2",
            (Math.random() * 60 - 30) + "px"
        );


        particle.style.setProperty(
            "--drift3",
            (Math.random() * 80 - 40) + "px"
        );


        particle.style.setProperty(
            "--drift4",
            (Math.random() * 100 - 50) + "px"
        );


        particle.style.setProperty(
            "--drift5",
            (Math.random() * 120 - 60) + "px"
        );


        particle.style.setProperty(
            "--drift6",
            (Math.random() * 140 - 70) + "px"
        );


        container.appendChild(
            particle
        );


        setTimeout(
            function () {

                particle.remove();

            },
            3500
        );

    }

}


/* ==================================================
   GHOST GENERATOR
================================================== */

function createGhosts(
    container,
    amount = 10
) {

    if (!container) {
        return;
    }


    container.innerHTML = "";


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const ghost =
            document.createElement("div");


        ghost.className =
            "floating-ghost";


        ghost.style.left =
            Math.random() * 100 + "%";


        ghost.style.setProperty(
            "--ghost-duration",
            (Math.random() * 8 + 8) + "s"
        );


        ghost.style.setProperty(
            "--ghost-drift1",
            (Math.random() * 100 - 50) + "px"
        );


        ghost.style.setProperty(
            "--ghost-drift2",
            (Math.random() * 150 - 75) + "px"
        );


        ghost.style.setProperty(
            "--ghost-drift3",
            (Math.random() * 200 - 100) + "px"
        );


        ghost.style.setProperty(
            "--ghost-drift4",
            (Math.random() * 250 - 125) + "px"
        );


        ghost.style.setProperty(
            "--ghost-drift5",
            (Math.random() * 300 - 150) + "px"
        );


        ghost.style.animationDelay =
            Math.random() * 5 + "s";


        container.appendChild(
            ghost
        );

    }

}


/* ==================================================
   PAGE 2 → PAGE 3
================================================== */

nextBtn.addEventListener(
    "click",
    function () {

        showPage(ticketPage);


        createGhosts(
            document.getElementById(
                "ticketGhosts"
            ),
            10
        );

    }
);


/* ==================================================
   PAGE 3 → PAGE 4
================================================== */

ticketNextBtn.addEventListener(
    "click",
    function () {

        showPage(choicePage);


        createGhosts(
            document.getElementById(
                "choiceGhosts"
            ),
            10
        );


        paymentMessage.textContent = "";

    }
);


/* ==================================================
   PAGE 4 — MOVE PAYMENT BUTTON
================================================== */

function movePaymentButton(button) {

    const parent =
        document.querySelector(
            ".payment-buttons"
        );


    if (!parent) {
        return;
    }


    const parentRect =
        parent.getBoundingClientRect();


    const buttonRect =
        button.getBoundingClientRect();


    const maxX =
        Math.max(
            0,
            parentRect.width -
            buttonRect.width
        );


    const maxY =
        Math.max(
            0,
            parentRect.height -
            buttonRect.height
        );


    const randomX =
        Math.random() * maxX;


    const randomY =
        Math.random() * maxY;


    button.style.position =
        "absolute";


    button.style.left =
        randomX + "px";


    button.style.top =
        randomY + "px";


    paymentMessage.textContent =
        "Nice try. 😏 That option isn't available.";

}


/* ==================================================
   SPLIT — RUN AWAY
================================================== */

splitBtn.addEventListener(
    "mouseenter",
    function () {

        movePaymentButton(
            splitBtn
        );

    }
);


splitBtn.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        movePaymentButton(
            splitBtn
        );

    },
    {
        passive: false
    }
);


/* ==================================================
   YOUR TREAT — RUN AWAY
================================================== */

yourTreatBtn.addEventListener(
    "mouseenter",
    function () {

        movePaymentButton(
            yourTreatBtn
        );

    }
);


yourTreatBtn.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        movePaymentButton(
            yourTreatBtn
        );

    },
    {
        passive: false
    }
);


/* ==================================================
   MY TREAT → PAGE 5
================================================== */

myTreatBtn.addEventListener(
    "click",
    function () {

        showPage(emailPage);


        createGhosts(
            document.getElementById(
                "emailGhosts"
            ),
            10
        );


        emailInput.value = "";

        emailStatus.textContent = "";


        sendEmailBtn.disabled = false;


        sendEmailBtn.textContent =
            "SEND IT 💌";


        setTimeout(
            function () {

                emailInput.focus();

            },
            500
        );

    }
);


/* ==================================================
   PAGE 5 — EMAILJS SEND
================================================== */

emailForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const email =
            emailInput.value.trim();


        /* ------------------------------------------
           CHECK EMAIL
        ------------------------------------------ */

        if (!email) {

            emailStatus.textContent =
                "Enter your email first. 👀";

            emailInput.focus();

            return;

        }


        if (!emailInput.checkValidity()) {

            emailStatus.textContent =
                "That doesn't look like a valid email.";

            emailInput.focus();

            return;

        }


        /* ------------------------------------------
           DISABLE BUTTON
        ------------------------------------------ */

        sendEmailBtn.disabled = true;


        sendEmailBtn.textContent =
            "SENDING...";


        emailStatus.textContent =
            "Sending the message... 👀";


        /* ------------------------------------------
           EMAILJS TEMPLATE VARIABLES
        ------------------------------------------ */

        const templateParams = {

            email: email,

            to_email: email,

            recipient_email: email

        };


        console.log(
            "EmailJS parameters:",
            templateParams
        );


        /* ------------------------------------------
           SEND
        ------------------------------------------ */

        try {

            const response =
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    templateParams
                );


            console.log(
                "EmailJS response:",
                response
            );


            /* --------------------------------------
               SUCCESS
            -------------------------------------- */

            if (
                response &&
                response.status === 200
            ) {

                emailStatus.textContent =
                    "Message sent successfully. ❤️";


                sendEmailBtn.textContent =
                    "SENT ❤️";


                /*
                 * Move to final page after
                 * successful EmailJS request.
                 */

                setTimeout(
                    function () {

                        showPage(finalPage);

                    },
                    1200
                );

            } else {

                throw new Error(
                    "EmailJS request was not successful."
                );

            }

        } catch (error) {

            console.error(
                "EmailJS ERROR:",
                error
            );


            emailStatus.textContent =
                "Something went wrong. Please try again. 😭";


            sendEmailBtn.disabled =
                false;


            sendEmailBtn.textContent =
                "SEND IT 💌";

        }

    }
);


/* ==================================================
   EMAIL INPUT — ENTER KEY
================================================== */

emailInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter"
        ) {

            /*
             * Let the form submit normally.
             * Do not manually submit twice.
             */

            return;

        }

    }
);


/* ==================================================
   INITIAL PAGE
================================================== */

showPage(questionPage);