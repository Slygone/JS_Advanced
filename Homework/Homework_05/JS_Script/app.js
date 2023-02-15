
// const baseUrl = 'https://restcountries.com/v2/alpha'
const baseUrl = 'https://restcountries.com/v3.1/alpha'


const getData = async (code) =>{
    const response = await fetch(`${baseUrl}/${code}`)
    const data = await response.json();
    console.log(data[0].name);
    const borderCodes = data[0].borders
    for(let borderCode of borderCodes){
        const bordersResponse = await fetch (`${baseUrl}/${borderCode}`)
        const borderData = await bordersResponse.json();
        console.log(borderData[0].name);
    }
}
const code = 'MKD'
getData(code)