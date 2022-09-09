let friends = ['Roma', 'Patriciana', 'Soma', 'Toma', 'Koma', 'Jhoma', 'Farhana', 'Madina'];

let temp = friends[0];
for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    //console.log(friend);

    if (friend.length > temp.length) {
        temp = friend;
    }
}
console.log(temp);
