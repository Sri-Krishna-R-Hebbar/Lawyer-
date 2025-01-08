document.addEventListener("DOMContentLoaded", function() {
    const switchLawyer = document.querySelector(".switch-lawyer input");
    const containerLawyer = document.getElementById("container-lawyer");
    const containerClient = document.getElementById("container-client");

    switchLawyer.addEventListener("change", function() {
        if (switchLawyer.checked) {
            // If the switch is checked, show the Client section
            hideContainer(containerLawyer, function() {
                showContainer(containerClient);
            });
        } else {
            // If the switch is unchecked, show the Lawyer section
            hideContainer(containerClient, function() {
                showContainer(containerLawyer);
            });
        }
    });

    function hideContainer(container, callback) {
        container.style.opacity = "0";
        container.style.height = "0";

        setTimeout(function() {
            container.style.display = "none";
            callback();
        }, 100); // Adjust the duration based on your transition time
    }

    function showContainer(container) {
        container.style.display = "grid";
        setTimeout(function() {
            container.style.opacity = "1";
            container.style.height = "100%";
        }, 100);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const switchClient = document.querySelector(".switch-client input");
    const containerClient = document.getElementById("container-client");
    const containerLawyer = document.getElementById("container-lawyer");

    switchClient.addEventListener("change", function() {
        if (switchClient.checked) {
            // If the switch is checked, show the Client section
            hideContainer(containerClient, function() {
                showContainer(containerLawyer);
                
            });
        } else {
            // If the switch is unchecked, show the Lawyer section
            hideContainer(containerLawyer, function() {
                showContainer(containerClient);
            });
        }
    });

    function hideContainer(container, callback) {
        container.style.opacity = "0";
        container.style.height = "0";

        setTimeout(function() {
            container.style.display = "none";
            callback();
        }, 100); // Adjust the duration based on your transition time
    }

    function showContainer(container) {
        container.style.display = "grid";
        setTimeout(function() {
            container.style.opacity = "1";
            container.style.height = "100%";
        }, 100);
    }
});

