// Task
// const getcountries = (countries) =>
//   console.log(countries.filter((country) => country.population > 10000000));

// fetch("https://restcountries.com/v3.1/all")
//   .then((data) => data.json())
//   .then(getcountries);

document.body.innerHTML = `<section class="container-fluid">
<div id="flags" class="row"></div>
</section>`
async function getallcountries() {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const countries = await data.json();
  const getcountries = await countries.filter(
    (country) => country.population > 1_00_00_000
  );
  // console.log(getcountries);

  getcountries.forEach((data) => {
      // console.log(data);

    const flags = document.querySelector("#flags");

    flags.innerHTML += `
  <div class="col-12 col-sm-6 col-xl-4">
  <div class="country-card">
  <img src=${data.flags.png} class="country-flag" />
  <div class="country-details d-flex flex-wrap flex-column">
  <h3>${data.name.common}</h3>
  <p class="country-population"><b>Population:</b> ${data.population}</p>
  <p class="country-region"><b>Region:</b> ${data.region}</p>
  <p class="country-capital"><b>Capital:</b> ${data.capital}</p> 
  </div> 
  </div>
  </div>`;
});
}
getallcountries();
