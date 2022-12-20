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

//....................................................
//create obj of my filter 
const filters = {
  name: null,
  capital: null,
  region: null,
  independent: null,
};

//...........................................
//get data from form
function getFieldData(e, fieldType) {
  const value = e.target.value.toLowerCase();
  filters[fieldType] = value || null;
  applayFilter();
}

//apply filter
function applayFilter() {
  filteredCountries = countriesList.filter((country) => {
    return (filters.name? country.name.official.toLowerCase().includes(filters.name): true) &&
    ( filters.capital
      ? country.capital
        ? country.capital[0].toLowerCase().includes(filters.capital)
        : false
      : true) && (filters.region
      ? country.region.toLowerCase().includes(filters.region)
      : true) && (filters.independent != null
      ? country.independent === JSON.parse(filters.independent)
      : true);
  });
  showCountries(filteredCountries);
}

function addEvent() {
  const countryName = document.getElementById("country-name");
  const CapitalName = document.getElementById("CapitalName");
  const RegionName = document.getElementById("RegionName");
  countryName.addEventListener("input", function (e) {
    getFieldData(e, "name");
  });
  CapitalName.addEventListener("input", function (e) {
    getFieldData(e, "capital");
  });
  RegionName.addEventListener("input", function (e) {
    getFieldData(e, "region");
  });
  $('input[type="radio"]').change(function (e) {
    getFieldData(e, "independent");
  });
}
addEvent();



// //................................................................
// //filter countries depend on country name
// $("#country-name").on("input", function () {
//   const inputCountryName = this.value.toLowerCase();
//   const theArray=filteredCountries.length ?filteredCountries:countriesList
//   filteredCountries = theArray.filter((country) =>
//   country.name.official.toLowerCase().includes(inputCountryName)
//   );
//   showCountries(filteredCountries);
// });

// //................................................................
// //filter countries depend on capital name
// $("#CapitalName").on("input", function () {
//   const inputCapitalName = this.value.toLowerCase();
//   const theArray=filteredCountries.length ?filteredCountries:countriesList
//    filteredCountries = theArray.filter((country) => {
//     if (country.capital) {
//       return country.capital[0]
//         .toString()
//         .toLowerCase()
//         .includes(inputCapitalName);
//     }
//   })
//   showCountries(filteredCountries);
// });

// //................................................................
// //filter countries depend on region name
// $("#RegionName").on("change", function () {
//   const regionName = this.value.toLowerCase();
//   const theArray=filteredCountries.length ?filteredCountries:countriesList
//   filteredCountries = theArray.filter((country) =>
//     country.region.toLowerCase().includes(regionName)
//   );
//   showCountries(filteredCountries);
// });

// //................................................................
// //filter countries depend on independance
// $('input[type="radio"]').change(function () {
//   const value = $('input[type="radio"]:checked').val();
//   const theArray=filteredCountries.length ?filteredCountries:countriesList

//   filteredCountries = theArray.filter(
//     (country) => country.independent === JSON.parse(value)
//   );
//   showCountries(filteredCountries);
// });

//................................................................
//clear all filtering
$("#clearFilters").on("click", function () {
  location.reload();
  // filteredCountries = countriesList;
  // showCountries(filteredCountries);
});
