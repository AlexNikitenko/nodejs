// А) получаем ссылку на картинку кота с сайта thecatapi.com 
// Б) записываем эту ссылку в файл на диск
// В) читаем ссылку из файла 
// Г) отображаем картинку на странице.
const axios = require('axios');
const fs = require('fs').promises;

const urlBreeds = 'https://api.thecatapi.com/v1/breeds';

// const getCatUrl = () =>{
//   axios
//   .get(urlBreeds)
//   .then(result => result.data.map(el => el.reference_image_id))
//   .then(result => {
//     axios.get(`https://api.thecatapi.com/v1/images/${result[1]}`)
//       .then(result => {
//         console.log('>>>res: ', result.data.url);
//         return fs.writeFile('1.txt', result.data.url);
//       })
//       .catch(err => console.log('Error: ', err))
//       ;
//   })
//   .catch(err => console.log('Error: ', err))
//   ;
// }     

// getCatUrl();
// console.log('start here');                