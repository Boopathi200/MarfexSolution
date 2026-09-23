(function () {
  const navItems = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "about", label: "About", href: "about.html" },
    { key: "services", label: "Services", href: "services.html" },
    { key: "project", label: "Project", href: "Project.html" },
    { key: "contact", label: "Contact", href: "contact.html" },
    { key: "team", label: "Our Team", href: "team.html" }
  ];

  function resolveActiveKey(mount) {
    if (mount.dataset.active) {
      return mount.dataset.active;
    }

    const fileName = window.location.pathname.split("/").pop() || "index.html";
    const activeItem = navItems.find((item) => item.href.toLowerCase() === fileName.toLowerCase());

    return activeItem ? activeItem.key : "";
  }

  function renderHeader(mount) {
    const activeKey = resolveActiveKey(mount);
    const navMarkup = navItems
      .map((item) => {
        const activeClass = item.key === activeKey ? " active" : "";

        return `
                <li class="nav-item">
                    <a class="nav-link${activeClass}" href="${item.href}">
                        ${item.label}
                    </a>
                </li>`;
      })
      .join("");

    mount.outerHTML = `
<header class="header-navbar">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light p-0">
            <a class="navbar-brand" href="index.html">
                <img src="assets/images/logo text.png" alt="MARKFEX SOLUTION Logo" class="logo-icon">
                <span class="brand-text">
                    <span class="brand-marfex">MARKFEX</span>
                    <span class="brand-solution">SOLUTION</span>
                </span>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <div class="navbar-toggler-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
${navMarkup}
                </ul>
            </div>
        </nav>
    </div>
</header>`;
  }

  document.querySelectorAll("[data-site-header]").forEach(renderHeader);
})();
