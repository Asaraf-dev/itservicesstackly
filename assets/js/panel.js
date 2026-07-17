/*--- PANEL JS ---*/

document.addEventListener("DOMContentLoaded", () => {

    /*--- Elements ---*/

    const sidebar = document.querySelector(".panel-sidebar");
    const sidebarToggle = document.querySelector(".panel-sidebar-toggle");
    const body = document.body;

    /*--- Sidebar Overlay ---*/

    let overlay = document.querySelector(".panel-overlay");

    if (!overlay) {

        overlay = document.createElement("div");

        overlay.className = "panel-overlay";

        body.appendChild(overlay);

    }

    /*--- Sidebar Toggle ---*/

    if (sidebar && sidebarToggle) {

        sidebarToggle.addEventListener("click", () => {

            sidebar.classList.toggle("active");

            overlay.classList.toggle("active");

        });

    }

    /*--- Overlay Close ---*/

    overlay.addEventListener("click", () => {

        sidebar.classList.remove("active");

        overlay.classList.remove("active");

    });

    /*--- Desktop Resize ---*/

    window.addEventListener("resize", () => {

        if (window.innerWidth > 991) {

            sidebar.classList.remove("active");

            overlay.classList.remove("active");

        }

    });

    /*--- Active Menu ---*/

    const menuLinks = document.querySelectorAll(".panel-menu a");

    const currentPage = window.location.pathname.split("/").pop();

    menuLinks.forEach(link => {

        const page = link.getAttribute("href");

        if (page === currentPage) {

            link.classList.add("active");

        }

        else {

            link.classList.remove("active");

        }

    });

    /*--- Counter Animation ---*/

    const counters = document.querySelectorAll(".panel-counter");

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                const duration = 1800;

                const step = Math.max(target / (duration / 16), 1);

                let current = 0;

                const update = () => {

                    current += step;

                    if (current < target) {

                        counter.textContent = Math.floor(current);

                        requestAnimationFrame(update);

                    }

                    else {

                        counter.textContent = target;

                    }

                };

                update();

                counterObserver.unobserve(counter);

            }

        });

    }, { threshold: .5 });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /*--- Reveal Animation ---*/

    if (typeof reveal === "function") {

        reveal(".panel-welcome");

        reveal(".panel-stat-card");

    }

    /*--- Card Tilt ---*/

    if (typeof cardTilt === "function") {

        cardTilt(".panel-stat-card", 8, 8);

    }

    /*--- Spotlight ---*/

    if (typeof spotlight === "function") {

        spotlight(".panel-stat-card");

        spotlight(".panel-welcome");

    }

    /*--- Search ---*/

    const searchInput = document.querySelector(".panel-search input");

    if (searchInput) {

        searchInput.addEventListener("keyup", () => {

            const keyword = searchInput.value.toLowerCase();

            document.querySelectorAll(".panel-search-item").forEach(item => {

                const text = item.innerText.toLowerCase();

                item.style.display = text.includes(keyword) ? "" : "none";

            });

        });

    }

    /*--- Notification ---*/

    const notificationBtn = document.querySelectorAll(".panel-icon-btn");

    notificationBtn.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.add("active");

            setTimeout(() => {

                button.classList.remove("active");

            }, 250);

        });

    });

    /*--- Theme Ready ---*/

    const themeButton = document.querySelector(".panel-icon-btn:first-child");

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            body.classList.toggle("panel-light");

        });

    }

    /*--- Revenue Chart ---*/

    const revenueChart = document.getElementById("revenueChart");

    if (revenueChart) {

        const ctx = revenueChart.getContext("2d");

        const gradient = ctx.createLinearGradient(0, 0, 0, 350);

        gradient.addColorStop(0, "rgba(37,99,235,.45)");
        gradient.addColorStop(.5, "rgba(59,130,246,.18)");
        gradient.addColorStop(1, "rgba(37,99,235,0)");

        new Chart(ctx, {

            type: "line",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],

                datasets: [{

                    label: "Revenue",

                    data: [
                        12,
                        18,
                        15,
                        25,
                        22,
                        31,
                        35,
                        42,
                        39,
                        48,
                        56,
                        63
                    ],

                    fill: true,

                    backgroundColor: gradient,

                    borderColor: "#2563EB",

                    borderWidth: 3,

                    pointRadius: 5,

                    pointHoverRadius: 7,

                    pointBackgroundColor: "#FFFFFF",

                    pointBorderColor: "#2563EB",

                    pointBorderWidth: 3,

                    tension: .45

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                interaction: {

                    mode: "index",

                    intersect: false

                },

                plugins: {

                    legend: {
                        display: false
                    },

                    tooltip: {

                        backgroundColor: "#111827",

                        titleColor: "#FFFFFF",

                        bodyColor: "#CBD5E1",

                        padding: 14,

                        displayColors: false,

                        borderColor: "rgba(255,255,255,.08)",

                        borderWidth: 1

                    }

                },

                scales: {

                    x: {

                        grid: {
                            display: false
                        },

                        ticks: {
                            color: "#94A3B8"
                        }

                    },

                    y: {

                        beginAtZero: true,

                        grid: {
                            color: "rgba(255,255,255,.06)"
                        },

                        ticks: {
                            color: "#94A3B8"
                        }

                    }

                },

                animation: {

                    duration: 1800,

                    easing: "easeOutQuart"

                }

            }

        });

    }

    /*--- Analytics Reveal ---*/

    if (typeof reveal === "function") {

        reveal(".panel-card");

    }

    /*--- Analytics Tilt ---*/

    if (typeof cardTilt === "function") {

        cardTilt(".panel-card", 6, 6);

    }

    /*--- Analytics Spotlight ---*/

    if (typeof spotlight === "function") {

        spotlight(".panel-card");

    }

});

