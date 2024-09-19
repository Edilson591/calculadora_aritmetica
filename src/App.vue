<script setup lang="ts">
import AppHeader from './components/Header.vue'
import { useCalculadora } from './components/useCalculadora'

// função externa importada
const { estado } = useCalculadora()
</script>

<template>
  <div class="p-6 bg-cyan-800 rounded-lg w-full max-w-md">
    <AppHeader />
    <main class="mt-4">
      <div class="p-4 text-center">
        <h2 class="text-xl font-semibold mb-2 text-white">Selecione o Operador:</h2>
        <select
          v-model="estado.operador"
          class="border border-gray-500 rounded-md p-1 bg-white text-gray-800"
        >
          <option value="add">Adição (+)</option>
          <option value="subtract">Subtração (-)</option>
          <option value="multiply">Multiplicação (×)</option>
          <option value="divide">Divisão (÷)</option>
        </select>
      </div>
      <div class="flex gap-2 justify-center">
        <div class="text-center mb-4">
          <input
            type="number"
            v-model.number="estado.firstNumber"
            placeholder="Número 1"
            class="border border-gray-300 rounded-md p-1 bg-white text-gray-800 max-w-24 outline-none"
          />
        </div>
        <div class="text-center mb-4">
          <input
            type="number"
            v-model.number="estado.secondNumber"
            placeholder="Número 2"
            class="border border-gray-300 rounded-md p-1 bg-white text-gray-800 max-w-24 outline-none"
          />
        </div>
      </div>
      <p class="text-center text-white">Resultado: {{ estado.results }}</p>
    </main>
  </div>
</template>

<style scoped></style>
