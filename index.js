let searchicon=document.querySelector('.search-icon')
let input=document.querySelector('.ipbox')
let temp=document.querySelector('.temp')
let city=document.querySelector('.cityname')
let humiddisp=document.querySelector('.humid')
let winddisp=document.querySelector('.windy')
let weathericon=document.querySelector('.weathericon')
let initialdisplay=document.querySelector('.initial-display')
searchicon.addEventListener('click',start)

initialdisplay.style.display='none'
// function kelvintocelsius(temperature)
// {
//  return (temperature-273.15).toFixed(1)
// }

function displaydata(cityname,citytempcelsius,humidity,windspeed,weathericons)
{
initialdisplay.style.display='block'
city.innerText=cityname;
temp.innerHTML=`${citytempcelsius}&deg;c`;
humiddisp.innerHTML=`${humidity}%`;
winddisp.innerHTML=`${windspeed}  Km/hr`;

switch(weathericons)
{
    case 'clear':
        weathericon.setAttribute('src','images/clear.png')
        break;
    
    case 'Clouds':
            weathericon.setAttribute('src','images/clouds.png')
            break;
    
    case 'drizzle':
        weathericon.setAttribute('src','images/drizzle.png')
        break;

    case 'mist':
            weathericon.setAttribute('src','images/mist.png')
            break;

            case 'rain':
                weathericon.setAttribute('src','images/rain.png')
                break;
                
   case 'snow':
                    weathericon.setAttribute('src','images/snow.png')
                    break;
        default:
            weathericon.setAttribute('src','images/clear.png')
                    break;


}

}


async function apicall(data) {
    try {
      let p = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data}&APPID=1e4001997ab2b10e794e8245ba3db3d2&units=metric`);
  
      if (p.ok) {
        let citydata = await p.json();
  
        console.log(citydata);
  
        let cityname = citydata.name;
        let citytempcelsius = Number(citydata.main.temp).toFixed(0);
        let humidity = Number(citydata.main.humidity);
        let windspeed = Number(citydata.wind.speed);
        let weathericons = citydata.weather[0].main;
  
        console.log(weathericons);
  
        displaydata(cityname, citytempcelsius, humidity, windspeed, weathericons);
      } else {
        console.log('City not found.');
        // Hide the initial block here
        // initialdisplay.style.display='block'
        // initialdisplay.innerHTML = '<p style="margin-top:10px">City Not Found</p>';
        alert('City not found')
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  



function start()
{
let data=input.value;
console.log(data)
apicall(data);
}







