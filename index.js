rows = [];
for (const divEl of document.getElementsByClassName('row')) {
  rows.push([
    divEl.getElementsByClassName('current_amount')[0],
    divEl.getElementsByClassName('percentage')[0],
    divEl.getElementsByClassName('result')[0]
  ]);
}

roundTwo = x => Math.round(100 * x) / 100;

calculateContributions = () => {
  V = rows.reduce((a, b) => {
    return +(b[0].value) + a;
  }, 0);
  C = +(document.getElementsByClassName('contribution')[0].value);
  let contributions = 0;
  for (let i = 0; i < rows.length; ++i) {
    if (i === rows.length) {
      rows[i][2].parentElement
        .MaterialTextfield.change(
        roundTwo(C - contributions));
      continue;
    }
    const requiredContrib = roundTwo(
      (rows[i][1].value / 100.0) * (V + C) - rows[i][0].value);
    contributions += requiredContrib;
    rows[i][2].parentElement
      .MaterialTextfield.change(
      requiredContrib);
  }
};
