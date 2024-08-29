const arquivo = document.querySelector('#imagem');
const inserirImagem = document.querySelector('.inserirImagem');
const textoImagem = "Inserir Imagem";

inserirImagem.innerHTML = textoImagem;

arquivo.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(e) {
            const readTarget = e.target;

            const img = document.createElement('img');
            img.src = readTarget.result;
            img.classList.add('previewImagem');

            inserirImagem.innerHTML = "";
            inserirImagem.appendChild(img);
        });

        reader.readAsDataURL(file); 
    } else {
        inserirImagem.innerHTML = textoImagem;
    }
});


document.getElementById("form-patrimonio").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Patrimônio registrado com sucesso!");

    let imagem = document.getElementById("imagem").value;
    console.log('Imagem: ' +imagem);

    let numeroPatrimonio = document.getElementById("numeroPatrimonio").value;
    console.log('Número do Patrimônio: ' +numeroPatrimonio);

    let descricaoBem = document.getElementById("descricaoBem").value;
    console.log('Descrição do Bem: ' +descricaoBem);

    let dataAquisicao = document.getElementById("dataAquisicao").value;
    console.log('Data de Aquisição: ' +dataAquisicao);

    let valorBem = document.getElementById("valorBem").value;
    console.log('Valor do Bem: ' +valorBem);

    let localizacao = document.getElementById("localizacao").value;
    console.log('Localização: ' +localizacao);

    let estadoConservacao = document.getElementById("estadoConservacao").value;
    console.log('Estado de Conservação: ' +estadoConservacao);

    let responsavel = document.getElementById("responsavel").value;
    console.log('Responsável: ' +responsavel);

    let observacoes = document.getElementById("observacoes").value;
    console.log('Observações: ' +observacoes);

    
});