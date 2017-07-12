const { Router }  = require('express');

const myNetwork = require('../redeNeural');

const router = Router();

router.post('/', (req, res, next) => {
  const { salario, idade, moradia, montante, parcelas } = req.body;

  let entrySalario = salario > (montante / parcelas) ? 1 : 0;
  let entryIdade   = idade > 18 ? 1 : 0;
  let entryMoradia = moradia ? 1 : 0;

  let result = myNetwork.activate([entryIdade, entrySalario, entryMoradia]);

  if (result[0] > 0.5) {
    res.send({ message: 'aprovado' })
  } else {
    res.status(403).send({ message: 'não aprovado' })
  }
});

module.exports = router;