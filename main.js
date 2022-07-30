function dna2AminoAcids() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ca9a6dc260mshd6ce6532ff7de63p145f48jsn769526e6d4d5",
      "X-RapidAPI-Host": "dna2protein.p.rapidapi.com",
    },
  };

  fetch(
    "https://dna2protein.p.rapidapi.com/DNA2AminoAcid?dna=TACAAAGGCTAACGTCCTAGAGCTATT",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
function mRNA2DNA(params) {
  const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ca9a6dc260mshd6ce6532ff7de63p145f48jsn769526e6d4d5",
      "X-RapidAPI-Host": "dna2protein.p.rapidapi.com",
    },
  };

  fetch("https://dna2protein.p.rapidapi.com/mRNA2DNA?mRNA=UACGUACG", options2)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
function dna2mRNA(params) {
  const options3 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ca9a6dc260mshd6ce6532ff7de63p145f48jsn769526e6d4d5",
      "X-RapidAPI-Host": "dna2protein.p.rapidapi.com",
    },
  };

  fetch(
    "https://dna2protein.p.rapidapi.com/DNA2mRNA?dna=TACAAAGGCTAACGTCCTAGAGCTATT",
    options3
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
async function randomNames(){
  try { 
    return await fetch(`https://api.name-fake.com/random/random`)
    .then(res=>res.json())
  } catch (error) {
    
  }
}
randomNames().then((res)=>console.log(res))