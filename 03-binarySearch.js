/*
 ================================
  BUSCA BINÁRIA (Binary Search)
 ================================

 IDEIA
 Olha o elemento do meio do intervalo e o compara com o alvo. Se o meio for
 maior, o alvo só pode estar na metade da esquerda; se for menor, só na direita.
 A cada comparação metade dos candidatos é descartada, até sobrar um ou nenhum.

 PRÉ-REQUISITO
 O array PRECISA estar ordenado. Em array desordenado o resultado é lixo, não
 erro: a função descarta metades com base numa ordem que não existe.

 QUANDO USAR
 - Dado ordenado e consultado várias vezes.
 - Busca em faixa de valores (ex.: achar o primeiro item >= X).
 - Alternativa ao Hash Map quando a ordem importa ou a memória é limitada.

 COMPLEXIDADE
 Tempo   O(log n)   cada passo corta o espaço de busca pela metade:
                    1.000.000 de itens -> ~20 comparações.
 Espaço  O(1)       versão iterativa usa só os ponteiros inicio/fim/meio.
                    (A versão recursiva gastaria O(log n) na pilha de chamadas.)

 LEMBRETE
 - Ordenar custa O(n log n). Só compensa se houver muitas buscas depois.
 - Array desordenado e busca única -> Busca Linear O(n) é mais simples e direta.
 - O laço é `inicio <= fim`: com `<` o último elemento nunca seria testado.
*/


// Retorna o índice de `target` em `nums` ORDENADO, ou -1 se não existir.
function returnIndexTargetBinario(nums, target) {
    let inicio = 0
    let fim = nums.length - 1

    while (inicio <= fim) {
        const half = Math.floor((inicio + fim) / 2)

        if (nums[half] === target) {
            return half
        }

        if (nums[half] > target) {
            fim = half - 1
        } else {
            inicio = half + 1
        }
    }

    return -1
}


// Exemplo de uso:
const ordenada = [2, 3, 5, 8, 13, 21, 34]

console.log("Índice do 13:", returnIndexTargetBinario(ordenada, 13))   // 4
console.log("Índice do 2:", returnIndexTargetBinario(ordenada, 2))     // 0
console.log("Índice do 9:", returnIndexTargetBinario(ordenada, 9))     // -1
