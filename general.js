const nums = []
const target = 0

function twoSum (nums, target) {
    const tabela_hash = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complemento = target - nums[i]

        if (tabela_hash.has(complemento)) {
            const retorno = tabela_hash.get(complemento)
            
            return [retorno, i]
        }

        tabela_hash.set(nums[i], i)
    }
    
    return [];
};

function returnIndexTarget (nums, target) {
    for(let i=0; i < nums.length; i++) {
        
        if(nums[i] === target) {
            return i
        }
    }

    return -1
}


function returnIndexTargetBinario (nums, target) {
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
            inicio = half + 1;
        }
    }
    return -1
}

function bubbleSortWhileFor(arr) {
  let swapped = true;
  let i = 0;

  while (swapped) {
    swapped = false; 


    // len - i - 1 ignora os elementos que já foram "empurrados" para o final
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    i++; // Incrementa as passadas para otimizar o próximo loop interno
  }

  return arr;
}

function SelectionSort(arr) {
    let menor = 0;

    for (let l = 0; l < arr.length; l++) {
        menor = l
        
        for(let i = l + 1; i < arr.length; i++) {
            if(arr[i] < menor) {
                menor = i;
            }
        }
        
        let temp = arr[0]
        arr[0] = arr[menor]
        arr[menor] = temp
    }
    
    return arr
}

// Exemplo de uso:
const lista = [8, 3, 5, 2] ;
console.log("Array Ordenado:", SelectionSort(lista));
