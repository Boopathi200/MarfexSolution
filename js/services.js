/* =========================================================
   MARFEX SOLUTION
   SERVICES DATA
========================================================= */

const services = [

    {
        icon: "fas fa-code",
        category: "WEB & APPS",
        title: "Website Development",

        description:
            "We create modern, professional and responsive websites designed around your business goals and customer needs.",

        features: [
            "Custom Website",
            "Responsive Design",
            "Modern UI",
            "Fast Loading"
        ]
    },


    {
        icon: "fas fa-mobile-screen-button",
        category: "WEB & APPS",
        title: "Responsive Website",

        description:
            "Your website will work smoothly across mobile phones, tablets, laptops and desktop devices.",

        features: [
            "Mobile Friendly",
            "Tablet Optimized",
            "Desktop Layout",
            "Cross Browser"
        ]
    },


    {
        icon: "fas fa-rotate",
        category: "WEB & APPS",
        title: "Website Redesign",

        description:
            "We transform outdated websites into modern, attractive and user-friendly digital experiences.",

        features: [
            "Modern UI",
            "Better UX",
            "Speed Improvement",
            "Mobile Optimization"
        ]
    },


    {
        icon: "fas fa-rocket",
        category: "WEB & APPS",
        title: "Landing Page",

        description:
            "High-converting landing pages designed to showcase your product, service or marketing campaign.",

        features: [
            "Conversion Focused",
            "Modern Design",
            "CTA Integration",
            "Fast Performance"
        ]
    },


    {
        icon: "fas fa-cart-shopping",
        category: "WEB & APPS",
        title: "E-Commerce Website",

        description:
            "Complete online stores with product management, shopping cart and customer-friendly purchasing experience.",

        features: [
            "Product Catalog",
            "Shopping Cart",
            "Payment Integration",
            "Order Management"
        ]
    },


    {
        icon: "fas fa-building",
        category: "WEB & APPS",
        title: "Business Website",

        description:
            "Professional websites that present your company, services, products, team and contact information.",

        features: [
            "Company Profile",
            "Services Section",
            "Contact Forms",
            "Business Branding"
        ]
    },


    {
        icon: "fas fa-user-tie",
        category: "WEB & APPS",
        title: "Portfolio Website",

        description:
            "Personal portfolio websites for professionals, freelancers, creators and business owners.",

        features: [
            "Personal Branding",
            "Project Showcase",
            "About Section",
            "Contact Integration"
        ]
    },


    {
        icon: "fas fa-utensils",
        category: "WEB & APPS",
        title: "Restaurant Website",

        description:
            "Digital restaurant websites with menus, food images, contact details, location and reservation options.",

        features: [
            "Digital Menu",
            "Food Gallery",
            "Location Map",
            "Reservation"
        ]
    },


    {
        icon: "fas fa-graduation-cap",
        category: "WEB & APPS",
        title: "School Website",

        description:
            "Professional educational websites for schools, colleges and training institutions.",

        features: [
            "Courses",
            "Admission Forms",
            "Events",
            "Faculty Details"
        ]
    },


    {
        icon: "fas fa-hospital",
        category: "WEB & APPS",
        title: "Hospital Website",

        description:
            "Modern medical websites that help patients easily find doctors, departments and appointment information.",

        features: [
            "Doctor Profiles",
            "Departments",
            "Appointments",
            "Contact Details"
        ]
    },


    {
        icon: "fas fa-location-dot",
        category: "SEO & GOOGLE",
        title: "Google Business",

        description:
            "Set up and optimize your Google Business Profile to improve local visibility and help customers find your business.",

        features: [
            "Profile Setup",
            "Map Listing",
            "Business Information",
            "Review Strategy"
        ]
    },


    {
        icon: "fas fa-magnifying-glass",
        category: "SEO & GOOGLE",
        title: "SEO Optimization",

        description:
            "Search engine optimization strategies designed to improve your website visibility and organic traffic.",

        features: [
            "Keyword Research",
            "On Page SEO",
            "Technical SEO",
            "Local SEO"
        ]
    },


    {
        icon: "fas fa-palette",
        category: "GRAPHIC DESIGN",
        title: "Poster Design",

        description:
            "Eye-catching promotional posters for businesses, offers, events and social media campaigns.",

        features: [
            "Business Posters",
            "Offer Posters",
            "Event Designs",
            "Social Formats"
        ]
    },


    {
        icon: "fas fa-pen-nib",
        category: "GRAPHIC DESIGN",
        title: "Logo Design",

        description:
            "Professional logos designed to create a strong and memorable identity for your business.",

        features: [
            "Custom Logo",
            "Brand Identity",
            "Typography",
            "Multiple Formats"
        ]
    },


    {
        icon: "fas fa-image",
        category: "GRAPHIC DESIGN",
        title: "Banner Design",

        description:
            "Professional banners for websites, social media, advertisements and business promotions.",

        features: [
            "Web Banners",
            "Social Covers",
            "Advertisement",
            "Promotional Design"
        ]
    },


    {
        icon: "fas fa-share-nodes",
        category: "SOCIAL & VIDEO",
        title: "Social Media Posts",

        description:
            "Creative social media designs that help businesses maintain a professional and consistent online presence.",

        features: [
            "Instagram Posts",
            "Facebook Posts",
            "LinkedIn Posts",
            "Creative Designs"
        ]
    },


    {
        icon: "fas fa-video",
        category: "SOCIAL & VIDEO",
        title: "Reels Editing",

        description:
            "Engaging short-form video editing with captions, transitions, music synchronization and effects.",

        features: [
            "Instagram Reels",
            "Captions",
            "Transitions",
            "Music Sync"
        ]
    },


    {
        icon: "fas fa-film",
        category: "SOCIAL & VIDEO",
        title: "Video Editing",

        description:
            "Professional video editing for promotional videos, YouTube content, business videos and social media.",

        features: [
            "Video Cutting",
            "Transitions",
            "Sound Editing",
            "Text Animation"
        ]
    },


    {
        icon: "fab fa-whatsapp",
        category: "SOCIAL & VIDEO",
        title: "WhatsApp Business Setup",

        description:
            "Set up WhatsApp Business with a professional profile, catalog, quick replies and customer communication tools.",

        features: [
            "Business Profile",
            "Product Catalog",
            "Quick Replies",
            "Auto Messages"
        ]
    },


    {
        icon: "fas fa-bullhorn",
        category: "SOCIAL & VIDEO",
        title: "Social Media Management",

        description:
            "Complete social media management to keep your business active, consistent and professionally presented online.",

        features: [
            "Content Planning",
            "Post Scheduling",
            "Account Management",
            "Audience Engagement"
        ]
    }

];



