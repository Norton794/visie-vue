<script setup>
import { ref } from 'vue';
import { formatarRG, formatarCPF} from '../utils/api';



const formData = ref({
  nome: '',
  rg: '',
  cpf: '',
  data_nascimento: '',
  data_admissao: '',
  funcao: ''
})

const limparCampos = () => {
  formData.value.nome = ''
  formData.value.rg = ''
  formData.value.cpf = ''
  formData.value.data_nascimento = ''
  formData.value.data_admissao = ''
  formData.value.funcao = ''
}

const submitForm = async () => {
  try {
    const dataToSend = {
      ...formData,
      rg: formatarRG(formData.value.rg),
      cpf: formatarCPF(formData.value.cpf)
    };

    const response = await fetch('https://visiechallenge-b51dd6dl.b4a.run/api/pessoas/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
      
    })

    console.log(JSON.stringify(formData.value))

    if (response.ok) {
      alert('Registro cadastrado com sucesso.')
      limparCampos()
    } else {
      alert('Falha ao cadastrar registro.')
    }
  } catch (error) {
    alert('Erro ao enviar os dados:', error)
  }
}

const atualizarRG = (valor) => {
    formData.value.rg = valor.replace(/[^\d]/g, '')
  }
  
 const atualizarCPF = (valor) => {
    formData.value.cpf = valor.replace(/[^\d]/g, '')
  }

</script>

<template>
  <div class="container">
    <h1>Adicionar Registro</h1>
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
        <input
          type="text"
          class="form-control"
          id="funcao"
          v-model="formData.funcao"
        />
      </div>
      <br />
      <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
  </div>
</template>

<style>

</style>
