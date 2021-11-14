const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to gt puzzle");
  }
};

const getPuzzleOld = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch puzzle");
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};

const getCountry = async (countryCode) => {
  const response = await fetch(
    "http://api.countrylayer.com/v2/all?access_key=86ce9df3657ad15a5ff06956470b2784"
  );
  if (response.status === 200) {
    data = response.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error("Unable to fetch data");
  }
};

const getLocation = async () => {
  const response = await fetch("http://ipinfo.io/json?token=1a11bd55cc8f9c");
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to fetch location");
  }
};


const getCurrentCountry = async () =>{
    const myLocation = await getLocation()
    return await getCountry(myLocation.country)
    
}
/*                Old code 
// const getCountryOld = (countryCode) =>
//   new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest();

//     countryRequest.addEventListener("readystatechange", (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find(
//           (country) => country.alpha2Code === countryCode
//         );
//         resolve(country);
//       } else if (e.target.readyState === 4) {
//         reject("Unable to fetch data");
//       }
//     });
//       countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
//       countryRequest.send();
//   });
*/
