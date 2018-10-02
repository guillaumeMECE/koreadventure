var money = 0;

const upgradeAventureRate = 2;
const upgradeAventurePrice = 2;

function Adventure(rate, time, earn, upgradePrice, id, upgradeRate) {
   this.rate = rate,
      this.time = time,
      this.earn = earn,
      this.upgradePrice = upgradePrice,
      this.id = id,
      this.upgradeRate = upgradeRate,

      //methods
      this.earnMoney = earnMoney,
      this.upgrade = upgrade
   this.show = showInformation;
   this.unLock = unLock;
}

function earnMoney() {
   var self = this;
   setTimeout(function() {
      money = money + self.earn * self.rate;
      document.getElementById("money").innerHTML = money;
   }, this.time);
}

function upgrade() {
   if (this.upgradePrice <= money) {
      this.earn = this.earn + this.earn * upgradeAventureRate;
      this.upgradeRate = this.upgradeRate + this.upgradeRate * upgradeAventureRate;
      money = money - this.upgradePrice;
      document.getElementById("money").innerHTML = money;
      this.upgradePrice = this.upgradePrice * upgradeAventurePrice;
   }
}

function unLock() {
   if (money >= 1) {
      var button = document.createElement("input");
      button.type = "button";
      button.onclick = "test()";
   }
}

function showInformation() {
   console.log(
      "rate : " + this.rate + "\n" + "time : " + this.time + "\n" + "earn : " + this.earn + "\n" + "uprgrade price : " + this.upgradePrice);
}


var adventure1 = new Adventure(1, 1000, 1, 2, "adventure1", 1);

function test() {
   adventure1.earnMoney();
   adventure1.show();

}

function test2() {
   adventure1.unLock();

}

function updatePoint(money) {
   document.getElementById("money").innerHTML = money;
}

window.onload = function() {
  init();
};
function init() {
   // Get a reference to the database service
   var database = firebase.database();
   var pointInit = firebase.database().ref('team/0/point');
   pointInit.on('value', function(snapshot) {
      updatePoint(snapshot.val());
   });
}
