/*
 ================================
  BUSCA LINEAR (Linear Search)
 ================================

 IDEIA
 Percorre a estrutura elemento por elemento, do início ao fim, comparando cada
 item com o alvo. Para na primeira ocorrência e devolve a posição dela.
 Se chegar ao fim sem encontrar, devolve -1.

 QUANDO USAR
 - Array pequeno ou não ordenado: não exige nenhum pré-processamento.
 - Estruturas sem acesso indexado eficiente (ex.: listas encadeadas).
 - Busca pontual: ordenar o array só para buscar uma única vez não compensa.

 COMPLEXIDADE
 Tempo   O(n)   no pior caso visita os n elementos; o custo cresce junto com a lista.
 Espaço  O(1)   aloca apenas o contador do laço, independente do volume de dados.

 LEMBRETE
 - Array já ordenado?          -> Busca Binária, O(log n).
 - Muitas buscas no mesmo dado? -> Hash Map, O(1) por consulta após montar a tabela.
*/


// Retorna o índice da primeira ocorrência de `target` em `nums`, ou -1 se não existir.
function returnIndexTarget(nums, target) {
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === target) {
            return i
        }
    }

    return -1
}


// Exemplo de uso:
const list = [8, 3, 5, 2]

console.log("Índice do 5:", returnIndexTarget(list, 5))   // 2
console.log("Índice do 9:", returnIndexTarget(list, 9))   // -1
