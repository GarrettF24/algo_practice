function disemvowel(str) {
  return str.replace(/[aieou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!'));
module.exports = disemvowel;
