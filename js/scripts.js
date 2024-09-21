//consulta  inicial
const id = 999;
Consulta(id);

function Buscar() {
  const municipio = document.getElementById("municipio").value;
  if (municipio) {
    Consulta(municipio);
  } else {
    alert("Por favor, ingresa el nombre de un municipio.");
  }
}

function Consulta(municipio) {
  api = `https://censopoblacion.azurewebsites.net/API/indicadores/2/${municipio}`;

  fetch(api)
    .then((response) => response.text())
    .then((data) => {
      try {
        const getString = JSON.parse(data);
        const jsonDatos =
          typeof getString === "string" ? JSON.parse(getString) : getString;
        console.log(jsonDatos);
        mostrarDatos(jsonDatos);
      } catch (error) {
        console.error("Error al parsear el JSON:", error);
        alert("Hubo un error al obtener los datos. Inténtalo de nuevo.");
      }
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
      alert(
        "No se pudo obtener los datos del municipio. Por favor, inténtalo más tarde."
      );
    });
}

function mostrarDatos(jsonDatos) {
  document.getElementById("Estadisticas").innerHTML = `
<div class="row">
    <!-- Alfabetismo -->
    <div class="card m-2 text-white bg-success mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Alfabetismo</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.alfabetismo}%</h5>
        </div>
    </div>

    <!-- Años Promedio de Estudio -->
    <div class="card m-2 text-white bg-info mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Años Prom. Estudio</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.anios_prom_estudio}</h5>
        </div>
    </div>

    <!-- Capital -->
    <div class="card m-2 text-white bg-primary mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Capital</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.capital}</h5>
        </div>
    </div>

    <!-- Edad Promedio -->
    <div class="card m-2 text-white bg-warning mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Edad Promedio</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.edad_promedio}</h5>
        </div>
    </div>

    <!-- Extensión Territorial -->
    <div class="card m-2 text-white bg-secondary mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Ext. Territorial</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.ext_territorial} km²</h5>
        </div>
    </div>

    <!-- Índice de Dependencia -->
    <div class="card m-2 text-white bg-danger mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Índice de Dependencia</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.indice_dependencia}%</h5>
        </div>
    </div>

    <!-- Índice de Masculinidad -->
    <div class="card m-2 text-white bg-info mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Índice de Masculinidad</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.indice_masculinidad}</h5>
        </div>
    </div>

    <!-- Población Total -->
    <div class="card m-2 text-white bg-primary mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Población Total</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.pob_total}</h5>
        </div>
    </div>

    <!-- Población de 0 a 14 años -->
    <div class="card m-2 text-white bg-warning mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Población 0-14 años</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.pob_edad_014}</h5>
        </div>
    </div>

    <!-- Población de 65+ años -->
    <div class="card m-2 text-white bg-success mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Población 65+ años</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.pob_edad_65}</h5>
        </div>
    </div>

    <!-- Población Pueblo Ladino -->
    <div class="card m-2 text-white bg-secondary mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Pueblo Ladino</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.pob_pueblo_ladino}</h5>
        </div>
    </div>

    <!-- Población Pueblo Maya -->
    <div class="card m-2 text-white bg-danger mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Pueblo Maya</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.pob_pueblo_maya}</h5>
        </div>
    </div>

    <!-- Total de Hogares -->
    <div class="card m-2 text-white bg-warning mb-3 col-4" style="max-width: 18rem;">
        <div class="card-header">Total Hogares</div>
        <div class="card-body">
            <h5 class="card-title">${jsonDatos.total_hogares}</h5>
        </div>
    </div>
</div>
`;
}
