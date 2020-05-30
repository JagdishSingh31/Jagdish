
var icon=document.createElement("img")
function WeatherCheck(){
var input=document.getElementById("user").value;
url=`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=6e4f816c9f38537e748e7ce0f00c7d4e`;

      fetch(url).then(function(response){
          return response.json()
      }).then(function(data){
      var city=data.name;
       Temp=Math.floor(data.main.temp/10)
       Temp_min=Math.floor(data.main.temp_min/10)
      Temp_max=Math.floor(data.main.temp_max/10);
      var description=data.weather[0].description;
      des=data.weather[0].description
var icon_code=data.weather[0].icon;
 icon.src=`http://openweathermap.org/img/wn/${icon_code}@2x.png`
     document.getElementById("city-name").innerHTML="Name: "+city;

document.getElementById("city-name").appendChild(icon);

     document.getElementById("Temp-value").innerHTML=Temp+'&deg;C';
     document.getElementById("Temp-min").innerHTML=Temp_min+'&deg;C';
     document.getElementById("Temp-max").innerHTML=Temp_max+'&deg;C';
     
     document.getElementById("description").innerHTML=des;
     
     
     document.getElementById('Weather-box').style.display="block";
     
      }).catch(function(e){
         error="Somthing went wrong "+e;
         document.getElementById("city-name").innerHTML=error;
         
         document.getElementById('Weather-box').style.display="block";
      })

  }
  
//-------delhi weather-------//
var icon2=document.createElement("img")
var url="http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=6e4f816c9f38537e748e7ce0f00c7d4e"
fetch(url).then((resolve)=>{
    return resolve.json()
}).then((data)=>{
   var temp=Math.floor(data.main.temp/10)
   
  var min_temp=Math.floor(data.main.temp_min/10)
  
  var max_temp=Math.floor(data.main.temp_max/10);
   
  var des=data.weather[0].description;
 var icon_code=data.weather[0].icon;
icon2.src=`http://openweathermap.org/img/wn/${icon_code}@2x.png`

document.getElementById("del").appendChild(icon2);
   document.getElementById("Dtemp").innerHTML+=temp+'&deg;C';
   
 document.getElementById("D-min-temp").innerHTML+=min_temp+'&deg;C'
 
 
 document.getElementById("D-max-temp").innerHTML+=max_temp+'&deg;C'
 
 document.getElementById("D-Description").innerHTML+=des;
 
})




//-------NewYorkWeather-------//

var icon3=document.createElement("img")
var url="http://api.openweathermap.org/data/2.5/weather?q=new york&appid=6e4f816c9f38537e748e7ce0f00c7d4e"

fetch(url).then((resolve)=>{
    return resolve.json()
}).then((data)=>{
   var temp=Math.floor(data.main.temp/10)
   
  var min_temp=Math.floor(data.main.temp_min/10)
  
  var max_temp=Math.floor(data.main.temp_max/10);
   
  var des=data.weather[0].description;
  
  var icon_code=data.weather[0].icon;
icon3.src=`http://openweathermap.org/img/wn/${icon_code}@2x.png`

document.getElementById("NY").appendChild(icon3);
   document.getElementById("Ntemp").innerHTML+=temp+'&deg;C';
   
 document.getElementById("N-min-temp").innerHTML+=min_temp+'&deg;C'
 
 
 document.getElementById("N-max-temp").innerHTML+=max_temp+'&deg;C'
 
 document.getElementById("N-Description").innerHTML+=des;
 
})



//-------LondonWeather--------//

var icon4=document.createElement("img")
var url="http://api.openweathermap.org/data/2.5/weather?q=london&appid=6e4f816c9f38537e748e7ce0f00c7d4e"
fetch(url).then((resolve)=>{
    return resolve.json()
}).then((data)=>{
   var temp=Math.floor(data.main.temp/10)
   
  var min_temp=Math.floor(data.main.temp_min/10)
  
  var max_temp=Math.floor(data.main.temp_max/10);
  var des=data.weather[0].description;
   var icon_code=data.weather[0].icon;
icon4.src=`http://openweathermap.org/img/wn/${icon_code}@2x.png`

document.getElementById("Lon").appendChild(icon4); 
   document.getElementById("Ltemp").innerHTML+=temp+'&deg;C';
   
 document.getElementById("L-min-temp").innerHTML+=min_temp+'&deg;C'
 
 
 document.getElementById("L-max-temp").innerHTML+=max_temp+'&deg;C'
 
 document.getElementById("L-Description").innerHTML+=des;
 
})


//----------Hong Kong--------//
var icon5=document.createElement("img")

var url="http://api.openweathermap.org/data/2.5/weather?q=hong kong&appid=6e4f816c9f38537e748e7ce0f00c7d4e"
fetch(url).then((resolve)=>{
    return resolve.json()
}).then((data)=>{
   var temp=Math.floor(data.main.temp/10)
   
  var min_temp=Math.floor(data.main.temp_min/10)
  
  var max_temp=Math.floor(data.main.temp_max/10);
  var des=data.weather[0].description;
    var icon_code=data.weather[0].icon;
icon5.src=`http://openweathermap.org/img/wn/${icon_code}@2x.png`

document.getElementById("HK").appendChild(icon5);
   document.getElementById("Htemp").innerHTML+=temp+'&deg;C';
   
 document.getElementById("H-min-temp").innerHTML+=min_temp+'&deg;C'
 
 
 document.getElementById("H-max-temp").innerHTML+=max_temp+'&deg;C'
 
 document.getElementById("H-Description").innerHTML+=des;
 
})

