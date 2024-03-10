 // Função para mudar o estilo ao clicar
 function mudarEstilo(event) {
    // Evitar o comportamento padrão do link (navegação)
    event.preventDefault();

    // Adiciona ou remove a classe "clicado" ao elemento <a>
    var linkElement = document.getElementById('link');
    linkElement.classList.toggle('clicked');
}

// Adiciona um ouvinte de eventos ao <a> para capturar cliques
document.getElementById('link').addEventListener('click', mudarEstilo);