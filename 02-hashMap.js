/*
 ================================
  HASH MAP (Tabela Hash)
 ================================

 IDEIA
 Estrutura de chave -> valor que calcula a posição do dado a partir da própria
 chave (função hash). O acesso é direto: em vez de percorrer a estrutura
 procurando, vai imediatamente ao lugar onde o dado deveria estar.

 QUANDO USAR
 - Trocar uma busca repetida O(n) por consulta O(1).
 - Guardar o que já foi visto durante um laço (pré-computação).
 - Contar frequências, remover duplicatas, agrupar por chave.

 COMPLEXIDADE
 Tempo   O(1)   em média por consulta/inserção; O(n) no pior caso, com muitas colisões.
 Espaço  O(n)   precisa manter até n pares chave-valor na memória.

 LEMBRETE
 - É a troca clássica de espaço por tempo: gasta memória para não varrer a lista de novo.
 - Em JS prefira `Map` a objeto comum: o objeto converte toda chave para string
   e o `Map` preserva o tipo original (número continua número).
*/


/*
 APLICAÇÃO: Two Sum
 Dado um array e um alvo, devolve os índices dos dois números que somam o alvo.

 A força bruta compara todos os pares: O(n^2). Com hash map basta uma passada.
 Para cada número, o complemento (target - nums[i]) é o valor que falta para
 fechar a soma. Se esse complemento já foi visto, a resposta está pronta; caso
 contrário, guarda o número atual junto do seu índice e segue.

 Cada elemento é visitado uma única vez -> Tempo O(n), Espaço O(n).
*/

function twoSum(nums, target) {
    const tabela_hash = new Map()

    for (let i = 0; i < nums.length; i++) {
        const complemento = target - nums[i]

        if (tabela_hash.has(complemento)) {
            const retorno = tabela_hash.get(complemento)

            return [retorno, i]
        }

        tabela_hash.set(nums[i], i)
    }

    return []
}


// Exemplo de uso:
const numeros = [2, 7, 11, 15]

console.log("Alvo 9:", twoSum(numeros, 9))     // [0, 1]  -> 2 + 7
console.log("Alvo 26:", twoSum(numeros, 26))   // [2, 3]  -> 11 + 15
console.log("Alvo 3:", twoSum(numeros, 3))     // []      -> nenhum par soma 3
