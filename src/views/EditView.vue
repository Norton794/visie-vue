<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { formatarCPF, formatarRG, baseURL } from '../utils/api'

const route = useRoute()
const router = useRouter()
const id_pessoa = route.params.id

const formData = ref({
  nome: '',
  rg: '',
  cpf: '',
  data_nascimento: '',
  data_admissao: '',
  funcao: ''
})

const submitForm = async () => {
  try {
    const response = await fetch(`${baseURL}${id_pessoa}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })

    console.log(JSON.stringify(formData.value))

    if (response.ok) {
      alert('Registro atualizado com sucesso.')
      router.push(`/`)
    } else {
      alert('Falha ao atualizar o registro.', response)
      console.log(JSON.stringify(formData))
    }
  } catch (error) {
    console.error('Erro ao enviar os dados:', error)
  }
}

onMounted(async () => {
  try {
    const response = await fetch(`${baseURL}${id_pessoa}`)
    const data = await response.json()
    formData.value.nome = data.nome
    formData.value.rg = data.rg
    formData.value.cpf = data.cpf
    formData.value.data_nascimento = data.data_nascimento
    formData.value.data_admissao = data.data_admissao
    formData.value.funcao = data.funcao
  } catch (error) {
    console.error('Erro ao obter detalhes da pessoa:', error)
  }
})
</script>
<template>
  <div class="container">
    <h1>Editar Registro</h1>
    <form @submit.prevent="submitForm" role="form">
      <div class="form-group col-md-12">
        <label for="nome">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          v-model="formData.nome"
          required
          aria-required="true"
        />
      </div>

      <div class="row">
        <div class="form-group col-md-6">
          <label for="rg">RG</label>
          <input
            type="text"
            class="form-control"
            id="rg"
            :value="formatarRG(formData.rg)"
            @input="atualizarRG($event.target.value)"
            required
            aria-required="true"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="cpf">CPF</label>
          <input
            type="text"
            class="form-control"
            id="cpf"
            :value="formatarCPF(formData.cpf)"
            @input="atualizarCPF($event.target.value)"
            required
            aria-required="true"
          />
        </div>
      </div>

      <div class="row">
        <div class="form-group col-md-6">
          <label for="data_nascimento">Data de Nascimento</label>
          <input
            type="date"
            class="form-control"
            id="data_nascimento"
            v-model="formData.data_nascimento"
            required
            aria-required="true"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="data_admissao">Data de Admissão</label>
          <input
            type="date"
            class="form-control"
            id="data_admissao"
            v-model="formData.data_admissao"
            required
            aria-required="true"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="funcao">Função</label>
        <input type="text" class="form-control" id="funcao" v-model="formData.funcao" />
      </div>
      <br />
      <div class="mt-3">
        <router-link class="btn btn-secondary me-2" to="/">Cancelar</router-link>
        <button type="submit" class="btn btn-primary">Atualizar</button>
      </div>
    </form>
  </div>
</template>

<style></style>
