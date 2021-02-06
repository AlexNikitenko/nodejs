const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs').promises;

const urlBreeds = 'https://api.thecatapi.com/v1/breeds';

/* GET home page. */
router.get('/', function(req, res, next) {
  axios
  .get(urlBreeds)
  .then(result => result.data.map(el => el.reference_image_id))
  .then(result => {
    axios.get(`https://api.thecatapi.com/v1/images/${result[1]}`)
      .then(result => {
        console.log('>>>res: ', result.data.url);
          return fs.writeFile('1.txt', result.data.url);
      })
      .then(() => fs.readFile('1.txt'))
      .then(result => res.render('index', { imgUrl: result }))
      .catch(err => console.log('Error1: ', err))
      ;
  })
  .catch(err => console.log('Error2: ', err))
  ;
});

module.exports = router;


