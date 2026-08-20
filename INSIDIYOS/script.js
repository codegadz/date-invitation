/* ==================================================
   ELEMENTS
================================================== */

const questionPage =
    document.getElementById("questionPage");

const successPage =
    document.getElementById("successPage");

const ticketPage =
    document.getElementById("ticketPage");


const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const nextBtn =
    document.getElementById("nextBtn");


const attemptText =
    document.getElementById("attemptText");


const smokeContainer =
    document.getElementById("smokeContainer");


const ghostsContainer =
    document.getElementById("ghosts");


const ticketGhosts =
    document.getElementById("ticketGhosts");


let attempts = 0;


/* ==================================================
   PAGE 1 → PAGE 2
================================================== */

yesBtn.addEventListener(
    "click",
    function () {

        /*
            Hide poster
        */

        questionPage.classList.add(
            "hidden"
        );


        /*
            Show GOOD CHOICE page
        */

        successPage.classList.remove(
            "hidden"
        );


        /*
            Start ghosts
        */

        createGhosts(
            ghostsContainer
        );

    }
);


/* ==================================================
   PAGE 2 → PAGE 3
================================================== */

nextBtn.addEventListener(
    "click",
    function () {

        /*
            Hide GOOD CHOICE
        */

        successPage.classList.add(
            "hidden"
        );


        /*
            Show ticket page
        */

        ticketPage.classList.remove(
            "hidden"
        );


        /*
            Add ghosts to page 3
        */

        createGhosts(
            ticketGhosts
        );

    }
);


/* ==================================================
   MOVE NO BUTTON
================================================== */

function moveNoButton() {

    attempts++;


    const pageWidth =
        questionPage.clientWidth;

    const pageHeight =
        questionPage.clientHeight;


    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    const padding =
        10;


    const maxX =
        Math.max(
            padding,
            pageWidth -
            buttonWidth -
            padding
        );


    const maxY =
        Math.max(
            padding,
            pageHeight -
            buttonHeight -
            padding
        );


    let newX;

    let newY;


    /*
        Find a position that
        doesn't overlap YES.
    */

    for (
        let i = 0;
        i < 50;
        i++
    ) {

        newX =
            padding +
            Math.random() *
            (
                maxX -
                padding
            );


        newY =
            padding +
            Math.random() *
            (
                maxY -
                padding
            );


        const yesRect =
            yesBtn.getBoundingClientRect();


        const pageRect =
            questionPage.getBoundingClientRect();


        const yesX =
            yesRect.left -
            pageRect.left;


        const yesY =
            yesRect.top -
            pageRect.top;


        const horizontalDistance =
            Math.abs(
                newX -
                yesX
            );


        const verticalDistance =
            Math.abs(
                newY -
                yesY
            );


        if (
            horizontalDistance > 150 ||
            verticalDistance > 100
        ) {

            break;

        }

    }


    /*
        Move the entire NO button.
    */

    noBtn.style.left =
        `${newX}px`;

    noBtn.style.top =
        `${newY}px`;


    /*
        Messages
    */

    const messages = [

        "Nice try. 😏",

        "NOPE.",

        "You can't catch me.",

        "Wrong button.",

        "Try again. 👀",

        "That button doesn't work.",

        "Just say YES.",

        "Why are you chasing NO?",

        "Almost...",

        "Still not happening.",

        "The NO button is running away.",

        "Give up already.",

        "You really thought you could click it?",

        "I'm faster than you.",

        "There is no escape from YES."

    ];


    attemptText.textContent =
        messages[
            Math.min(
                attempts - 1,
                messages.length - 1
            )
        ];

}


/* ==================================================
   DESKTOP NO BUTTON
================================================== */

noBtn.addEventListener(
    "mouseenter",
    function () {

        moveNoButton();

    }
);


/* ==================================================
   MOBILE NO BUTTON
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
   CLICK FALLBACK
================================================== */

noBtn.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        moveNoButton();

    }
);


/* ==================================================
   LIVE SMOKE
================================================== */

