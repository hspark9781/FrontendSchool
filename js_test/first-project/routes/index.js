
/*
var express = require('express');
var router = express.Router();
let arr = [];

// router.post('/main', (req, res) => {
//   // res.json ({
//   //   message : 'main success!!'
//   // });
//   // const data = req.body.data;
//   // res.send('문자열이 응답됩니다!!');
//   // res.json({
//   //   message : 'json 응답'
//   // });

//   res.render('index');
// });

// GET
router.get('/read', (req, res) => {
  res.status(200).json({
    message : 'read success'
  });
});


// POST
router.post('/create', (req, res) => {
  // console.log(req.body);
  // const data = req.body.data;
  const {data} = req.body;
  arr.push(data);
  res.status(200).json({
    message : 'create success',
    result : arr
  });
});

// PUT 
router.put('/update/:id', (req, res) => {
  const {id} = req.params;
  const {data} = req.body;
  arr[id] = data;
  res.status(200).json({
    message : 'update success',
    result : arr
  });
  console.log(id);
});


//DELETE
router.delete('/delete/:id', (req, res) => {
  const {id} = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message : 'delete success',
    result : arr
  });
}); 

module.exports = router;
*/

var express = require('express');
var router = express.Router();
const loginCheck = require('../module/loginCheck');
const upload = require('../module/imageUpload');


router.get('/', loginCheck, (req, res ) => {
  res.status(200).json({
    message : 'login success'
  });
});

router.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message : 'upload success'
  });
});

module.exports = router;

