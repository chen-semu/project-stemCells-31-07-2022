//  const markers = [];
// async function dna2AminoAcids() {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '30433c4425msh2304ddbdff6f1cbp103fc8jsndbae350d41e0',
//       'X-RapidAPI-Host': 'dna2protein.p.rapidapi.com'
//     }
//   };

//   return fetch('https://dna2protein.p.rapidapi.com/DNA2AminoAcid?dna=TACAAAGGCTAACGTCCTAGAGCTATT', options)
//     .then(response => response.json())
//     .then(res=>console.log(res))
//     .catch(err => console.error(err));
// }

// dna2AminoAcids();
// async function printAminoToHTML(){
// await dna2AminoAcids().then(res=>{catch_amino.innerHTML+=`<div class="d-flex flex-column">
// <h3>you need to lower your level of:</h3><br/>
//<h3>${res.aminoAcids[Math.floor(Math.random()*9)].name}</h3></div>
//<div class="d-flex flex-column"><h3>you need to higher your level of:</h3><br/>
//<h3>${res.aminoAcids[Math.floor(Math.random()*9)].name}</h3></div>`})
//   }
// printAminoToHTML()
// function mRNA2DNA()
//   const options2 = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "ca9a6dc260mshd6ce6532ff7de63p145f48jsn769526e6d4d5",
//       "X-RapidAPI-Host": "dna2protein.p.rapidapi.com",
//     },
//   };

//   fetch("https://dna2protein.p.rapidapi.com/mRNA2DNA?mRNA=UACGUACG", options2)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// }
// // mRNA2DNA()
// function dna2mRNA() {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'd06bf7dae9mshb86224ce8b132a5p1a282ajsn42f9d2f2764e',
//       'X-RapidAPI-Host': 'dna2protein.p.rapidapi.com'
//     }
//   };

//   fetch('https://dna2protein.p.rapidapi.com/mRNA2DNA?mRNA=UACGUACG', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// }
// // dna2mRNA()
פלחךלחךלח
async function randomUsers() {
  try {
    return await fetch(
      `https://my-json-server.typicode.com/Jeck99/fake-server/users`
    )
      .then((res) => res.json())
      // .then((result) => console.log(result));
  } catch (error) {}
}
randomUsers().then(res=>console.log(res));
async function randomNames() {
  try {
    return await fetch(`https://random-names-api.herokuapp.com/random`).then(
      (res) => res.json()
    );
  } catch (error) {}
}
// genePrinting.innerHTML=`${}`
function randomDouners(fName, lName, gender) {
  let counter = Math.floor(Math.random() * 75);
  let genderOfDoun = ["men", "women"];
  possible_douners.innerHTML += `<div style="display:flex; align-items:center"><img src="https://randomuser.me/api/portraits/med/${
    genderOfDoun[Math.floor(Math.random() * 2)]
  }/${counter}.jpg"class="rounded-circle img-fluid" /><h6>${fName} ${lName}, gender:${gender}</h6></div><br/>`;
}
let map;
function initMap() {
  let options = {
    zoom: 2.2,
    center: { lat: 35.5, lng: 67.5 },
  };
  map = new google.maps.Map(document.getElementById("map"), options);
  // getRandomMarkers();
  createManyDounersMarker();
}
function getRandomMarkers() {
  for (let i = 0; i < 7; i++) {
    let fName = randomUsers().then((res) => {
      return res[Math.floor(Math.random() * 10)].name.first;
    });
    let lName = randomUsers().then((res) => {
      return res[Math.floor(Math.random() * 10)].name.last;
    });
    let randomGender=['fimale','male']
    let gender = randomGender[Math.floor(Math.random() * 2)];
    const infowindow = new google.maps.InfoWindow({
      content: `<p>full name: ${fName} ${lName}<br/>gender:${gender}</p>`,
    });
    markers.push(
      new google.maps.Marker({
        position: {
          lat: +(Math.random() * 71).toFixed(4),
          lng: +(Math.random() * 135).toFixed(4),
        },
        map: map,
      })
    );
    markers[i].addListener("click", () => {
      infowindow.open({
        anchor: markers[i],
        map,
        shouldFocus: false,
      });
    });
  }
  // function getInfoBox() {}
}
function createManyDounersMarker() {
  for (let i = 0; i < 6; i++) {
    createDounerMarker();
  }
}
function createDounerMarker() {
  randomUsers().then((res) => {
      let fName = res[Math.floor(Math.random() * 10)].name.first;
      let lName = res[Math.floor(Math.random() * 10)].name.last;
      let randomGender=['fimale','male']
    let gender = randomGender[Math.floor(Math.random() * 2)];
      let infowindow = new google.maps.InfoWindow({
        content: `<p>full name: ${fName} ${lName}<br/>gender:${gender}</p>`,
      });
      let marker = getRandomMarker();
      randomDouners(fName, lName, gender);
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
      markers.push(marker);
  });
}
function getRandomMarker() {
  return new google.maps.Marker({
    position: {
      lat: +(Math.random() * 71).toFixed(4),
      lng: +(Math.random() * 135).toFixed(4),
    },
    map: map,
  });
}

