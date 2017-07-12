const fs                              = require('fs');
const path                            = require('path');
const { Architect, Trainer, Network } = require('synaptic');

const backupFile = path.join(__dirname, 'myPerceptron.json');

let myNetwork;

try {
  myNetwork = require(backupFile);
  myNetwork = Network.fromJSON(myNetwork);
} catch(err) {
  myNetwork = new Architect.Perceptron(3, 6, 3, 2, 1);
}

myNetwork.save = function(filePath) {
  filePath = filePath || backupFile;
  return new Promise((resolv, reject) => {
    fs.writeFile(filePath, JSON.stringify(this.toJSON()), (err) => {
      if (err) return reject(err);
      resolv();
    });
  });
};

module.exports = myNetwork;
exports.default = module.exports;