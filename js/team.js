/* =========================================================
   TEAM MEMBER DATA
========================================================= */

const teamMembers = [

 {
        name: "Prasanth",

        role: "MARKETING HEAD",

        position: "Editor & Marketing Expert",

        image: "assets/images/team/member 2.jpeg",

        description:
            "Focuses on marketing, growth strategy and digital campaigns. He works on helping brands reach the right audience and generate meaningful results.",

        skills: [
            "Digital Marketing",
            "Social Media",
            "Lead Generation",
            "Growth Strategy",
            "Editor"
        ]
    },

    {
        name: "Dinesh Kumar",

        role: "UI/UX DESIGNER",

        position: "Web & Graphic Designer",

        image: "assets/images/team/member2.png",

        description:
            "Dinesh works on graphic design, UI/UX design and digital products. His focus is building reliable, scalable and user-friendly solutions.",

        skills: [
            "Web Development",
            "Frontend",
            "UI/UX Design",
            "Mobile Application"
        ]
    },

 {
        name: "Boopathi",

        role: "FULL STACK DEVELOPER",

        position: "Software Engineer",

        image: "assets/images/team/member1.jpeg",

        description:
            "Boopathi works on Full Stack Development and AI Development. He helps transform ideas into modern and engaging digital solutions.",

        skills: [
            "Web Development",
            "Backend",
            "Application Development",
            "Technology"
        ]
    }

];



/* =========================================================
   DOM ELEMENTS
========================================================= */

const cards =
    document.querySelectorAll(".team-card");

const modal =
    document.getElementById("profileModal");

const modalImage =
    document.getElementById("modalImage");

const modalName =
    document.getElementById("modalName");

const modalRole =
    document.getElementById("modalRole");

const modalPosition =
    document.getElementById("modalPosition");

const modalDescription =
    document.getElementById("modalDescription");

const modalSkills =
    document.getElementById("modalSkills");

const closeProfile =
    document.getElementById("closeProfile");



/* =========================================================
   OPEN PROFILE
========================================================= */

function openProfile(index) {

    const member =
        teamMembers[index];

    if (!member) return;


    modalImage.src =
        member.image;

    modalImage.alt =
        member.name;


    modalName.textContent =
        member.name;

    modalRole.textContent =
        member.role;

    modalPosition.textContent =
        member.position;

    modalDescription.textContent =
        member.description;


    modalSkills.innerHTML = "";


    member.skills.forEach(skill => {

        const span =
            document.createElement("span");

        span.textContent =
            skill;

        modalSkills.appendChild(span);

    });


    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}



/* =========================================================
   CLOSE PROFILE
========================================================= */

function closeProfileModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}



/* =========================================================
   CARD CLICK
========================================================= */

cards.forEach(card => {

    card.addEventListener(
        "click",
        function () {

            const index =
                Number(
                    this.dataset.member
                );

            openProfile(index);

        }
    );

});



/* =========================================================
   CLOSE BUTTON
========================================================= */

closeProfile.addEventListener(
    "click",
    closeProfileModal
);



/* =========================================================
   CLICK OUTSIDE
========================================================= */

modal.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains(
                "modal-backdrop-custom"
            )
        ) {

            closeProfileModal();

        }

    }
);



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeProfileModal();

        }

    }
);



/* =========================================================
   3D CARD MOUSE EFFECT
========================================================= */

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        function (event) {

            if (
                window.innerWidth < 768
            ) return;


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;


            card.style.transform =
                `
                perspective(1000px)
                translateY(-14px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;
        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform = "";

        }
    );

});