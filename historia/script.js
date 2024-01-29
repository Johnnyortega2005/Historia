function createHistoricalRelation(dante, beatrice) {
  let alighieri = { name: "Dante Alighieri" };
  let portinari = { name: "Beatrice Portinari" };

  alighieri.bestFriend = portinari;
  portinari.bestFriend = alighieri;

  return {
    "Dante Alighieri": alighieri,
    "Beatrice Portinari": portinari,
  };
}

let historicalCouple = createHistoricalRelation();
console.log("el objeto principal es");
console.log(historicalCouple);
alert(historicalCouple["Beatrice Portinari"].bestFriend.name);
delete historicalCouple["Beatrice Portinari"];
alert(historicalCouple["Beatrice Portinari"]);
delete historicalCouple["Dante Alighieri"].bestFriend;
console.log(historicalCouple);
