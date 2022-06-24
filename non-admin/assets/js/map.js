function initMap() {

    //Map option
    var options = {
        center: {lat: 41.8781136, lng: -87.6297982},
        zoom: 13
    }

    //new map
    map = new google.maps.Map(document.getElementById('map'),options)


    //markers
    // const marker = new google.maps.Marker({
    //     position: {lat: 41.8847148, lng: -87.630503},
    //     map: map,
    //     icon:"https://img.icons8.com/nolan/2x/marker.png"
    // });
    
    // //info window
    // const detailWindow = new google.maps.InfoWindow({
    //     content: `<img src="/assets/img/linkedin-acc-logo.jpg"></img> <h2>Accenture Locatoins<h2>`
    // });

    // marker.addListener("click", () => {
    //     detailWindow.open(map, marker);
    // })


    //add markers to array
        let MarkerArray = [addMarker({location:{lat: 41.8847148, lng: -87.630503}, /*imageIcon: "https://img.icons8.com/nolan/2x/marker.png" ,*/
        content: `<h6>161 N Clark St, Chicago, IL 60601
        </h6>`}),
        
        addMarker({location:{lat: 41.8959377, lng: -87.6522959}, content: `<h6>965 W Chicago Ave Fl 1, Chicago, IL 60642</h6>` }),

        addMarker({location:{lat: 41.8823566, lng: -87.6404745}, content: `<h6>500 W Madison St, 22nd & 23rd Floors, Chicago, IL 60661</h6>
        ` })
    ]


    //loop through markers
    for (let i = 0; i < MarkerArray.length; i++) {
        addMarker(addMarker[i]);
    }


    //add marker
    function addMarker(property) {
        const marker = new google.maps.Marker({
            position: property.location,
            map: map,
            //icon:property.imageIcon
          });

          //check for custom Icon
          if(property.imageIcon) {
            // set image icon
            marker.setIcon(property.imageIcon)
          }

          if(property.content) {
                
          const detailWindow = new google.maps.InfoWindow({
            content: property.content
          });

          marker.addListener("click", () => {
                detailWindow.open(map, marker);
        })
          }

    }

        
         
        
}