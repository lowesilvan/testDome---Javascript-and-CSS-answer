class Snapshot {
  constructor(array) {
    this.array = array;
  }
  
  restore() {
    return this.array;  
  }
}

var array = [1, 2];
var snap = new Snapshot(array);
array = [...snap.restore(), 3];
console.log("new array is", array);
array = snap.restore();
console.log(array.join()); //It should log "1,2"
array = [...snap.restore(), 4];
console.log('second new array is now', array)
array = snap.restore();
console.log(array.join()); //It should log "1,2"