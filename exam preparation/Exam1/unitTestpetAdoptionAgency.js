import { expect } from "chai";
import { petAdoptionAgency } from "./petAdoptionAgency.js";

describe("Suit", function() {
    describe("Test for isPetAvailable functionality", function() {
        it("Test with zero count", function() {
            expect(petAdoptionAgency.isPetAvailable("cat", 0, true)).to.equal(`Sorry, there are no cat(s) available for adoption at the agency.`);
        });
        it("Test with vaccinated pets", function() {
            expect(petAdoptionAgency.isPetAvailable("dog", 5, true)).to.equal(`Great! We have 5 vaccinated dog(s) available for adoption at the agency.`);
        });
        it("Test with no vaccinated pest", function() {
            expect(petAdoptionAgency.isPetAvailable("cat", 3, false)).to.equal(`Great! We have 3 cat(s) available for adoption, but they need vaccination.`);
        });
        it("Test with invalid inputs", function() {
            expect(() => petAdoptionAgency.isPetAvailable("parrot", "10", "true")).to.throw(Error, "Invalid input");
        });
    });
    describe("Test with getRecommendedPets", function() {
        it("Test with matching desiredTraits", function() {
            expect(petAdoptionAgency.getRecommendedPets([{ name: "Gosho", traits: "gray fur" }, { name: "Tosho", traits: "blue eyes" }], "gray fur")).to.equal(`Recommended pets with the desired traits (gray fur): Gosho`);
        });
        it("Test with no matching desiredTraits", function() {
            expect(petAdoptionAgency.getRecommendedPets([{ name: "Pesho", traits: "long tail" }, { name: "Tisho", traits: "red feather" }], "brown eyes")).to.equal(`Sorry, we currently have no recommended pets with the desired traits: brown eyes.`);
        });
        it("Test with invalid inputs", function() {
            expect(() => petAdoptionAgency.getRecommendedPets('[{"name":"Pencho","traits":"black fur"}]', "black fur")).to.throw(Error, "Invalid input");
        });
    });
    describe("Test with adoptPet", function() {
        it("Test with valid inputs", function() {
            expect(petAdoptionAgency.adoptPet("cat", "Maria")).to.equal(`Congratulations, Maria! You have adopted cat from the agency. Enjoy your time with your new furry friend!`);
        })
        it("Test with invalid inputs", function() {
            expect(() => petAdoptionAgency.adoptPet(12345, true)).to.throw(Error, "Invalid input");
        })
    })
})