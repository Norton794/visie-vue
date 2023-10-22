import { reactive, ref } from 'vue';
import { baseURL } from '../utils/api'

const usePessoas = () => {
  const pessoas = reactive(ref());

  const carregarPessoas = async () => {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      pessoas.value = data;
      console.log(pessoas.value)
    } catch (error) {
      console.error('Erro ao carregar pessoas:', error);
    }
  };

  return { pessoas, carregarPessoas };
};

export default usePessoas;
