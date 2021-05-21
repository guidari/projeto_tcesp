const theadDespesa = `<tr>
  <th class="text-center" scope="col">#</th>
  <th class="text-center" scope="col">Tipo de evento de despesa</th>
  <th class="text-center" scope="col">Número do empenho</th>
  <th class="text-center" scope="col">Fornecedor</th>
  <th class="text-center" scope="col">Nome do fornecedor</th>
  <th class="text-center" scope="col">Data</th>
  <th class="text-center" scope="col">Valor da despesa</th>
</tr>`

const theadeceita = `<tr>
  <th class="text-center" scope="col">#</th>
  <th class="text-center" scope="col">Código e descrição da Fonte de Recurso</th>
  <th class="text-center" scope="col">Código e descrição do Código de Aplicação Fixo</th>
  <th class="text-center" scope="col">Código e descrição da Alínea</th>
  <th class="text-center" scope="col">Código e descrição da Subalínea</th>
  <th class="text-center" scope="col">Mês</th>
  <th class="text-center" scope="col">Valor da arrecadação</th>
</tr>`

class UI {

  showDespesa(data) {
    let tbodyOutput = '';
    let i = 0;
    data.forEach(function (city) {
      i++
      console.log("city", city)
      tbodyOutput += `
      <tr id=${i}>
        <td class="text-center">${i}</td>
        <td class="text-center">${city.evento}</td>
        <td class="text-center nr_empenho">${city.nr_empenho}</td>
        <td class="text-center">${city.id_fornecedor}</td>
        <td class="text-center">${city.nm_fornecedor}</td>
        <td class="text-center">${city.dt_emissao_despesa}</td>
        <td class="text-center">${city.vl_despesa}</td>
      </tr>
    `
    })
    document.querySelector("#dataTable").innerHTML = tbodyOutput;
  }

  showReceita(data) {
    let tbodyOutput = '';
    let i = 0;
    data.forEach(function (city) {
      i++
      console.log("city", city)
      tbodyOutput += `
      <tr id=${i}>
        <td class="text-center">${i}</td>
        <td class="text-center">${city.ds_fonte_recurso}</td>
        <td class="text-center">${city.ds_cd_aplicacao_fixo}</td>
        <td class="text-center">${city.ds_alinea}</td>
        <td class="text-center">${city.ds_subalinea}</td>
        <td class="text-center">${city.mes}</td>
        <td class="text-center">${city.vl_arrecadacao}</td>
      </tr>
    `
    })
    document.querySelector("#dataTable").innerHTML = tbodyOutput;
  }

}