import { watch, reactive, computed } from 'vue'

//interface da calculadora
interface Calculadora {
  operador: string
  firstNumber: number | null
  secondNumber: number | null
  results: number | string
}
// função que exporta a calculadora
export function useCalculadora() {
  // gerenciamento do estado
  const estado = reactive<Calculadora>({
    operador: 'add',
    firstNumber: null,
    secondNumber: null,
    results: '0.00'
  })
  // computa a troca de operador
  const calcular = computed(() => {
    const { operador, firstNumber, secondNumber } = estado
    if (firstNumber === null || secondNumber === null) return '0.00'

    let result: string | number

    switch (operador) {
      case 'add':
        result = firstNumber + secondNumber
        break
      case 'subtract':
        result = firstNumber - secondNumber
        break
      case 'multiply':
        result = firstNumber * secondNumber
        break
      case 'divide':
        result = secondNumber !== 0 ? firstNumber / secondNumber : 'Erro: divisão por zero'
        break

      default:
        result = 0
    }
    // retorna o resultado apenas com duas casas decimais
    return typeof result === 'number' ? result.toFixed(2) : result
  })
  // função que aguarda alteração no estado para renderiza-lo novamente
  watch(
    () => [estado.operador, estado.firstNumber, estado.secondNumber],
    () => {
      estado.results = calcular.value
    }
  )
  return {
    estado,
    calcular
  }
}