/* =========================================================
   OPEN SERVICE
========================================================= */

function openService(index) {

    const service = services[index];

    if (!service) {
        return;
    }


    /* Icon */

    document.getElementById(
        "modalIcon"
    ).innerHTML =
        `<i class="${service.icon}"></i>`;


    /* Category */

    document.getElementById(
        "modalCategory"
    ).textContent =
        service.category;


    /* Title */

    document.getElementById(
        "modalTitle"
    ).textContent =
        service.title;


    /* Description */

    document.getElementById(
        "modalDescription"
    ).textContent =
        service.description;


    /* Features */

    const features =
        document.getElementById(
            "modalFeatures"
        );


    features.innerHTML = "";


    service.features.forEach(
        function (feature) {

            const item =
                document.createElement("div");

            item.className =
                "modal-feature";

            item.innerHTML = `

                <i class="fas fa-check"></i>

                <span>
                    ${feature}
                </span>

            `;

            features.appendChild(item);

        }
    );


    /* Show Modal */

    document
        .getElementById("serviceModal")
        .classList.add("active");


    /* Disable scroll */

    document.body.style.overflow =
        "hidden";
}



/* =========================================================
   CLOSE SERVICE
========================================================= */

function closeService() {

    document
        .getElementById("serviceModal")
        .classList.remove("active");


    document.body.style.overflow =
        "";
}



/* =========================================================
   CLOSE WHEN CLICK OUTSIDE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const modal =
            document.getElementById(
                "serviceModal"
            );


        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    closeService();

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

            closeService();

        }

    }
);



/* =========================================================
   SERVICE FILTER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const filterButtons =
            document.querySelectorAll(
                ".service-filter-btn"
            );


        const serviceCards =
            document.querySelectorAll(
                ".service-icon-card"
            );


        filterButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {


                        /* Active button */

                        filterButtons.forEach(
                            function (btn) {

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                        button.classList.add(
                            "active"
                        );


                        const filter =
                            button.dataset.filter;


                        /* Filter cards */

                        serviceCards.forEach(
                            function (card) {

                                const category =
                                    card.dataset.category;


                                if (
                                    filter === "all" ||
                                    category === filter
                                ) {

                                    card.classList.remove(
                                        "hidden-service"
                                    );

                                } else {

                                    card.classList.add(
                                        "hidden-service"
                                    );

                                }

                            }
                        );

                    }
                );

            }
        );

    }
);



/* =========================================================
   WHATSAPP
========================================================= */

function sendWhatsAppMessage() {

    const phone =
        "918925848445";


    const message =
        "Hi MARFEX SOLUTION, I am interested in your digital services. Please share more details.";


    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        url,
        "_blank"
    );
}



/* =========================================================
   AOS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            typeof AOS !== "undefined"
        ) {

            AOS.init({

                duration: 600,

                once: true,

                offset: 50

            });

        }

    }
);