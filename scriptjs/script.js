// Função para definir um cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    console.log("Cookie set: " + document.cookie);
}

// Função para ler um cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Quando a página carrega
document.addEventListener("DOMContentLoaded", function() {
    // Verifica se o cookie foi aceito ou rejeitado
    if (getCookie("cookiesAccepted") || getCookie("cookiesRejected")) {
        document.getElementById('cookie-banner').style.display = 'none';
    } else {
        document.getElementById('cookie-banner').style.display = 'block';
    }

    // Configura o botão de aceitar cookies
    document.getElementById('accept-cookies').addEventListener('click', function() {
        setCookie("cookiesAccepted", "true", 365); // Define o cookie para expirar em 365 dias
        document.getElementById('cookie-banner').style.display = 'none'; // Oculta o banner
    });

    // Configura o botão de rejeitar cookies
    document.getElementById('reject-cookies').addEventListener('click', function() {
        setCookie("cookiesRejected", "true", 365); // Define o cookie de rejeição para expirar em 365 dias
        document.getElementById('cookie-banner').style.display = 'none'; // Oculta o banner
    });
});


//card projeto função

document.addEventListener("DOMContentLoaded", function() {
    var projectHeaders = document.querySelectorAll('.project-header');

    projectHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
