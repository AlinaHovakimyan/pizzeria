document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    
    fetch("send_email.php", {
        method: "POST",
        body: formData
    }).then(response => response.text())
      .then(data => alert(data));
});
