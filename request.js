var request = new XMLHttpRequest()

//


async function getRandomCountry(){
    const url  = "https://restcountries.eu/rest/v2/all"
    var response =  await fetch(url)
    var data = await response.json()

    console.log("Fetch",(response))
    console.log("Fetch .json()",(data))
}