console.log("Script carregado");

// Função para definir um cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

// Executa quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Verifica se o cookie foi aceito
    if (getCookie("cookiesAccepted")) {
        document.getElementById('cookie-banner').style.display = 'none';
    } else {
        document.getElementById('cookie-banner').style.display = 'block';
    }

    // Configura o botão de aceitar cookies
    document.getElementById('accept-cookies').addEventListener('click', function() {
        setCookie("cookiesAccepted", "true", 365); // Define o cookie para expirar em 365 dias
        document.getElementById('cookie-banner').style.display = 'none'; // Oculta o banner
    });
});



