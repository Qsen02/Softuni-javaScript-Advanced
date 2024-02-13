import { expect } from "chai";
import { recipeSelection } from "./recipeSelection.js";

describe("Test receipeSelection", function() {
    describe("Test with isTypeSuitable functionality", function() {
        it("test with wrong vegetarian input", function() {
            expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal("This recipe is not suitable for vegetarians");
        })
        it("test with wrong vegan input", function() {
            expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.equal("This recipe is not suitable for vegans");
        })
        it("test with correct vegetarian input", function() {
            expect(recipeSelection.isTypeSuitable("Vegetables", "Vegetarian")).to.equal("This recipe is suitable for your dietary restriction");
        })
        it("test with correct vegetarian input", function() {
            expect(() => recipeSelection.isTypeSuitable(true, "Meat eater")).to.throw(Error, "Invalid input");
        })
    });
    describe("Test with isItAffordable functionality", function() {
        it("Test with negative budget", function() {
            expect(recipeSelection.isItAffordable(25, 10)).to.equal("You don't have enough budget to afford this recipe");
        })
        it("Test with correct budget", function() {
            expect(recipeSelection.isItAffordable(10, 15)).to.equal("Recipe ingredients bought. You have 5$ left");
        })
        it("Test with invalid inputs", function() {
            expect(() => recipeSelection.isItAffordable("27", "32")).to.throw(Error, "Invalid input");
        })
    })
    describe("Test with getRecipesByCategory functionality", function() {
        it("Test with valid inputs", function() {
            expect(recipeSelection.getRecipesByCategory([{ title: "Gosho", category: "Bulgarian" }, { title: "Pesho", category: "Bulgarian" }, { title: "Jhonson", category: "American" }], "Bulgarian")).to.deep.equal(['Gosho', 'Pesho']);
        })
        it("Test with invalid inputs 1", function() {
            expect(() => recipeSelection.getRecipesByCategory('[{"title":"Tosho","category":"Pesho"}]', "Gosho")).to.throw(Error);
        })
        it("Test with invalid inputs 2", function() {
            expect(() => recipeSelection.getRecipesByCategory([{ title: "Tosho", category: "Pesho" }], 23)).to.throw(Error);
        })
    })
})