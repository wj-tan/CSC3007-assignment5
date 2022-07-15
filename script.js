// Api link for data gov environment data
const apiUrl = 'https://api.data.gov.sg/v1/environment/psi'
var environmentData = null;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        // Store Json data in environmentData variable
        environmentData = data.items[0].readings
        locationData = data.region_metadata[0].label_location
        // console.log(environmentData)
        console.log(locationData)

        // var longitute1 = data.region_metadata[0].label_location.
        var latitude1 = data.region_metadata[0].label_location.latitude
        var longitude1 = data.region_metadata[0].label_location.longitude

        // Omitted 
        // var latitude2 = data.region_metadata[1].label_location.latitude
        // var longitude2 = data.region_metadata[1].label_location.longitude

        var latitude2 = data.region_metadata[2].label_location.latitude
        var longitude2 = data.region_metadata[2].label_location.longitude

        var latitude3 = data.region_metadata[3].label_location.latitude
        var longitude3 = data.region_metadata[3].label_location.longitude

        var latitude4 = data.region_metadata[4].label_location.latitude
        var longitude4 = data.region_metadata[4].label_location.longitude

        var latitude5 = data.region_metadata[5].label_location.latitude
        var longitude5 = data.region_metadata[5].label_location.longitude

        console.log(latitude2)
        console.log(longitude2)

        console.log(latitude3)
        console.log(longitude3)

        console.log(latitude4)
        console.log(longitude4)

        console.log(latitude5)
        console.log(longitude5)

        // Object.keys(environmentData).map(key => {
        //     console.log(environmentData[key]);

        // })

        // Object.values(environmentData).map(value => {
        //     console.log(value);
        // })

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


        // Drawing the circle based on the latitude and longitude    
        var circle1 = L.circle([latitude1, longitude1], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);

        var circle2 = L.circle([latitude2, longitude2], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);

        var circle3 = L.circle([latitude3, longitude3], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);

        var circle4 = L.circle([latitude4, longitude4], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);

        var circle5 = L.circle([latitude5, longitude5], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);


    });