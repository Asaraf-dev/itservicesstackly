/*--- AUTH PAGE ---*/

document.addEventListener("DOMContentLoaded", () => {

    /*--- Global Animations ---*/

    if (document.querySelector(".login-card")) {

        reveal(".login-card");

        cardTilt(".login-card", 6, 8);

        spotlight(".login-card");

    }

    /*--- Mouse Spotlight ---*/

    const loginCard = document.querySelector(".login-card");

    if (loginCard) {

        loginCard.addEventListener("mousemove", (e) => {

            const rect = loginCard.getBoundingClientRect();

            loginCard.style.setProperty("--x", (e.clientX - rect.left) + "px");

            loginCard.style.setProperty("--y", (e.clientY - rect.top) + "px");

        });

    }

    /*--- Password Toggle ---*/

    function passwordToggle(buttonSelector, inputSelector) {

        const button = document.querySelector(buttonSelector);

        const input = document.querySelector(inputSelector);

        if (!button || !input) return;

        button.addEventListener("click", () => {

            const icon = button.querySelector("i");

            if (input.type === "password") {

                input.type = "text";

                icon.classList.replace("bi-eye", "bi-eye-slash");

            }

            else {

                input.type = "password";

                icon.classList.replace("bi-eye-slash", "bi-eye");

            }

        });

    }

    passwordToggle(".login-password-toggle", "#loginPassword");

    passwordToggle(".login-confirm-password-toggle", "#confirmPassword");

    /*--- Client / Admin Switch ---*/

    const clientRole = document.getElementById("clientRole");

    const adminRole = document.getElementById("adminRole");

    const title = document.querySelector(".login-title");

    const description = document.querySelector(".login-description");

    const badge = document.querySelector(".login-badge");

    if (clientRole && adminRole && title && description && badge) {

        function updateRole() {

            const isRegister = document.querySelector(".register-card");

            if (clientRole.checked) {

                badge.innerHTML =
                    "<i class='bi bi-person-check-fill'></i> Client Portal";

                if (isRegister) {

                    title.textContent = "Create Your Account";

                    description.textContent =
                        "Join our platform to access secure tools, manage projects, collaborate efficiently, and experience powerful business solutions.";

                }

                else {

                    title.textContent = "Welcome Back";

                    description.textContent =
                        "Sign in to securely access your dashboard and manage your account.";

                }

            }

            if (adminRole.checked) {

                badge.innerHTML =
                    "<i class='bi bi-shield-lock-fill'></i> Admin Portal";

                if (isRegister) {

                    title.textContent = "Create Administrator Account";

                    description.textContent =
                        "Register as an administrator to securely manage clients, projects, reports, and business operations.";

                }

                else {

                    title.textContent = "Administrator Portal";

                    description.textContent =
                        "Secure administrator access to manage users, projects, reports, and platform settings.";

                }

            }

        }

        updateRole();

        clientRole.addEventListener("change", updateRole);

        adminRole.addEventListener("change", updateRole);

    }

    /*--- LOGIN PAGE ---*/

    const loginForm = document.querySelector(".login-form");

    const isRegister = document.querySelector(".register-card");

    if (loginForm && !isRegister) {

        loginForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const username = loginForm.querySelector("input[type='email']").value.trim();

            const password = document.getElementById("loginPassword").value.trim();

            if (username === "" || password === "") {

                alert("Please fill in all required fields.");

                return;

            }

            if (clientRole.checked) {

                window.location.href = "client-dashboard.html";

                return;

            }

            if (adminRole.checked) {

                window.location.href = "admin-dashboard.html";

                return;

            }

        });

    }

    /*--- REGISTER PAGE ---*/

    /*--- REGISTER PAGE ---*/

    if (loginForm && isRegister) {

        loginForm.addEventListener("submit", function (e) {

            if (!this.checkValidity()) {

                e.preventDefault();

                this.reportValidity();

                return;

            }

            const password = document.getElementById("loginPassword");

            const confirmPassword = document.getElementById("confirmPassword");

            if (password.value !== confirmPassword.value) {

                e.preventDefault();

                confirmPassword.setCustomValidity("Passwords do not match.");

                confirmPassword.reportValidity();

                return;

            }

            confirmPassword.setCustomValidity("");

            e.preventDefault();

            const modal = new bootstrap.Modal(
                document.getElementById("registerSuccessModal")
            );

            modal.show();

            document
                .getElementById("registerSuccessBtn")
                .addEventListener("click", () => {

                    window.location.href = "login.html";

                });

        });

        document.getElementById("confirmPassword").addEventListener("input", function () {

            this.setCustomValidity("");

        });

    }

});