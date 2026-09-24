# Caderno de Algoritmos

Estudo guiado de algoritmos e estruturas de dados em JavaScript puro.

Cada arquivo numerado cobre **um** algoritmo e segue sempre o mesmo formato:

1. **Cabeçalho** — resumo para consulta rápida: `IDEIA`, `QUANDO USAR`,
   `COMPLEXIDADE` e `LEMBRETE` (as pegadinhas e as alternativas melhores).
2. **Implementação** — comentada, com o contrato da função em uma linha.
3. **Exemplo de uso** — executável, cobrindo o caso normal e o caso limite.

Sem dependências e sem build. Para rodar qualquer arquivo:

```bash
node 01-linearSearch.js
```

---

## Índice

| Arquivo | Algoritmo | Tempo | Espaço |
|---|---|---|---|
| [01-linearSearch.js](01-linearSearch.js) | Busca Linear | `O(n)` | `O(1)` |
| [02-hashMap.js](02-hashMap.js) | Hash Map + Two Sum | `O(1)` médio | `O(n)` |
| [03-binarySearch.js](03-binarySearch.js) | Busca Binária | `O(log n)` | `O(1)` |
| [04-bubbleSort.js](04-bubbleSort.js) | Bubble Sort | `O(n²)` | `O(1)` |
| [05-selectionSort.js](05-selectionSort.js) | Selection Sort | `O(n²)` | `O(1)` |

---

## Busca

**[Busca Linear](01-linearSearch.js)** — `O(n)`
Percorre cada elemento sequencialmente até encontrar o alvo. Não exige
pré-processamento, o que a torna a escolha certa para array pequeno,
desordenado ou consultado uma única vez.

**[Busca Binária](03-binarySearch.js)** — `O(log n)`
Compara o elemento do meio com o alvo e descarta metade dos candidatos a cada
passo. Exige o array **ordenado**: sem isso não dá erro, devolve resultado
inválido em silêncio.

## Acesso Constante

**[Hash Map](02-hashMap.js)** — `O(1)` médio
Estrutura fundamental para acesso direto e ideal para táticas de pré-computação
e otimização de buscas. O arquivo aplica a estrutura no problema **Two Sum**,
trocando a força bruta `O(n²)` por uma única passada `O(n)`.

## Ordenação Quadrática — `O(n²)`

**[Bubble Sort](04-bubbleSort.js)**
Ordena a lista trocando elementos adjacentes, empurrando os maiores valores para
as posições mais altas. É estável e cai para `O(n)` quando a lista já está
ordenada, graças à saída antecipada.

**[Selection Sort](05-selectionSort.js)**
Varre a lista iterativamente para encontrar o menor valor e posicioná-lo no
início. É `O(n²)` sempre — não tem saída antecipada —, mas faz no máximo `n-1`
trocas, o que ajuda quando escrever na memória é caro.

**Insertion Sort** — _pendente_
Constrói uma nova sequência ordenada progressivamente, inserindo cada elemento
na sua posição correta a partir da lista existente.

## Ordenação Otimizada — `O(n log n)`

**Quick Sort** — _pendente_
Elege um elemento como pivô, divide a lista entre valores menores e maiores, e
aplica a ordenação recursivamente nas sublistas.

**Heap Sort** — _pendente_
Transforma os dados em uma estrutura de árvore (heap máximo) e extrai os
elementos ordenadamente, um a um.

---

## Rascunho

[general.js](general.js) é o espaço para escrever e testar uma implementação
antes de promovê-la a um arquivo numerado do caderno.
