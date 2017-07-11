module.exports = [
  /*  idade  |   salario       |   casa     |  emprestimo  */
  /*  >18    |   >1/3 parcela  |   propria? |  aprovado?   */
  { input: [0, 1, 1], output: [0] },
  { input: [0, 1, 0], output: [0] },
  { input: [0, 0, 1], output: [0] },
  { input: [0, 0, 0], output: [0] },
  { input: [1, 1, 1], output: [1] },
  { input: [1, 0, 1], output: [1] },
  { input: [1, 1, 0], output: [1] },
  { input: [1, 0, 0], output: [0] },
];

exports.default = module.exports;