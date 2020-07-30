const request = require('request')

function checkPrimeNumber(num)
{
  if (num===1)
  {
    return false;
  }
  else if(num === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < num; x++)
    {
      if(num % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
const getWeater = (address, callback) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&appid=1242d0ac5af779f78e1639cdabb361b9`

    request({ url , json : true}, (error, data)  => {
        if(error){
            callback('Unable to connect Warther Site!',undefined)
        } else if(data.body.error){
            callback('Unable to find Location, Please Enter the location',undefined)
        } else {
            let currentDay = new Date().getDate();
            const isPrime = checkPrimeNumber(currentDay);
            let message = '';
            if(isPrime){
                message = `CurrentDay : ${currentDay} is Prime date`;
            }else {
                message = `CurrentDay : ${currentDay} is Not Prime date`;
            }
                    
            callback(undefined,{
                message: message,
                // data : data
                location: data.body.name,
                weather_Desc: data.body.weather[0].description,
                temperature: data.body.main.temp
            })
        }
    })
}
module.exports = getWeater