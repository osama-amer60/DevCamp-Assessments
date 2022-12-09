//...........................................................................
//fetch data
let countriesList = [];
let filteredCountries = [];

const getCountries = async () => {
  const respons = await fetch("https://restcountries.com/v3.1/all");
  const data = await respons.json();
  countriesList.push(...data);
  showCountries(countriesList);
};
getCountries();

//..............................................................
//render countries 
const showCountries = (list) => {
  const tableBody = document.getElementById("country-list-body");
  let countriesListRow = "";
  tableBody.innerHTML = "";
  list.forEach((country) => {
    countriesListRow += `<tr>
        <td>${country.name.official}</td>
        <td>${country.independent ? "Yes" : "No"}</td>
        <td>${country.capital}</td>
        <td>${country.region}</td>
        </tr>`;
  });
  tableBody.innerHTML = countriesListRow;
};


//................................................................
//filter countries depend on country name
$("#country-name").on("input", function () {
  const inputCountryName = this.value.toLowerCase();
const theArray=filteredCountries.length ?filteredCountries:countriesList  
  
  filteredCountries = theArray.filter((country) =>
  country.name.official.toLowerCase().includes(inputCountryName)
  );

  showCountries(filteredCountries);
});


//................................................................
//filter countries depend on capital name
$("#CapitalName").on("input", function () {
  const inputCapitalName = this.value.toLowerCase();
  const theArray=filteredCountries.length ?filteredCountries:countriesList  
   filteredCountries = theArray.filter((country) => {
    if (country.capital) {
      return country.capital[0]
        .toString()
        .toLowerCase()
        .includes(inputCapitalName);
    }
  })
  showCountries(filteredCountries);
});


//................................................................
//filter countries depend on region name
$("#RegionName").on("change", function () {
  const regionName = this.value.toLowerCase();
  const theArray=filteredCountries.length ?filteredCountries:countriesList  

  filteredCountries = theArray.filter((country) =>
    country.region.toLowerCase().includes(regionName)
  );
  showCountries(filteredCountries);
});

//................................................................
//filter countries depend on independance
$('input[type="radio"]').change(function () {
  const value = $('input[type="radio"]:checked').val();
  const theArray=filteredCountries.length ?filteredCountries:countriesList  

  filteredCountries = theArray.filter(
    (country) => country.independent === JSON.parse(value)
  );
  showCountries(filteredCountries);
});

//................................................................
//clear all filtering
$("#clearFilters").on("click", function () {
    location.reload()
    // filteredCountries = countriesList;
    // showCountries(filteredCountries);
  });