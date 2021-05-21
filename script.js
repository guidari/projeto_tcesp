const filterResult = document.querySelector("#filterResult");
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
  console.log("filterName", filterName)


  await fetch(`https://transparencia.tce.sp.gov.br/api/json/${info}/${filterName}/${year}/${month}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let theadOutput = '';

      if (info === 'despesas') {
        theadOutput = theadDespesa;
        ui.showDespesa(data);
      } else if (info === 'receitas') {
        theadOutput = theadeceita;
        ui.showReceita(data);
      }


      document.querySelector("#dataTableHead").innerHTML = theadOutput;
      document.querySelector('#orgao').textContent = data[0].orgao
      document.querySelector('#relatorios').textContent = data.length
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


// filterResult.addEventListener("keyup", (e) => {
//   const nr_empenho = document.querySelectorAll(".nr_empenho").value;
//   console.log(nr_empenho)

//   const userText = e.target.value;

//   if (userText != nr_empenho) {
//     console.log("difereten")
//   } else {
//     console.log("igual")
//   }

// })