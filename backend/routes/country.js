/*
    /countries
    host + /api/countries
*/


const { v4: uuidv4 } = require( 'uuid' );
const { Router } = require( 'express' );
const Country = require( '../models/Country' );
const router = Router();

router.get( '/:uuid', async ( req, res ) => {

  const { uuid } = req.params;
  const country = await Country.findOne({ uuid });
  res.send( country );

});

router.get( '/', async ( req, res ) => {

  const countries = await Country.find({});

  return res.json( countries );

});

router.post( '/', async ( req, res ) => {

  const { name, numcode } = req.body;

  const uuid = uuidv4();

  const country = new Country({ uuid, name, numcode });

  await country.save();

  return res.json( country );

});

router.put( '/', async ( req, res ) => {

  const { uuid, name, numcode } = req.body;
  const country = await Country.findOneAndUpdate({ uuid }, { name, numcode }, { new: true });

  return res.json( country );

});

router.delete( '/', async ( req, res ) => {

  const { uuid } = req.body;
  const country = await Country.findOneAndDelete({ uuid });

  return res.json( country );

});

module.exports = router;
