class FriendsList {
  constructor() {
    this.friends = [];
  }
  add() {
    let name = prompt("Name?");
    let flyingSkill = Number(prompt("flyingSkill?(1-10)"));
    let dejarikSkill = Number(prompt("dejarikSkill?(1-10)"));
    let galaticFear = Number(prompt("How much do you fear the Empire(1-10)"));
    this.friends.push(
      (this.name = new Friends(name, flyingSkill, dejarikSkill, galaticFear))
    );
  }
  rank() {
    this.friends.sort((a, b) => {
      return b.score - a.score;
    });

    console.log(this.friends[0]);
    console.log(this.friends[this.friends.length - 1]);
  }
}

class Friends {
  constructor(name, flyingSkill, dejarikSkill, galaticFear) {
    this.name = name;
    this.flyingSkill = flyingSkill;
    this.dejarikSkill = dejarikSkill;
    this.galaticFear = galaticFear;
    this.score = flyingSkill + dejarikSkill - galaticFear;
  }
}
const chewbaccaFriends = new FriendsList();
chewbaccaFriends.add();
chewbaccaFriends.add();
chewbaccaFriends.add();
console.log(chewbaccaFriends.friends);
chewbaccaFriends.rank();
