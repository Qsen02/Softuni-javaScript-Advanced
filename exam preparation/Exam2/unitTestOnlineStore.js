import { expect } from "chai";
import { onlineStore } from "./onlineStore.js";

describe("Test", function() {
    describe("Test with isProductAvailable functionality", function() {
        it("Test with zero qunatity", function() {
            expect(onlineStore.isProductAvailable("milk", 0)).to.equal(`Sorry, milk is currently out of stock.`);
        });
        it("Test with non-zero qunatity", function() {
            expect(onlineStore.isProductAvailable("cheese", 5)).to.equal(`Great! cheese is available for purchase.`);
        });
        it("Test with invalid input", function() {
            expect(() => onlineStore.isProductAvailable("nuts", "-5")).to.throw(Error, "Invalid input.");
        });
    })
    describe("Test with canAffordProduct functionality", function() {
        it("Test with succesfull purchase", function() {
            expect(onlineStore.canAffordProduct(5, 100)).to.equal(`Product purchased. Your remaining balance is $95.`)
        });
        it("Test with not succesfull purchase", function() {
            expect(onlineStore.canAffordProduct(50, 25)).to.equal("You don't have sufficient funds to buy this product.")
        });
        it("Test with invalid inputs", function() {
            expect(() => onlineStore.canAffordProduct("34.2", "-75")).to.throw(Error, "Invalid input.");
        });
    })
    describe("Test with getRecommendedProducts functionnality", function() {
        it("Test with matching category", function() {
            expect(onlineStore.getRecommendedProducts([{ name: "chips", category: "foods" }, { name: "phone", category: "tech" }], "foods")).to.equal(`Recommended products in the foods category: chips`);
        })
        it("Test with no matching category", function() {
            expect(onlineStore.getRecommendedProducts([{ name: "TV", category: "tech" }, { name: "computer", category: "tech" }], "furnitures")).to.equal(`Sorry, we currently have no recommended products in the furnitures category.`);
        })
        it("Test with invalid inputs", function() {
            expect(() => onlineStore.getRecommendedProducts('[{ "name": "chips", "category": "foods" }, { "name": "phone", "category": "tech" }]', "foods")).to.throw(Error, "Invalid input.");
        })
    })
})