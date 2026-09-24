/*
 ================================
  BUBBLE SORT (Ordenação por Flutuação)
 ================================

 IDEIA
 Compara pares de elementos VIZINHOS e troca os que estiverem fora de ordem.
 A cada passada completa o maior valor restante "flutua" até o fim do array.
 Repete enquanto houver troca; quando uma passada inteira não troca nada,
 a lista já está ordenada.

 QUANDO USAR
 Na prática, quase nunca — serve para estudo e para listas muito pequenas ou
 quase ordenadas. Para produção, `Array.prototype.sort()`.

 COMPLEXIDADE
 Tempo   O(n^2)   médio e pior caso: n passadas x n comparações.
 Tempo   O(n)     melhor caso (já ordenado): a flag `swapped` encerra na 1a passada.
 Espaço  O(1)     ordena in-place, trocando dentro do próprio array.

 LEMBRETE
 - `swapped` é a otimização de saída antecipada: sem ela, sempre seriam n passadas.
 - `arr.length - i - 1` encurta o laço interno: a cauda já está ordenada,
   não faz sentido revisitá-la.
 - É ESTÁVEL: elementos de valor igual mantêm a ordem relativa original.
 - ATENÇÃO: modifica o array recebido (não devolve uma cópia).
*/


// Ordena `arr` in-place em ordem crescente e devolve a referência do próprio array.
function bubbleSortWhileFor(arr) {
    let swapped = true
    let i = 0

    while (swapped) {
        swapped = false

        // length - i - 1 ignora os elementos que já foram "empurrados" para o final
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                swapped = true
            }
        }

        i++ // Incrementa as passadas para otimizar o próximo laço interno
    }

    return arr
}


// Exemplo de uso:
const desordenada = [8, 3, 5, 2, 13, 1]
const jaOrdenada = [1, 2, 3, 4, 5]

console.log("Desordenada:", bubbleSortWhileFor(desordenada))   // [1, 2, 3, 5, 8, 13]
console.log("Já ordenada:", bubbleSortWhileFor(jaOrdenada))    // [1, 2, 3, 4, 5]
