const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

router.get('/celebrities/new', (req,res,next)=>{
  res.render('celebrities/new')
})

router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
  .then( celebrities =>
    res.render('celebrities/index', {celebrities} )
  )
  .catch(err => next(err))

});

router.get('/celebrities/:id', (req, res, next) => {

  Celebrity.findById(req.params.id)
  .then( celebrity =>
    res.render('celebrities/show', {celebrity} )
  )
  .catch(err => next(err))

});


router.post('/celebrities', (req, res, next) => {

  const celebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })

  celebrity.save()
  .then(done =>
    res.redirect('/celebrities')
  )
  .catch(err => 
    next(err), 
    res.redirect('/celebrities/new'))
});


router.post('/celebrities/:id/delete', (req, res, next) => {

  Celebrity.findByIdAndRemove(req.params.id)
  .then(res.redirect('/celebrities'))
  .catch(err => next(err));
});



module.exports = router;