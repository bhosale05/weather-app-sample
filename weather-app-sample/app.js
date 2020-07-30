const http = require('http')
const fs = require('fs');
const weather = require('./utility/weather')

const address = process.argv[2]

if(!address){
  console.log('Please Enter Location...')
} else {
    weather(address, (error, data) => {
      if(error){
        console.log('An Error : ', error)
      } else {
        console.log('Weather Info : ',data)
      }
    })
}
