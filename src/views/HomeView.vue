<script setup>
import {onMounted, reactive} from 'vue';

let pessoas = reactive();

onMounted(()=>{
  fetch(`https://visiechallenge-b51dd6dl.b4a.run/api/pessoas/`)
  .then(res => res.json())
  .then(res => pessoas = res)
})

</script>

<template>
  <br/>
  <main class="container">
    <table class="table table-hover">
      <thead>
        <tr >
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Data de Admissão</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pessoa in pessoas" :key="pessoa.id_pessoa">
          <th scope="row">1</th>
          <td>{{pessoa.nome}}</td>
          <td>{{pessoa.data_admissao}}</td>
          <td>
            
              <div style="display: flex;flex-wrap: wrap;gap: 20px 5px;">
                <a type="button" class="btn btn-primary btn-sm">Ver Mais</a>
                <a type="button" class="btn btn-warning btn-sm">Editar</a>
                <a type="button" class="btn btn-danger btn-sm">Excluir</a>
              </div>
            
          </td>
        </tr>
      </tbody>
    </table>
    <br/><br/>
    <div id="add" >
      <router-link type="button" class="btn btn-primary" to="/cad">Adicionar Registro</router-link>
    </div>
    
  </main>
</template>

<style>
#add{

  display: grid;
  justify-content: end;
}
</style>
