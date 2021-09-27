'use strict';

const pesquisarCep = () => {
    const cep= document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(responde => responde.json()).then(console.log);
    
}

document.getElementById("cep").addEventListener('focusout',pesquisarCep);