/*================= Admin Clients Page =================*/

/*--- Clients Page ---*/

const clientTable = document.querySelector(".panel-table tbody");
const clientRows = document.querySelectorAll(".panel-table tbody tr");

const clientSearch = document.getElementById("clientSearch");
const statusFilter = document.getElementById("statusFilter");
const companyFilter = document.getElementById("companyFilter");

/*--- Search ---*/

if (clientSearch) {

    clientSearch.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        clientRows.forEach(function (row) {

            const text = row.innerText.toLowerCase();

            row.style.display = text.includes(value) ? "" : "none";

        });

    });

}

/*--- Status Filter ---*/

if (statusFilter) {

    statusFilter.addEventListener("change", filterClients);

}

/*--- Company Filter ---*/

if (companyFilter) {

    companyFilter.addEventListener("change", filterClients);

}

function filterClients() {

    clientRows.forEach(function (row) {

        const status = row.querySelector(".panel-badge").innerText.trim().toLowerCase();

        const company = row.children[1].innerText.trim().toLowerCase();

        const selectedStatus = statusFilter.value.toLowerCase();
        const selectedCompany = companyFilter.value.toLowerCase();

        const statusMatch =
            selectedStatus === "all status" ||
            status === selectedStatus;

        const companyMatch =
            selectedCompany === "all companies" ||
            company.includes(selectedCompany);

        row.style.display = statusMatch && companyMatch ? "" : "none";

    });

}

/*--- Delete Client ---*/

document.querySelectorAll(".panel-action-btn.delete").forEach(function (btn) {

    btn.addEventListener("click", function () {

        const row = this.closest("tr");

        const client = row.querySelector("h6").innerText;

        const confirmDelete = confirm("Delete " + client + " ?");

        if (confirmDelete) {

            row.style.transition = ".35s";

            row.style.opacity = "0";

            row.style.transform = "translateX(40px)";

            setTimeout(function () {

                row.remove();

            }, 350);

        }

    });

});

/*--- View Client ---*/

document.querySelectorAll(".panel-action-btn.view").forEach(function (btn) {

    btn.addEventListener("click", function () {

        const client = this.closest("tr").querySelector("h6").innerText;

        alert("Viewing " + client);

    });

});

