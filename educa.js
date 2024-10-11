//aqui adicionamos um evento de escutar o click do mouse sobre o icone de hamburguer.
hamburguerButton.addEvetLístener("click", function () { 
    mobileMenu.classList.add("flex");
    //criamos uma função que a ouvir o click do mouse, ele adicione uma Class, que está fazendo nossa caixa (Div)   aparecer, ou seja, ficar invisível
});


//Criamos uma função que a ouvir o click do mouse, ele REMOVE uma Class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
closebutton.addventListener("click", function () {
    mobileMenu.classList.remove("flex");
});