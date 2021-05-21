document.querySelector('.search').addEventListener('click', getCity);
document.querySelector('#loading').style.display = 'none';
document.querySelector(".error").style.display = 'none'
document.querySelector(".infoSearch").style.display = 'none'

async function getCity(e) {
  const name = document.querySelector('#cityName').value;
  const year = document.querySelector('#cityYear').value;
  const month = document.querySelector('#cityMonth').value;
  const info = document.querySelector('#cityInfo').value;
  document.getElementById('loading').style.display = 'block';


  const nameSpace = name.replaceAll(" ", "-")
  const filterName = nameSpace.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  console.log("filterName", filterName)


  await fetch(`https://transparencia.tce.sp.gov.br/api/json/${info}/${filterName}/${year}/${month}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let tbodyOutput = '';
      let theadOutput = '';
      let i = 0;

      if (info === 'despesas') {
        data.forEach(function (city) {
          i++
          theadOutput = theadDespesa;
          tbodyOutput += `
            <tr id=${i}>
              <td class="text-center">${i}</td>
              <td class="text-center">${city.evento}</td>
              <td class="text-center">${city.nr_empenho}</td>
              <td class="text-center">${city.id_fornecedor}</td>
              <td class="text-center">${city.nm_fornecedor}</td>
              <td class="text-center">${city.dt_emissao_despesa}</td>
              <td class="text-center">${city.vl_despesa}</td>
            </tr>
          `;
        })
      } else if (info === 'receitas') {
        data.forEach(function (city) {
          i++
          theadOutput = theadeceita;
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
          `;
        })
      }


      document.querySelector("#dataTable").innerHTML = tbodyOutput;
      document.querySelector("#dataTableHead").innerHTML = theadOutput;
      document.querySelector('#orgao').textContent = data[0].orgao
      document.querySelector('#relatorios').textContent = data[i]
      document.querySelector(".infoSearch").style.display = 'block'
      document.querySelector('#loading').style.display = 'none';

    })
    .catch(err => {
      console.log(err)
      document.querySelector('#loading').style.display = 'none';
      document.querySelector(".error").style.display = 'block'

      setTimeout(() => {
        document.querySelector(".error").style.display = 'none'
      }, 3000);

    });

  e.preventDefault();
}
