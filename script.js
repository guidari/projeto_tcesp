const filterInput = document.querySelector("#filterResult");
const ui = new UI();

document.querySelector(".search").addEventListener("click", getCity);
document.querySelector("#printBtn").addEventListener("click", printData);
document.querySelector("#insertURL").addEventListener("click", insertURL);
document.querySelector("#loading").style.display = "none";
document.querySelector(".error").style.display = "none";
document.querySelector(".infoSearch").style.display = "none";

async function getCity(e) {
  document.getElementById("loading").style.display = "block";

  const name = document.querySelector("#cityName").value;
  const year = document.querySelector("#cityYear").value;
  const month = document.querySelector("#cityMonth").value;
  const info = document.querySelector("#cityInfo").value;
  const nameSpace = name.replaceAll(" ", "-");
  const filterName = nameSpace.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  await fetch(
    `https://transparencia.tce.sp.gov.br/api/json/${info}/${filterName}/${year}/${month}`
  )
    .then((res) => res.json())
    .then((data) => {
      let theadOutput = "";

      if (info === "despesas") {
        theadOutput = theadDespesa;
        ui.showDespesa(data);
      } else if (info === "receitas") {
        theadOutput = theadReceita;
        ui.showReceita(data);
      }

      document.querySelector("#dataTableHead").innerHTML = theadOutput;
      document.querySelector("#orgao").textContent = data[0].orgao;
      document.querySelector("#relatorios").textContent = data.length;
      document.querySelector(".infoSearch").style.display = "block";
      document.querySelector("#loading").style.display = "none";
    })
    .catch((err) => {
      console.log("catch error", err);
      document.querySelector(".error").style.display = "block";
      // setTimeout(() => {
      //   document.querySelector('.error').style.display = 'none';
      // }, 3000);
      document.querySelector("#loading").style.display = "none";
      document.querySelector(".infoSearch").style.display = "none";
      document.querySelector("#dataTableHead").style.display = "none";
      // document.querySelector("#tableInfo_wrapper").style.display = "none";
    });
  $(document).ready(function () {
    $("#tableInfo").DataTable({
      destroy: true,
      paging: false,
      info: false,
      language: dataTableTranslation,
      retrieve: true,
    });
  });

  e.preventDefault();
}

$(document).ready(function () {
  fetch(`https://transparencia.tce.sp.gov.br/api/json/municipios`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      ui.showCities(data);
    })
    .catch((err) => {
      console.log("catch error", err);
    });
});

function printData() {
  var divToPrint = document.getElementById("tableInfo");
  var divToPrint2 = document.getElementById("cityQtd");
  newWin = window.open("");
  newWin.document.write(
    '<link rel="stylesheet" href="src/css/style.css" type="text/css" />'
  );
  newWin.document.write(divToPrint2.outerHTML);
  newWin.document.write(divToPrint.outerHTML);
  newWin.print();
  newWin.close();
}

function insertURL() {
  const nome = document.querySelector("#nomeMunicipio").value;
  const url = document.querySelector("#urlMunicipio").value;
  const tipo_url = document.querySelector("#tipoUrlMunicipio").value;

  const data = {
    nome: nome,
    url: url,
    tipo_url: tipo_url,
  };

  fetch(
    "http://tcesp-api.eba-ev685m5m.us-east-2.elasticbeanstalk.com/municipios",
    {
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  )
    .then((response) => response.json(data))
    .then((data) => console.log(data));
}