//-------sydneyWeather--------//

var icon6=document.createElement("img")
var url="http://api.openweathermap.org/data/2.5/weather?q=sydney&appid=6e4f816c9f38537e748e7ce0f00c7d4e"
fetch(url).then((resolve)=>{
    return resolve.json()
}).then((data)=>{
   var temp=Math.floor(data.main.temp/10)
   
  var min_temp=Math.floor(data.main.temp_min/10)
  
  var max_temp=Math.floor(data.main.temp_max/10);
  var des=data.weather[0].description;
    var icon_code=data.weather[0].icon;
icon6.src=`http://openweathermap.org/img/wn/${icon_code}@2x.png`

document.getElementById("SY").appendChild(icon6);


   document.getElementById("Stemp").innerHTML+=temp+'&deg;C';
   
 document.getElementById("S-min-temp").innerHTML+=min_temp+'&deg;C'
 
 
 document.getElementById("S-max-temp").innerHTML+=max_temp+'&deg;C'
 
 document.getElementById("S-Description").innerHTML+=des;
 
})



//---------DubaiWeather------//
var icon7=document.createElement("img")

var url="http://api.openweathermap.org/data/2.5/weather?q=dubai&appid=6e4f816c9f38537e748e7ce0f00c7d4e"
fetch(url).then((resolve)=>{
    return resolve.json()
}).then((data)=>{
   var temp=Math.floor(data.main.temp/10)
   
  var min_temp=Math.floor(data.main.temp_min/10)
  
  var max_temp=Math.floor(data.main.temp_max/10);
  var des=data.weather[0].description;
    var icon_code=data.weather[0].icon;
icon7.src=`http://openweathermap.org/img/wn/${icon_code}@2x.png`

document.getElementById("DU").appendChild(icon7);
   document.getElementById("Dutemp").innerHTML+=temp+'&deg;C';
   
 document.getElementById("Du-min-temp").innerHTML+=min_temp+'&deg;C'
 
 
 document.getElementById("Du-max-temp").innerHTML+=max_temp+'&deg;C'
 
 document.getElementById("Du-Description").innerHTML+=des;
 
})

//------WellingtonWeather-----//

var icon8=document.createElement("img")
var url="http://api.openweathermap.org/data/2.5/weather?q=Wellington&appid=6e4f816c9f38537e748e7ce0f00c7d4e"
fetch(url).then((resolve)=>{
    return resolve.json()
}).then((data)=>{
   var temp=Math.floor(data.main.temp/10)
   
  var min_temp=Math.floor(data.main.temp_min/10)
  
  var max_temp=Math.floor(data.main.temp_max/10);
    
  var des=data.weather[0].description;
    var icon_code=data.weather[0].icon;
icon8.src=`http://openweathermap.org/img/wn/${icon_code}@2x.png`

document.getElementById("Wel").appendChild(icon8);
   document.getElementById("Wtemp").innerHTML+=temp+'&deg;C';
   
 document.getElementById("W-min-temp").innerHTML+=min_temp+'&deg;C'
 
 
 document.getElementById("W-max-temp").innerHTML+=max_temp+'&deg;C'
 
 document.getElementById("W-Description").innerHTML+=des;
 
})


//--------ParisWeather--------//
var icon9=document.createElement("img")
var url="http://api.openweathermap.org/data/2.5/weather?q=paris&appid=6e4f816c9f38537e748e7ce0f00c7d4e"
fetch(url).then((resolve)=>{
    return resolve.json()
}).then((data)=>{
   var temp=Math.floor(data.main.temp/10)
   
  var min_temp=Math.floor(data.main.temp_min/10)
  
  var max_temp=Math.floor(data.main.temp_max/10);
  var des=data.weather[0].description;
    var icon_code=data.weather[0].icon;
icon9.src=`http://openweathermap.org/img/wn/${icon_code}@2x.png`

document.getElementById("Par").appendChild(icon9);
   document.getElementById("Ptemp").innerHTML+=temp+'&deg;C';
   
 document.getElementById("P-min-temp").innerHTML+=min_temp+'&deg;C'
 
 
 document.getElementById("P-max-temp").innerHTML+=max_temp+'&deg;C'
 
 document.getElementById("P-Description").innerHTML+=des;
 
})


//-------Capetown weather-----//

var icon10=document.createElement("img")
var url="http://api.openweathermap.org/data/2.5/weather?q=cape town&appid=6e4f816c9f38537e748e7ce0f00c7d4e"
fetch(url).then((resolve)=>{
    return resolve.json()
}).then((data)=>{
   var temp=Math.floor(data.main.temp/10)
   
  var min_temp=Math.floor(data.main.temp_min/10)
  
  var max_temp=Math.floor(data.main.temp_max/10);
  var des=data.weather[0].description;
    var icon_code=data.weather[0].icon;
icon10.src=`http://openweathermap.org/img/wn/${icon_code}@2x.png`

document.getElementById("CT").appendChild(icon10);
   document.getElementById("Ctemp").innerHTML+=temp+'&deg;C';
   
 document.getElementById("C-min-temp").innerHTML+=min_temp+'&deg;C'
 
 
 document.getElementById("C-max-temp").innerHTML+=max_temp+'&deg;C'
 
 document.getElementById("C-Description").innerHTML+=des;
 
})