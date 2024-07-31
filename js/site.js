class country {
  constructor(pais) {
    this.flags = pais.flags;
    this.name = pais.name;
    this.region = pais.region;
  }
}

const getCountry = async (name) => {
  console.log(name);
  name = "https://restcountries.com/v3.1/name/" + name;
  console.log(name);
  const uri = name;
  const resp = await fetch(uri);
  const data = await resp.json();
  console.log(data);
  let pais = new country(data[0]);
  console.log(pais);
  /* let region = pais.region;
  console.log(region); */
  /* Desestructurar region de pais */
  let { region } = pais;
  console.log(region);
  let array = ['chavo','quico','chilindrina'];
  let [ , , persona3 ] = array;
  console.log(persona3);

  document.getElementById('pais_name').innerHTML = pais.name.common;
  document.getElementById('pais_flag').src = pais.flags.svg;
  document.getElementById('pais_region').innerHTML = pais.region;

  const $btn_search = document.getElementById('btn_search');
  $btn_search.addEventListener('click', ()=> {
    const $pais_input = document.getElementById('pais_input');
    getCountry($pais_input.value);
  }) 
};

getCountry("Argentina");
