const navbar = document.querySelector(".navbar-ativo");
const botaoAcessarPaciente = document.querySelector("#botao-acessar");
const containerApp = document.querySelector(".container-app");
const botaoFechar = document.querySelector(".botao-fechar");
const acessoNavbar = document.querySelector(".acesso-navbar")

botaoAcessarPaciente.addEventListener("click", () => {
    navbar.classList.remove("navbar-ativo");
    navbar.classList.add("navbar");

    containerApp.classList.remove("container-app");
    containerApp.classList.add("container-app-ativo");
});


acessoNavbar.addEventListener("click", () => {
    navbar.classList.remove("navbar-ativo");
    navbar.classList.add("navbar");

    containerApp.classList.remove("container-app");
    containerApp.classList.add("container-app-ativo");
});

botaoFechar.addEventListener("click", () => {
    navbar.classList.remove("navbar");
    navbar.classList.add("navbar-ativo");

    containerApp.classList.remove("container-app-ativo");
    containerApp.classList.add("container-app");

});
