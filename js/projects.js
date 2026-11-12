/* =========================================================
   MARFEX SOLUTION
   PROJECT DATA
========================================================= */

const projects = {

    oorupro: {
        title: "Oorupro",

        logo:
            "assets/images/projects/Oorupro logo.png",

        description:
            "Oorupro is a digital service platform that connects customers with trusted local service providers. Users can discover and request different services through an easy-to-use platform.",

        type:
            "Marketing & Buisness Development",

        link:
            "#"
    },


    medron: {
        title:
            "Medron Healthcare Systems",

        logo:
            "assets/images/projects/medron.png",

        description:
            "Medron Medical Equipments is a professional business website created to present medical equipment, products and company information through a clean and modern digital experience.",

        type:
            "Medical Website",

        link:
            "#"
    },
    klaClothings: {
    title: "KLA Clothings Boutique",

    logo:
        "assets/images/projects/kla Clothings.png",

    description:
        "KLA Clothings Boutique partnered with us for creative reel production and digital marketing. We create engaging promotional reels to showcase their clothing collections, increase brand visibility, attract potential customers, and generate business leads through social media.",

    type:
        "Social Media Marketing & Lead Generation",

    link:
        "#"
},
jkSereno: {
    title: "JK Sereno",

    logo:
        "assets/images/projects/Jk sereno.png",

    description:
        "JK Sereno is a real estate project for which we provide professional video shoots, engaging reels editing, and creative content creation to showcase the property, highlight its features, and create attractive promotional content for social media.",

    type:
        "Video Production & Content Creation",

    link:
        "#"
}

};


/* =========================================================
   AOS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof AOS !== "undefined") {

        AOS.init({
            duration: 700,
            once: true,
            offset: 70
        });

    }

});


/* =========================================================
   OPEN PROJECT
========================================================= */

function openProject(projectName) {

    const project =
        projects[projectName];

    if (!project) {
        return;
    }


    /* Logo */

    const modalLogo =
        document.getElementById("modalLogo");

    if (modalLogo) {

        modalLogo.src =
            project.logo;

        modalLogo.alt =
            project.title;

    }


    /* Title */

    const modalTitle =
        document.getElementById("modalTitle");

    if (modalTitle) {

        modalTitle.textContent =
            project.title;

    }


    /* Description */

    const modalDescription =
        document.getElementById("modalDescription");

    if (modalDescription) {

        modalDescription.textContent =
            project.description;

    }


    /* Type */

    const modalType =
        document.getElementById("modalType");

    if (modalType) {

        modalType.textContent =
            project.type;

    }


    /* Technology */

    const modalTech =
        document.getElementById("modalTech");

    if (modalTech) {

        modalTech.textContent =
            project.tech;

    }


    /* Live Project */

    const modalProjectLink =
        document.getElementById("modalProjectLink");

    if (modalProjectLink) {

        modalProjectLink.href =
            project.link;

    }


    /* Open Modal */

    const projectModal =
        document.getElementById("projectModal");

    if (projectModal) {

        projectModal.classList.add("active");

    }


    /* Stop Background Scroll */

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE PROJECT
========================================================= */

function closeProject() {

    const projectModal =
        document.getElementById("projectModal");

    if (projectModal) {

        projectModal.classList.remove("active");

    }


    document.body.style.overflow =
        "";

}


/* =========================================================
   CLICK OUTSIDE MODAL
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const modal =
            document.getElementById(
                "projectModal"
            );


        if (!modal) {
            return;
        }


        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    closeProject();

                }

            }
        );

    }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeProject();

        }

    }
);