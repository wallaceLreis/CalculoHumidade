document.getElementById('calculoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const humidade = parseFloat(document.getElementById('humidade').value);
    const quantsaca = parseFloat(document.getElementById('quantsaca').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const subtracao = 13.5;

    if (!isNaN(humidade) && !isNaN(quantsaca) && !isNaN(peso) && humidade > subtracao) {
        const resultado = humidade - subtracao;
        const multiplicacao = resultado * quantsaca;
        const resultadoFinal = Math.abs(multiplicacao - peso);
        const quantidadeSacas = resultadoFinal / 60;

        // Atualizando os resultados nos spans
        document.getElementById('humidadeResultado').innerHTML = '<span class="resp">' + resultado.toFixed(1) + '</span>';
        document.getElementById('quantsacaResultado').innerHTML = '<span class="resp">' + multiplicacao.toFixed(2) + '</span>';
        document.getElementById('pesoResultado').innerHTML = '<span class="resp">' + resultadoFinal.toFixed(0) + '</span>';
        document.getElementById('quantidadeSacasResultado').innerHTML = '<span class="resp">' + quantidadeSacas.toFixed(2) + '</span>';
    } else {
        document.getElementById('resultado').textContent = 'A humidade deve ser acima de 13.5';
    }
});
