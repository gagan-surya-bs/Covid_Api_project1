// githubUser(output2);
// var output2="Pakistan";
// async function githubUser(inputText){
//          let URL = 'https://api.covid19api.com/country/india'
//         let usertext =await window.fetch(`${URL}`) ;
//         let data = await usertext.json();
//       console.log(data);
// }

let input = document.getElementById('search')
let template   = document.getElementById('template')
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var date1 = document.getElementById('date');
// var date2 = new Date();

input.addEventListener('keyup',event=>{
     if(event.key==='Enter'){
         let output1=event.target.value
         Coviddetails(output1)
     }
})

async function Coviddetails(inputText){
    let URL = "https://api.covid19api.com/country"
    let usertext =await window.fetch(` ${URL}/${inputText}`) ;
    let data = await usertext.json();
    let updated = data.length-1
    console.log(data.length-1);
    let { Country,Confirmed,Active,Deaths,Date} = data[data.length-1];
btn1.innerHTML = `<h2>Country :${Country}</h2>`
btn2.innerHTML = `<h2>Total Cases:${Confirmed}</h2>`
btn3.innerHTML = `<h2>Recovered:${Active}</h2>`
btn4.innerHTML = `<h2>Deaths:${Deaths}</h2>`
date1.innerHTML = `<h2>Date:${Date.getDay()}</h2>`
    //let { name,id,email,company,Active,Date} = data;
    // template.innerHTML=`
    // <main>
    // <div>
    // <h2> ${Country}</h2>
    //  <h2>Total Cases: ${Confirmed}</h2>
    //  <h2>Active Cases: ${Active}</h2>
    //  <h2>Date: ${Date}</h2>
   
    // </div>
    // </main>`
    ;

}