function createSmoke() {

    if (
        !smokeContainer ||
        !noBtn
    ) {

        return;

    }


    const width =
        noBtn.offsetWidth;

    const height =
        noBtn.offsetHeight;


    /*
        Two smoke particles
        every cycle.
    */

    for (
        let i = 0;
        i < 2;
        i++
    ) {

        const smoke =
            document.createElement(
                "span"
            );


        smoke.className =
            "smoke-particle";


        let x;

        let y;


        /*
            0 = TOP
            1 = RIGHT
            2 = BOTTOM
            3 = LEFT
            4 = CORNER
        */

        const location =
            Math.floor(
                Math.random() * 5
            );


        if (location === 0) {

            /* TOP */

            x =
                Math.random() *
                width;

            y =
                -10;

        }


        else if (location === 1) {

            /* RIGHT */

            x =
                width + 10;

            y =
                Math.random() *
                height;

        }


        else if (location === 2) {

            /* BOTTOM */

            x =
                Math.random() *
                width;

            y =
                height + 10;

        }


        else if (location === 3) {

            /* LEFT */

            x =
                -10;

            y =
                Math.random() *
                height;

        }


        else {

            /*
                CORNERS
            */

            const corner =
                Math.floor(
                    Math.random() * 4
                );


            const offset =
                10;


            if (corner === 0) {

                /* TOP LEFT */

                x =
                    -offset;

                y =
                    -offset;

            }


            else if (corner === 1) {

                /* TOP RIGHT */

                x =
                    width + offset;

                y =
                    -offset;

            }


            else if (corner === 2) {

                /* BOTTOM RIGHT */

                x =
                    width + offset;

                y =
                    height + offset;

            }


            else {

                /* BOTTOM LEFT */

                x =
                    -offset;

                y =
                    height + offset;

            }

        }


        smoke.style.left =
            `${x}px`;

        smoke.style.top =
            `${y}px`;


        /*
            Duration
        */

        smoke.style.setProperty(
            "--duration",
            `${3 + Math.random() * 2.5}s`
        );


        /*
            Drift
        */

        smoke.style.setProperty(
            "--drift1",
            `${-20 + Math.random() * 40}px`
        );


        smoke.style.setProperty(
            "--drift2",
            `${-40 + Math.random() * 80}px`
        );


        smoke.style.setProperty(
            "--drift3",
            `${-60 + Math.random() * 120}px`
        );


        smoke.style.setProperty(
            "--drift4",
            `${-80 + Math.random() * 160}px`
        );


        smoke.style.setProperty(
            "--drift5",
            `${-100 + Math.random() * 200}px`
        );


        smoke.style.setProperty(
            "--drift6",
            `${-120 + Math.random() * 240}px`
        );


        /*
            Size
        */

        const size =
            20 +
            Math.random() * 40;


        smoke.style.width =
            `${size}px`;

        smoke.style.height =
            `${size}px`;


        /*
            Add
        */

        smokeContainer.appendChild(
            smoke
        );


        /*
            Remove
        */

        smoke.addEventListener(
            "animationend",
            function () {

                smoke.remove();

            }
        );

    }

}


/*
    Constant smoke
*/

setInterval(
    createSmoke,
    100
);


/* ==================================================
   GHOSTS
================================================== */

function createGhosts(
    container
) {

    if (!container) {

        return;

    }


    const ghostCount =
        18;


    for (
        let i = 0;
        i < ghostCount;
        i++
    ) {

        setTimeout(
            function () {

                const ghost =
                    document.createElement(
                        "div"
                    );


                ghost.className =
                    "floating-ghost";


                /*
                    Random position
                */

                ghost.style.left =
                    `${Math.random() * 100}%`;


                /*
                    Random size
                */

                const size =
                    40 +
                    Math.random() * 45;


                ghost.style.width =
                    `${size}px`;

                ghost.style.height =
                    `${size * 1.35}px`;


                /*
                    Random duration
                */

                ghost.style.setProperty(
                    "--ghost-duration",
                    `${8 + Math.random() * 7}s`
                );


                /*
                    Random drift
                */

                ghost.style.setProperty(
                    "--ghost-drift1",
                    `${-40 + Math.random() * 80}px`
                );


                ghost.style.setProperty(
                    "--ghost-drift2",
                    `${-70 + Math.random() * 140}px`
                );


                ghost.style.setProperty(
                    "--ghost-drift3",
                    `${-100 + Math.random() * 200}px`
                );


                ghost.style.setProperty(
                    "--ghost-drift4",
                    `${-130 + Math.random() * 260}px`
                );


                ghost.style.setProperty(
                    "--ghost-drift5",
                    `${-160 + Math.random() * 320}px`
                );


                /*
                    Add ghost
                */

                container.appendChild(
                    ghost
                );


                /*
                    Remove ghost
                */

                ghost.addEventListener(
                    "animationend",
                    function () {

                        ghost.remove();

                    }
                );


            },
            i * 450
        );

    }

}