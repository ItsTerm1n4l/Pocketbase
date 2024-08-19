  const cheerio = require('cheerio');
const axios = require('axios');
//import { axios } from 'axios'
//import { cheerio } from 'cheerio'

const url = 'https://www.amazon.co.uk/RK-ROYAL-KLUDGE-RK61-Mechanical/dp/B0CRB1RK2V';
axios.get(url)
  .then(response => {
    const $ = cheerio.load(response.data);
    const price = $('#priceblock_ourprice').text();
    console.log(price);
  })
  .catch(error => {
    console.log(error);
  });
