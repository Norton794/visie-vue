
export const baseURL = 'https://visiechallenge-b51dd6dl.b4a.run/api/pessoas/';

export async function fetchData(id) {
  try {
    const response = await fetch(`${baseURL}${id}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados da API.');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    return null;
  }
}


export async function deleteData(id) {
  try {
    await fetch(`${baseURL}${id}`, {
      method: 'DELETE'
    })
    console.log('Registro excluído com sucesso.')
    return true
  } catch (error) {
    console.error('Erro ao excluir o registro:', error)
    return false
  }
}

export const mostrarPrimeiroNome = (nome) => {
  const nomeArray = nome.split(' ')
  return nomeArray[0]
}

export const formatarData = (data) => {
  const date = new Date(data)
  return `${date.toLocaleDateString('pt-BR', { timeZone: 'UTC' })}`
}

export const formatarRG = (valor) => {
    return valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4')
  }
  
 export const formatarCPF = (valor) => {
    return valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
  }
  
 

  