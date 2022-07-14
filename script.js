// Api link for data gov environment data
const apiUrl = 'https://api.data.gov.sg/v1/environment/psi'
var environmentData = null;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        // Store Json data in environmentData variable
        environmentData = data.items[0].readings
        console.log(environmentData)

        Object.keys(environmentData).map(key =>{
            console.log(environmentData[key]);

        })

        Object.values(environmentData).map(value=>{
            console.log(value);
        })


    });