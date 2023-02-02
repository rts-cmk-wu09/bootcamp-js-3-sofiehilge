let link = document.querySelectorAll("nav ul a"); /* Samme syntax som i CSS, man kan godt arbejde med at være specifik også i JS. */

//kan man tilføje en eventlistener til en notelist?
//link.addEventlistener("click",(e) => {

//console.log(link) //giver error fordi link er ikke et element, men en notelist ("nav ul a"), notelist minder om en array.
//});

//Derfor bliver vi nødt til at bruge en for each loop, for at få fat i a i slutningen af ("nav ul a"), men a vil også ændre sig alt efter om det er link 1, link2 og link3.
//ved at bruge for each loop, bliver jeg fri for at fortælle hvor længe den skal bruges, da det simpelthen bare skal køre hver gang der clickes på et a tag.

//---------------URL er ikke en løsning pga. problemer med event.prevenDefault fordi den ikke når at sende værdier med op i URLen.

//let params = new URLSearchParams(document.location.search);

//console.log("Params: " + params)//params returnere vores querystring: page=page2 - når vi trykker på link2

//let page = params.get('page')//get tager et argument - skriv URL variable ind

//console.log(page)// nu har vi en variable der hele tiden giver information om hvilken side vi er på. 

//if (page === "page1") {
     //== spørger om det er samme værdi
      //=== spørger om der er samme værdi og datatype, skal være tre, fordi vi fra URL'en får en string tilbage
   //vi vil ændre stylen på page 1 fra at være display: none til at være display: block
   //og de andre skal fortsat være display: none
   //document.querySelector("#homepage").style.display = "none";//starter med at lave en reference til det document vi skal have fat i

//}

link.forEach((element, index) => {
   element.addEventListener("click", (e) => {
      
      e.preventDefault();
      //istedet for at hente værdien i URLen vil vi nu hente værdien fra elementet.

     let page = e.target.attributes[0].value; //Når vi specificerer at det er værdien får vi kun den værdi tilbage, og ikke hele "href=page1"
     //med dot notation dykker vi ned i strukturen.
     document.querySelector("#homepage").style.display = "none"; //betyder når der klikkes på et link, bliver indholdet på index skjult.
      if(page==="page1") {
           document.querySelector("#page1").style.display = "block";//når page 2 vises, skal page 1 og 3 være none;
           document.querySelector("#page2").style.display = "none";//ellers vises de bare i forlængelse af hinanden
         document.querySelector("#page3").style.display = "none";
      } else if (page === "page2"){
         document.querySelector("#page2").style.display = "block";
         document.querySelector("#page1").style.display = "none";
         document.querySelector("#page3").style.display = "none";
      }else{
         document.querySelector("#page2").style.display = "none";
         document.querySelector("#page1").style.display = "none";
         document.querySelector("#page3").style.display = "block";
      }
      
    
   })

})


  // ---------------------denne her fixes på et senere tidspunkt!!!!!!-------------------
//link.forEach((element, index)=>{ //her har vi en syntax hvor vi også kan vælge de specifikke index'er, men måske er det ikke nødvendigt hvis vi bare laver en global click event. VI har ikke brug for at kende længden på arrayet f.eks.
  //element referere til a tag
   //element.addEventListener("click", (e) => { //Funktionen virker, men da den lave pagerefresh kan vi ikke nå og se at funktionen køre. Derfor skal vi bruge prevent.default
      //e er et objekt som indeholder informationer, som kan bruges til at gøre mange forskellige ting.
      //e.preventDefault();//den preventer at browseren udføre sin default. i dette tilælde at reloade page.
      //vi oplever at når vi aktivere preventDefault sender den ikke link informationen med op i URL'en.

      //vi vælger at bruge url.searchParams.get() fordi den giver os mulighed for at henter værdierne ned fra URL'en
      //console.log(e);
   //})

//})





//--------------------------------Mine forsøg på en løsning---------------------------------//
//from user point of wiev makes the experience faster, because it doesnot have to reload the entire page.

//En dårlig løsning til det er at bruge check-box synlig og usynlig, fordi man ikke har brugt javascript.

//https://www.google.com/search?q=urlsearchpparams.get+youtube&rlz=1C1CHZN_daDK1018DK1018&oq=ur&aqs=chrome.0.69i59l3j69i57j35i39j69i61j69i60l2.2378j0j4&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:89fa1f00,vid:CZP1iQFQjEY

//page is parameter and after the = sign is their value page1

//console.log("Window Location:", window.location);

//const myKeysValues = window.location.search;
//console.log("Keys and Values:", myKeysValues )

//we will parse querystring parameters using URL search params
// we will resolve the querysting parameters using the URL search params

//const urlParams = new URLSearchParams(myKeysValues);

//get method will return the first param

//const param1 = urlParams.get('page');
//const param2 = urlParams.get('page');
//const param3 = urlParams.get('page');


//console.log("page1:", param1)
//console.log("page2:", param2)
//console.log("page3:", param3)

//-------------Virker ikke fordi den viser kun page3 eller null

//-------https://www.youtube.com/watch?v=-D5YGTkTBH4&t=65s
//const queryStr = window.location.search // the raw string
//const usp = new URLSearchParams(queryStr) //the raw string is parsed into the constructor of search params

//const myPage = usp.get('page1') //parsing a key 'page1'

//console.log(`Value for "page1": ${myPage}`) //makes it possible to parse the name

//usp.set('page', 'page2') //this one makes it possible to change the name of the url search params.


//loop
//for (const [key, value] of usp) { //array destructuring, looping thourgh each key and value of the URL Search params
//   console.log(`${key} => ${value}`) //using a template string parses the URL search params, and extracts the key and value in a for loop
//}

//console.log(usp.toString())//this one converts the object into the raw string

//virker men jeg ved ikke hvordan jeg skal forbinde det med page1, page2 og page3.
