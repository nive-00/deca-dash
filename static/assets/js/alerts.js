function openConfirmation() {
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "block";
}

function closeConfirmation() {
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "none";
}

function proceedToCheckout() {
    window.location.href = "checkout_page.html";
    closeConfirmation();
}

function finalConfirmation() {
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "block";
}

function closeConfirmation() {
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "none";
}

function proceedToDashboard() {
    window.location.href = "customer_dashboard.html";
    closeConfirmation();
}