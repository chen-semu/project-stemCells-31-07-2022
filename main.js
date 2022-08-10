 const markers = [];
async function dna2AminoAcids() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '30433c4425msh2304ddbdff6f1cbp103fc8jsndbae350d41e0',
      'X-RapidAPI-Host': 'dna2protein.p.rapidapi.com'
    }
  };
  
  return fetch('https://dna2protein.p.rapidapi.com/DNA2AminoAcid?dna=TACAAAGGCTAACGTCCTAGAGCTATT', options)
    .then(response => response.json())
    .catch(err => console.error(err));
}
dna2AminoAcids()
async function printAminoToHTML(){
await dna2AminoAcids().then(res=>{catch_amino.innerHTML+=`<div class="d-flex flex-column"><h4>you need to lower your level of:</h4><br/><h2>${res.aminoAcids[Math.floor(Math.random()*9)].name}</h2></div><div class="d-flex flex-column"><h4>you need to higher your level of:</h4><br/><h2>${res.aminoAcids[Math.floor(Math.random()*9)].name}</h2></div>`})
  }
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

async function randomNames(){
  try { 
    return await fetch(`https://random-names-api.herokuapp.com/random`)
    .then(res=>res.json())
  } catch (error) {
    
  }
}
// genePrinting.innerHTML=`${}`
function randomDouners(fName,lName,gender){
  let counter=Math.floor(Math.random()*75)
possible_douners.innerHTML+=`<div style="display:flex; align-items:center"><img src="https://randomuser.me/api/portraits/med/men/${counter}.jpg"class="rounded-circle img-fluid" /><h6>${fName} ${lName}, gender:${gender}</h6></div><br/>`
}
let map;
function initMap(){
  let options = {
    zoom:2.2,
    center:{lat:35.5,lng:67.5}
  }
  map= new google.maps.Map(document.getElementById("map"),options);
  // getRandomMarkers();
  createManyDounersMarker();
}
// function getRandomMarkers(){
//   for(let i = 0; i <7;i++){
//     let fName=randomNames().then(res=>{return res.body.name})
//     let lName=randomNames().then(res=>{return res.body.name})
//     let gender=randomNames().then(res=>{return res.body.genre})
//     const infowindow = new google.maps.InfoWindow({
//     content: `<p>full name: ${fName} ${lName}<br/>gender:${gender}</p>`,
//   });
//   markers.push(new google.maps.Marker({position:{lat:+(Math.random()*71).toFixed(4),lng:+(Math.random()*135).toFixed(4)},map:map}))
//   markers[i].addListener("click", () => {
//     infowindow.open({
//       anchor: markers[i],
//       map,
//       shouldFocus: false,
//     });
//   });
// }
// function getInfoBox(){

// }

//   }
function createManyDounersMarker(){
  for(let i =0;i<6;i++){
    createDounerMarker();
  }
}
  function createDounerMarker(){
    randomNames().then(res=>{
      randomNames().then(data=>{
        let fName = res.body.name;
        let lName = data.body.name;
        let gender = res.body.genre;
        let infowindow = new google.maps.InfoWindow({content: `<p>full name: ${fName} ${lName}<br/>gender:${gender}</p>`,});
        let marker = getRandomMarker();
        randomDouners(fName,lName,gender);
        marker.addListener("click",() => {
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
        })
        markers.push(marker);
      })
    }) 
  }
  function getRandomMarker(){
    return new google.maps.Marker({position:{lat:+(Math.random()*71).toFixed(4),lng:+(Math.random()*135).toFixed(4)},map:map})
  }
// initMap()

// var options = {
//   chart: {
//     type: 'line'
//   },
//   series: [{
//     name: 'sales',
//     data: [30,40,35,50,49,60,70,91,125]
//   }],
//   xaxis: {
//     categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
//   }
// }

// var chart = new ApexCharts(document.querySelector("#chart"), options);

// chart.render();
// async function randomPic(){
//   try { 
//     return await fetch(`https://100k-faces.glitch.me/random-image-url`)
//     .then(res=>res.json())
//   } catch (error) {
    
//   }
// }
// console.log(randomPic())
// randomPic().then((res)=>console.log(res))
// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//           label: '# of Votes',
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//       }]
//   },
//   options: {
//       scales: {
//           y: {
//               beginAtZero: true
//           }
//       }
//   }
// });
// show on the graph obj
// let chart = new ApexCharts(document.querySelector("#chart"), optionsGraph);
// chart.render();
// let optionsGraph = {
//   series: [{
//     name: "Desktops",
//     data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
// }],
//   chart: {
//   height: 350,
//   type: 'line',
//   zoom: {
//     enabled: false
//   }
// },
// dataLabels: {
//   enabled: false
// },
// stroke: {
//   curve: 'straight'
// },
// title: {
//   text: 'The growth of the company value in the last year',
//   align: 'left'
// },
// grid: {
//   row: {
//     colors: ['#f3f3f3', 'transparent'],
//     opacity: 0.5
//   },
// },
// xaxis: {
//   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Des'],
// }
// };
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
async function emailValidationApi(){
try{ return await fetch(`https://api.eva.pingutil.com/email?email=${inputEmail.value}`, requestOptions)
  .then(response => response.json())
}
catch(err){
}}
async function  reactionToEmailValidation(){
  let response = await emailValidationApi();
  console.log(response.data.webmail);
  console.log(response.data.deliverable);
  console.log(response.data);
  if (response.data.webmail===true && response.data.deliverable===true){
    return true
  }else{
  return false
  }

}
function actionOfPrintingUser() {
  user_welcoming.style.display=`unset`
  user_.style.display=`unset`
  user_welcoming.innerText+=` ${input_name.value}`
  first_main.style.display=`none`
  second_main.style.display=`unset`
}
async function printingUserPage(){
  let check = await reactionToEmailValidation()
  if(check==true){
    return actionOfPrintingUser()
  }
 else{ return alert("email isn't valid")}
}
email_valid_btn.addEventListener("click",()=>{printingUserPage()});