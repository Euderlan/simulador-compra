function simularCompra() {
    // Cadastro dos produtos e seus preços
    const produtos = [
        { nome: "Minuto Extra", preco: 9.00 },
        { nome: "Memória Engarrafada", preco: 35.00 },
        { nome: "Sonho Engarrafado", preco: 50.00 }
    ];

    let total = 0;
    let recibo = "MEMÓRIA INFINITA\n";
    recibo += "RECIBO DE COMPRA SIMULADA\n";
    recibo += "------------------------------\n";

    // Solicita as quantidades de cada produto
    for (const produto of produtos) {
        const resposta = prompt(
            `Quantas unidades de ${produto.nome} deseja comprar?\n` +
            `Preço unitário: R$ ${produto.preco.toFixed(2)}\n` +
            "Digite 0 se não quiser este produto."
        );

        // Permite cancelar a simulação
        if (resposta === null) {
            alert("Simulação de compra cancelada.");
            return;
        }

        // Converte a resposta para número
        const quantidade = Number(resposta);

        // Verifica se a quantidade é válida
        if (
            resposta.trim() === "" ||
            !Number.isInteger(quantidade) ||
            quantidade < 0
        ) {
            alert(
                "Quantidade inválida!\n" +
                "Digite um número inteiro igual ou maior que zero."
            );
            return;
        }

        // Calcula o subtotal do produto
        const subtotal = produto.preco * quantidade;

        // Soma ao total da compra
        total += subtotal;

        // Adiciona os dados do produto ao recibo
        recibo += `${produto.nome}\n`;
        recibo += `Quantidade: ${quantidade}\n`;
        recibo += `Subtotal: R$ ${subtotal.toFixed(2)}\n`;
        recibo += "------------------------------\n";
    }

    // Verifica se algum produto foi selecionado
    if (total === 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    // Calcula o desconto
    let desconto = 0;

    if (total >= 80) {
        desconto = total * 0.10;
    }

    // Calcula o valor final
    const totalFinal = total - desconto;

    // Completa o recibo
    recibo += `Subtotal da compra: R$ ${total.toFixed(2)}\n`;
    recibo += `Desconto: R$ ${desconto.toFixed(2)}\n`;
    recibo += "------------------------------\n";
    recibo += `TOTAL: R$ ${totalFinal.toFixed(2)}\n`;
    recibo += "------------------------------\n";
    recibo += "STATUS: SIMULAÇÃO CONCLUÍDA";

    // Exibe o resultado
    alert(recibo);
}