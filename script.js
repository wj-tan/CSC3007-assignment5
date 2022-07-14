// Api link for data gov environment data
const apiUrl = 'https://api.data.gov.sg/v1/environment/psi'
var environmentData = null;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        // Store Json data in environmentData variable
        environmentData = data.items[0].readings
        console.log(environmentData)

        Object.keys(environmentData).map(key => {
            console.log(environmentData[key]);

        })

        Object.values(environmentData).map(value => {
            console.log(value);
        })

        let tiles = new L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 18,
            minZoom: 11,
            //Do not remove this attribution
            attribution: '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;">' +
                'New OneMap | Map data © contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
        });

        // Add MaxBound
        let map = new L.Map("map", {
            center: [1.347833, 103.809357],
            zoom: 11,
            maxBounds: L.latLngBounds(L.latLng(1.1, 103.5), L.latLng(1.5, 104.3))
        })
            .addLayer(tiles);


    });