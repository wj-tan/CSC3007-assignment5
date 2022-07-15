// Api link for data gov environment data
const apiUrl = 'https://api.data.gov.sg/v1/environment/psi'
var environmentData = null;
var psi = null;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        // Store Json data in environmentData variable
        environmentData = data.items[0].readings
        locationData = data.region_metadata[0].label_location
        psi = environmentData.psi_twenty_four_hourly

        // Declare long and lat of Singapore regions
        var westLat = data.region_metadata[0].label_location.latitude
        var westLong = data.region_metadata[0].label_location.longitude

        var eastLat = data.region_metadata[2].label_location.latitude
        var eastLong = data.region_metadata[2].label_location.longitude

        var centLat = data.region_metadata[3].label_location.latitude
        var centLong = data.region_metadata[3].label_location.longitude

        var southLat = data.region_metadata[4].label_location.latitude
        var southLong = data.region_metadata[4].label_location.longitude

        var northLat = data.region_metadata[5].label_location.latitude
        var northLong = data.region_metadata[5].label_location.longitude


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



        // Drawing the circle based on the latitude and longitude declared above    
        var westCircle = L.marker([westLat, westLong], {
            icon: L.divIcon({
                className: 'my-custom-icon',
                html: psi.west // Value is retrieved from api
            })
        });

        westCircle.addTo(map);

        var eastCircle = L.marker([eastLat, eastLong], {
            icon: L.divIcon({
                className: 'my-custom-icon',
                html: psi.east
            })
        });

        eastCircle.addTo(map);

        var centCircle = L.marker([centLat, centLong], {
            icon: L.divIcon({
                className: 'my-custom-icon',
                html: psi.central
            })
        });

        centCircle.addTo(map);

        var southCircle = L.marker([southLat, southLong], {
            icon: L.divIcon({
                className: 'my-custom-icon',
                html: psi.south
            })
        });

        southCircle.addTo(map);

        var northCircle = L.marker([northLat, northLong], {
            icon: L.divIcon({
                className: 'my-custom-icon',
                html: psi.north
            })
        });

        northCircle.addTo(map);


    });