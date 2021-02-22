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
}
