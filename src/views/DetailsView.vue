<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { deleteData, formatarData, formatarCPF, formatarRG } from '../utils/api';

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const pessoa = ref(route.query);


const editarPessoa = () => {
  router.push({ name: 'edit', params: { id: pessoa.value.id_pessoa } });
};

const confirmarExclusao = () => {
  if (window.confirm('Tem certeza que deseja excluir esta pessoa?')) {
    excluirPessoa();
  }
};

const excluirPessoa = async () => {
  const result = await deleteData(id);
  if (result) {
    router.push('/');
  }
};
</script>

<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">
        <h2>Detalhes da Pessoa</h2>
      </div>
      <div class="card-body">
        <div>
          <h5>Nome:</h5>
          <p>{{ pessoa.nome }}</p>
        </div>
        <div>
          <h5>RG:</h5>
          <p>{{ formatarRG(pessoa.rg) }}</p>
        </div>
        <div>
          <h5>CPF:</h5>
          <p>{{ formatarCPF(pessoa.cpf) }}</p>
        </div>
        <div>
          <h5>Data de Nascimento:</h5>
          <p>{{ formatarData(pessoa.data_nascimento) }}</p>
        </div>
        <div>
          <h5>Data de Admissão:</h5>
          <p>{{ formatarData(pessoa.data_admissao) }}</p>
        </div>
        <div>
          <h5>Função:</h5>
          <p>{{ pessoa.funcao }}</p>
        </div>
        <div class="mt-3">
          <button @click="editarPessoa" class="btn btn-warning me-2">Editar</button>
          <button @click="confirmarExclusao" class="btn btn-danger">Excluir</button>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
</template>

<style scoped>

</style>
