      // Map initialization 
      var map = L.map('map').setView([14.0860746, 100.608406], 8);

      //osm layer
      var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> InterScience'
  
      });
      osm.addTo(map);
      const findMe = () => {
              const status = document.querySelector('.status');
              if(!navigator.geolocation) {
                console.log("Your browser doesn't support geolocation feature!")
            } else {
                setInterval(() => {
                    navigator.geolocation.getCurrentPosition(getPosition)
                },);
            }
              const success = (position) => {
                  console.log(position);
                  const latitude = position.coords.latitude;
                  const longitude = position.coords.longitude;
          
          //Adding Date
          
                  var today = new Date();
                  var dd = String(today.getDate()).padStart(2, '0');
                  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                  var yyyy = today.getFullYear();
                  today = mm + '/' + dd + '/' + yyyy;
          //  document.write(today);
          //Adding Time
          
                      function formatAMPM(date) {
                      var hours = date.getHours();
                      var minutes = date.getMinutes();
                      var ampm = hours >= 12 ? 'pm' : 'am';
                      hours = hours % 12;
                      hours = hours ? hours : 12; // the hour '0' should be '12'
                      minutes = minutes < 10 ? '0'+minutes : minutes;
                      var strTime = hours + ':' + minutes + ' ' + ampm;
                      return strTime;
            }
               
          
          //   console.log(formatAMPM(new Date));
          
                  const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
                  fetch(geoApiUrl)
                  .then(res => res.json())
                  .then(data => {
                      console.log(data)
                      status.textContent = `${data.locality}, ${data.city} ${data.countryName} ${today} (${formatAMPM(new Date)})`; 
                       //document.getElementById(currentDate);
                       const save = document.getElementById("Submit").innerHTML = "Submit";       
                       
                  }) 
                
                  
              }
              const error = () => {
                  status.textContent = 'Unable to get Location';
              }
              navigator.geolocation.getCurrentPosition(success, error)
          } 
          document.querySelector('.find-state').addEventListener('click', findMe);    
  
      var marker, circle;
  
      function getPosition(position){
          // console.log(position)
          var lat = position.coords.latitude
          var long = position.coords.longitude
          var accuracy = position.coords.accuracy
  
          if(marker) {
              map.removeLayer(marker)
          }
  
          if(circle) {
              map.removeLayer(circle)
          }
  
          marker = L.marker([lat, long])
          circle = L.circle([lat, long], {radius: accuracy})
  
          var featureGroup = L.featureGroup([marker, circle]).addTo(map)
  
          map.fitBounds(featureGroup.getBounds())
  
          console.log("Your coordinate is: Lat: "+ lat +" Long: "+ long+ " Accuracy: "+ accuracy)
      }  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   