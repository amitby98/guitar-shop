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