const requestOptions = {
  method: "GET",
  redirect: "follow",
};
async function emailValidationApi() {
  try {
    return await fetch(
      `https://api.eva.pingutil.com/email?email=${inputEmail.value}`,
      requestOptions
    ).then((response) => response.json());
  } catch (err) {}
}
async function reactionToEmailValidation() {
  let response = await emailValidationApi();
  console.log(response.data.webmail);
  console.log(response.data.deliverable);
  console.log(response.data);
  if (response.data.webmail === true && response.data.deliverable === true) {
    return true;
  } else {
    return false;
  }
}
function actionOfPrintingUser() {
  user_welcoming.style.display = `block`;
  user_btn.style.display = `block`;
  user_welcoming.innerText = `hello ${input_name.value}`;
  first_main.style.display = `none`;
  second_main.style.display = `flex`;
  second_main.style.flexDirection='column'
  second_main.style.justifyContent = `center`;
  document.getElementById('staticBackdrop').style.display='none'
    var modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'))
  modal.hide();
}

async function printingUserPage() {
  let check = await reactionToEmailValidation();
  if (check == true) {
    return actionOfPrintingUser();
  } else {
    return alert("email isn't valid");
  }
}
email_valid_btn.addEventListener("click", () => {
  printingUserPage();
});
// const requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };
// const EmailUser = document.getElementById("EmailUser")
// async function emailValidationApi() {
//   try {
//       return await fetch(`https://api.eva.pingutil.com/email?email=${inputEmail.value}`, requestOptions)
//           .then(response => response.json())
//   }
//   catch (err) {
//   }
// }
// async function reactionToEmailValidation() {
//   let response = await emailValidationApi();
//   if (response.data.webmail === true && response.data.deliverable === true) {
//       return true
//   } else {
//       return false
//   }

// }
// function actionOfPrintingUser() {
//   user_welcoming.style.display=`unset`
//   user_btn.style.display=`unset`
//   user_welcoming.innerText=`hello ${input_name.value}`
//   first_main.style.display=`none`
//   second_main.style.display=`unset`
// }
// async function printingUserPage() {
//   let check = await reactionToEmailValidation()
//   if (check == true) {
//       return actionOfPrintingUser()
//   }
//   else { return alert("Invalid Email") }
// }
// email_valid_btn.addEventListener("click", () => { printingUserPage() })
async function webPharmacy() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ca9a6dc260mshd6ce6532ff7de63p145f48jsn769526e6d4d5",
      "X-RapidAPI-Host": "pharmacity.p.rapidapi.com",
    },
  };

  try {
    return await fetch(
      "https://pharmacity.p.rapidapi.com/graphqli?query=query%20GetProducts%7Bproduct%7Bid%2Cname%7D%7D",
      options
    ).then((response) => response.json());
  } catch (error) {}
}
webPharmacy((res) => console.log(res));
