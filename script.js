/* =====================================================
   CANDIDATE LOGIN SETTINGS
===================================================== */

const CORRECT_ROLL_NUMBER = "123456";

const CORRECT_PASSWORD = "Password123";


/* =====================================================
   LOGIN SYSTEM
===================================================== */

const loginForm =
    document.getElementById("candidateLogin");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const rollNumber =
                document
                .getElementById("rollNumber")
                .value
                .trim();


            const password =
                document
                .getElementById("password")
                .value;


            const errorMessage =
                document
                .getElementById("errorMessage");


            /* ==========================
               CORRECT LOGIN
            ========================== */

            if (
                rollNumber === CORRECT_ROLL_NUMBER &&
                password === CORRECT_PASSWORD
            ) {

                errorMessage.textContent = "";

                window.location.href = "pdf-viewer.html";

            }


            /* ==========================
               WRONG LOGIN
            ========================== */

            else {

                errorMessage.textContent =
                    "Invalid Roll Number or Password";

            }

        }
    );

}