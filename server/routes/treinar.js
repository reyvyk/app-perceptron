const { Router }  = require('express');
const { Trainer } = require('synaptic');

const myNetwork = require('../redeNeural');
const trainingSet = require('../dumiData');

const router = Router();

router.get('/', (req, res, next) => {
  const { query } = req;
  const error = query.err || .002;
  const iterations = query.it || 2E5; /* duzentos mil */
  const rate = query.r || .1;

  const trainer = new Trainer(myNetwork)
  try {
    trainer.train(trainingSet, {
      rate,
      iterations, /* duzentos mil */
      error,
      shuffle: true,
      log: 1000,
      cost: Trainer.cost.CROSS_ENTROPY
    });
    myNetwork.save()
      .then(() => console.log('Rede neural treinada e salva'))
      .catch(console.log);

    res.send('rede treinada');
  } catch(err) {
    res.status(500).send(err);
  }
});

module.exports = router;