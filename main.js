class ClassicGuitar {
  constructor(manufactureYear, brand, price) {
    this.manufactureYear = manufactureYear;
    this.brand = brand;
    this.price = price;
    this.used = false;
    this.numberOfString = 6;
  }
  play() {
    this.used = true;
    this.price *= 0.9;
    return "🎶🎶🎶";
  }
  getManufactureYear() {
    return this.manufactureYear;
  }
  getBrand() {
    return this.brand;
  }
  getPrice() {
    return this.price;
  }
  setPrice(newPrice) {
    this.price = newPrice;
  }

  static detectSound(sound) {
    if (sound == "🎸") {
      return "ElectricGuitar";
    } else if (sound == "🔊") {
      return "BassGuitar";
    }
  }
}
class ElectricGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price, longNeck) {
    super(manufactureYear, brand, price);
    this.longNeck = longNeck;
  }
  play() {
    super.play();
    return "🎸🎸🎸";
  }
}

class BassGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price) {
    super(manufactureYear, brand, price);
    this.numberOfString = 4;
  }
  playSolo() {
    let arr = ["💥", "🤘", "🎵", "📢", "💢", "🕺"];
    shuffleArray(arr);
    return arr.join("");
  }
  play() {
    super.play();
    return "🔊🔊🔊";
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

let myGuitar = new ClassicGuitar(1990, "fff", 12);
console.log(myGuitar.play());
console.log(myGuitar.price);
console.log(myGuitar.used);
myGuitar.setPrice(30);
myGuitar.getPrice();

let bs = new BassGuitar(200, "sss", 12);
console.log(bs.playSolo());

ClassicGuitar.detectSound("🎸");
let eG = new ElectricGuitar(1991, "kkk", 15, true);
console.log(eG.play());
