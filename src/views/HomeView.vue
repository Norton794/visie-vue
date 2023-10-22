<script setup>
import { onMounted } from 'vue';
import Table from '../components/Table.vue';
import usePessoas from '../hooks/usePessoas';

const { pessoas, carregarPessoas } = usePessoas();
console.log(pessoas)

onMounted(carregarPessoas);


</script>

<template>
<main class="container">
<Table v-if="pessoas" :pessoas="pessoas" />
</main>
</template>


<style>

</style>
