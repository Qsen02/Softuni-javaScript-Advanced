function cityTaxes(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: collectTaxes,
        applyGrowth: applyGrowth,
        applyRecession: applyRecession
    }

    function collectTaxes() {
        this.treasury += Math.floor(this.population * this.taxRate);
    }

    function applyGrowth(num) {
        this.population += Math.floor(this.population * (num / 100));
    }

    function applyRecession(num) {
        this.treasury -= Math.floor(this.treasury * (num / 100));
    }
    return city;
}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);