/*--- Edit Client ---*/

document.querySelectorAll(".panel-action-btn.edit").forEach(function (btn) {

    btn.addEventListener("click", function () {

        const client = this.closest("tr").querySelector("h6").innerText;

        alert("Editing " + client);

    });

});

/*--- Row Animation ---*/

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: .15
});

clientRows.forEach(function (row) {

    row.style.opacity = "0";
    row.style.transform = "translateY(25px)";
    row.style.transition = ".5s ease";

    observer.observe(row);

});

/*--- Pagination Demo ---*/

document.querySelectorAll(".panel-page-btn").forEach(function (btn) {

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelectorAll(".panel-page-btn").forEach(function (item) {

            item.classList.remove("active");

        });

        if (this.innerText.trim() !== "" && !this.querySelector("i")) {

            this.classList.add("active");

        }

    });

});

/*==================== Admin Messages ====================*/

document.addEventListener("DOMContentLoaded", () => {

    /*--- Conversation Switch ---*/

    const messageItems = document.querySelectorAll(".panel-message-item");

    messageItems.forEach(item => {

        item.addEventListener("click", () => {

            messageItems.forEach(card => card.classList.remove("active"));

            item.classList.add("active");

            const unread = item.querySelector(".panel-unread-count");

            if (unread) {

                unread.remove();

            }

        });

    });

    /*--- Message Search ---*/

    const searchInput = document.getElementById("messageSearch");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            messageItems.forEach(item => {

                item.style.display = item.innerText.toLowerCase().includes(value)
                    ? ""
                    : "none";

            });

        });

    }

    /*--- Status Filter ----*/

    const statusFilter = document.getElementById("messageStatus");

    if (statusFilter) {

        statusFilter.addEventListener("change", function () {

            const value = this.value;

            messageItems.forEach(item => {

                const unread = item.querySelector(".panel-unread-count");

                if (value === "All Status") {

                    item.style.display = "";

                }

                else if (value === "Unread") {

                    item.style.display = unread ? "" : "none";

                }

                else if (value === "Read") {

                    item.style.display = unread ? "none" : "";

                }

                else {

                    item.style.display = "";

                }

            });

        });

    }

    /*--- Priority Filter ---*/

    const priorityFilter = document.getElementById("messagePriority");

    if (priorityFilter) {

        priorityFilter.addEventListener("change", function () {

            console.log("Priority :", this.value);

        });

    }

    /*--- Reply Validation ---*/

    const sendBtn = document.querySelector(".panel-message-reply .panel-primary-btn");

    const replyBox = document.querySelector(".panel-reply-input");

    if (sendBtn && replyBox) {

        sendBtn.addEventListener("click", () => {

            const message = replyBox.value.trim();

            if (message === "") {

                alert("Please enter your reply.");

                replyBox.focus();

                return;

            }

            alert("Reply sent successfully.");

            replyBox.value = "";

        });

    }

    /*--- Cancel Reply ---*/

    const cancelBtn = document.querySelector(".panel-outline-btn");

    if (cancelBtn && replyBox) {

        cancelBtn.addEventListener("click", () => {

            replyBox.value = "";

            replyBox.focus();

        });

    }

    /*--- Header Actions ----*/

    const archiveBtn = document.querySelector(".panel-message-actions .bi-archive");

    if (archiveBtn) {

        archiveBtn.parentElement.addEventListener("click", () => {

            alert("Message archived.");

        });

    }

    const starBtn = document.querySelector(".panel-message-actions .bi-star");

    if (starBtn) {

        starBtn.parentElement.addEventListener("click", () => {

            starBtn.classList.toggle("bi-star");

            starBtn.classList.toggle("bi-star-fill");

        });

    }

    const deleteBtn = document.querySelector(".panel-message-actions .delete");

    if (deleteBtn) {

        deleteBtn.addEventListener("click", () => {

            if (confirm("Delete this message?")) {

                alert("Message deleted.");

            }

        });

    }

});