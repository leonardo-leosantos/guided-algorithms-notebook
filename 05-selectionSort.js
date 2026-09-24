/*
 ================================
  SELECTION SORT (Ordenação por Seleção)
 ================================

 IDEIA
 Divide o array em duas partes: a ordenada (à esquerda) e a não ordenada.
 A cada passada varre a parte não ordenada inteira procurando o MENOR valor
 e o troca com o primeiro elemento dessa parte. A fronteira entre as duas
 avança uma posição por passada.

 QUANDO USAR
 Estudo, ou quando ESCREVER na memória é caro: faz no máximo n-1 trocas,
 enquanto o Bubble Sort pode fazer O(n^2). Para produção, `Array.prototype.sort()`.

 COMPLEXIDADE
 Tempo   O(n^2)   SEMPRE — inclusive com o array já ordenado. Diferente do
                  Bubble Sort, não existe saída antecipada: a busca pelo menor
                  precisa varrer todo o trecho restante para ter certeza.
 Espaço  O(1)     ordena in-place, usando só a variável `menor` e a temporária.

 LEMBRETE
 - `menor` guarda um ÍNDICE, não um valor. A comparação tem que ser
   `arr[i] < arr[menor]` (valor com valor); comparar `arr[i] < menor` é o erro
   clássico e silencioso, porque não quebra, só devolve uma lista errada.
 - A troca é com `arr[l]` (início do trecho não ordenado), nunca com `arr[0]` fixo.
 - NÃO é estável: a troca a longa distância pode inverter elementos iguais.
 - ATENÇÃO: modifica o array recebido (não devolve uma cópia).
*/


// Ordena `arr` in-place em ordem crescente e devolve a referência do próprio array.
function SelectionSort(arr) {
    let menor = 0

    for (let l = 0; l < arr.length; l++) {
        menor = l // assume que o primeiro do trecho não ordenado é o menor

        for (let i = l + 1; i < arr.length; i++) {
            if (arr[i] < arr[menor]) {
                menor = i
            }
        }

        let temp = arr[l]
        arr[l] = arr[menor]
        arr[menor] = temp
    }

    return arr
}


// Exemplo de uso:
const lista = [8, 3, 5, 2]

console.log("Array Ordenado:", SelectionSort(lista))   // [2, 3, 5, 8]
