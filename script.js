const filterInput = document.querySelector("#filterResult");
const ui = new UI;

document.querySelector('.search').addEventListener('click', getCity);
document.querySelector('#loading').style.display = 'none';
document.querySelector(".error").style.display = 'none'
document.querySelector(".infoSearch").style.display = 'none'

async function getCity(e) {
  document.getElementById('loading').style.display = 'block';

  const name = document.querySelector('#cityName').value;
  const year = document.querySelector('#cityYear').value;
  const month = document.querySelector('#cityMonth').value;
  const info = document.querySelector('#cityInfo').value;
  const nameSpace = name.replaceAll(" ", "-")
  const filterName = nameSpace.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  await fetch(`https://transparencia.tce.sp.gov.br/api/json/${info}/${filterName}/${year}/${month}`)
    .then(res => res.json())
    .then(data => {
      let theadOutput = '';

      if (info === 'despesas') {
        theadOutput = theadDespesa;
        ui.showDespesa(data);
      } else if (info === 'receitas') {
        theadOutput = theadReceita;
        ui.showReceita(data);
      }

      document.querySelector("#dataTableHead").innerHTML = theadOutput;
      document.querySelector('#orgao').textContent = data[0].orgao
      document.querySelector('#relatorios').textContent = data.length
      document.querySelector(".infoSearch").style.display = 'block'
      document.querySelector('#loading').style.display = 'none';

    })
    .catch(err => {
      alert("catch error", err)
      document.querySelector('#loading').style.display = 'none';
      document.querySelector(".error").style.display = 'block'
      document.querySelector('.infoSearch').style.display = 'none';
      document.querySelector('#dataTableHead').style.display = 'none';

      setTimeout(() => {
        document.querySelector(".error").style.display = 'none'
      }, 3000);

    });
  $(document).ready(function () {
    $('#tableInfo').DataTable({
      destroy: true,
      paging: false,
      info: false,
      language: dataTableTranslation,
      retrieve: true,
    });
  });

  e.preventDefault();
}

function printData() {
  var divToPrint = document.getElementById("tableInfo");
  var divToPrint2 = document.getElementById("cityQtd");
  newWin = window.open("");
  newWin.document.write(divToPrint2.outerHTML);
  newWin.document.write(divToPrint.outerHTML);
  newWin.print();
  newWin.close();
}

document.querySelector('#printBtn').addEventListener('click', printData);
