<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { mostrarPrimeiroNome, formatarData, deleteData } from '../utils/api'



const router = useRouter()

const props = defineProps(['pessoas'])
const pessoas = ref(props.pessoas)
console.log('Pessoas:', pessoas.value)

const verMais = (pessoa) => {
  router.push({ name: 'details', params: { id: pessoa.id_pessoa }, query: {...pessoa} });
};

const editarPessoa = (id) => {
  console.log('Editar pessoa:', id)
  router.push({ name: 'edit', params: { id } })
}

const confirmarExclusao = (id) => {
  if (window.confirm('Tem certeza que deseja excluir esta pessoa?')) {
    excluirPessoa(id)
  }
}

const excluirPessoa = async (id) => {
  const result = await deleteData(id)
  if (result) {
    window.location.reload(true);
  }
}
</script>

<template>
  <div class="table-container">
    <table class="table table-hover" role="table" aria-label="Tabela de Pessoas">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Data de Admissão</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pessoa in pessoas" :key="pessoa.id_pessoa">
          <th scope="row">{{ pessoa.id_pessoa }}</th>
          <td>{{ mostrarPrimeiroNome(pessoa.nome) }}</td>
          <td>{{ formatarData(pessoa.data_admissao) }}</td>
          <td>
            <div class="button-container">
              <button @click="verMais(pessoa)" type="button" class="btn btn-primary">
                Ver Mais
              </button>
              <button
                @click="editarPessoa(pessoa.id_pessoa)"
                type="button"
                class="btn btn-warning btn-sm"
              >
                Editar
              </button>
              <button
                @click="confirmarExclusao(pessoa.id_pessoa)"
                type="button"
                class="btn btn-danger btn-sm"
              >
                Excluir
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <div id="add">
    <router-link type="button" class="btn btn-primary" to="/cad">Adicionar Registro</router-link>
  </div>
  <br /><br />



 
 


</template>

<style>
#add {
  display: grid;
  justify-content: end;
  margin-bottom: 5vh;
}

.table-container {
  width: 100%;
  overflow-x: auto;
}

.button-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .button-container {
    flex-direction: column;
  }
}
</style>
