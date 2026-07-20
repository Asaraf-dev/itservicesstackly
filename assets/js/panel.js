/*==================== PASSWORD SETTINGS ====================*/

/*--- Sidebar Toggle ---*/

const sidebar = document.querySelector(".panel-sidebar");
const sidebarToggle = document.querySelector(".panel-sidebar-toggle");
const body = document.body;

/*--- Overlay ---*/

let overlay = document.querySelector(".panel-overlay");

if (!overlay) {

    overlay = document.createElement("div");

    overlay.className = "panel-overlay";

    body.appendChild(overlay);

}

/*--- Toggle Sidebar ---*/

if (sidebar && sidebarToggle) {

    sidebarToggle.addEventListener("click", () => {

        sidebar.classList.toggle("active");

        overlay.classList.toggle("active");

    });

}

/*--- Close Sidebar ---*/

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

});

/*--- Password Toggle ---*/

document.querySelectorAll(".panel-password-toggle").forEach((button) => {

    button.addEventListener("click", () => {

        const input = button.previousElementSibling;
        const icon = button.querySelector("i");

        if (input.type === "password") {

            input.type = "text";
            icon.classList.replace("bi-eye", "bi-eye-slash");

        } else {

            input.type = "password";
            icon.classList.replace("bi-eye-slash", "bi-eye");

        }

    });

});

/*--- Change Password Validation ---*/

const currentPassword = document.getElementById("currentPassword");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const changePasswordBtn = document.getElementById("changePasswordBtn");

if (
    currentPassword &&
    newPassword &&
    confirmPassword &&
    changePasswordBtn
) {

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    changePasswordBtn.addEventListener("click", () => {

        /*--- Current Password ---*/

        currentPassword.setCustomValidity("");

        if (currentPassword.value.trim() === "") {

            currentPassword.setCustomValidity("Please enter your current password.");
            currentPassword.reportValidity();
            currentPassword.focus();

            return;

        }

        /*--- New Password ---*/

        newPassword.setCustomValidity("");

        if (newPassword.value.trim() === "") {

            newPassword.setCustomValidity("Please enter a new password.");
            newPassword.reportValidity();
            newPassword.focus();

            return;

        }

        if (!passwordPattern.test(newPassword.value)) {

            newPassword.setCustomValidity(
                "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
            );

            newPassword.reportValidity();
            newPassword.focus();

            return;

        }

        /*--- Confirm Password ---*/

        confirmPassword.setCustomValidity("");

        if (confirmPassword.value.trim() === "") {

            confirmPassword.setCustomValidity("Please confirm your password.");
            confirmPassword.reportValidity();
            confirmPassword.focus();

            return;

        }

        if (newPassword.value !== confirmPassword.value) {

            confirmPassword.setCustomValidity("Passwords do not match.");
            confirmPassword.reportValidity();
            confirmPassword.focus();

            return;

        }

        /*--- Clear Validation ---*/

        currentPassword.setCustomValidity("");
        newPassword.setCustomValidity("");
        confirmPassword.setCustomValidity("");

        /*--- Success ---*/

        alert("Password changed successfully!");

        currentPassword.value = "";
        newPassword.value = "";
        confirmPassword.value = "";

    });

    /*--- Clear Validation While Typing ---*/

    [currentPassword, newPassword, confirmPassword].forEach((input) => {

        input.addEventListener("input", () => {

            input.setCustomValidity("");

        });

    });

}

/*--- Revenue Analytics Chart ---*/

const revenueChart = document.getElementById("revenueChart");

if (revenueChart) {

    const ctx = revenueChart.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 350);

    gradient.addColorStop(0, "rgba(59,130,246,.45)");
    gradient.addColorStop(.5, "rgba(59,130,246,.15)");
    gradient.addColorStop(1, "rgba(59,130,246,0)");

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
                    3,
                    6,
                    9,
                    14,
                    18,
                    22,
                    27,
                    31,
                    36,
                    42,
                    49,
                    58
                ],

                fill: true,

                backgroundColor: gradient,

                borderColor: "#3B82F6",

                borderWidth: 4,

                tension: .45,

                pointRadius: 5,

                pointHoverRadius: 8,

                pointBackgroundColor: "#ffffff",

                pointBorderColor: "#3B82F6",

                pointBorderWidth: 3

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            animation: {

                duration: 1800,

                easing: "easeOutQuart"

            },

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

                    titleColor: "#ffffff",

                    bodyColor: "#CBD5E1",

                    borderColor: "#3B82F6",

                    borderWidth: 1,

                    padding: 12,

                    displayColors: false,

                    callbacks: {

                        label: function (context) {

                            return " ₹ " + context.parsed.y + " Lakhs";

                        }

                    }

                }

            },

            scales: {

                x: {

                    grid: {

                        display: false

                    },

                    ticks: {

                        color: "#94A3B8",

                        font: {

                            size: 13,

                            weight: "600"

                        }

                    }

                },

                y: {

                    beginAtZero: true,

                    suggestedMax: 60,

                    ticks: {

                        stepSize: 10,

                        color: "#94A3B8",

                        callback: function (value) {

                            return value + "L";

                        }

                    },

                    grid: {

                        color: "rgba(255,255,255,.06)",

                        drawBorder: false

                    }

                }

            }

        }

    });


}