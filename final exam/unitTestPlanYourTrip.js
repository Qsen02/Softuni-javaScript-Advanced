import { expect } from "chai";
import { planYourTrip } from "./planYourTrip.js";

describe("Tests", function() {
    describe("Test with choosingDestination functionality", function() {
        it("Test with wrong year", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "winter", 2002)).to.throw(Error, "Invalid Year!");
        })
        it("Test with wrong destination", function() {
            expect(() => planYourTrip.choosingDestination("Pesho resort", "winter", 2024)).to.throw(Error, "This destination is not what you are looking for.");
        })
        it("Test with correct input", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        })
        it("Test with wrong season", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        })
    })
    describe("Teest with exploreOptions functionlity", function() {
        it("Test with valid input", function() {
            expect(planYourTrip.exploreOptions(["skiing", "swimming", "running"], 1)).to.equal("skiing, running");
        })
        it("Test with invalid array", function() {
            expect(() => planYourTrip.exploreOptions([], 0)).to.throw(Error, "Invalid Information!");
        })
        it("Test with invalid array", function() {
            expect(() => planYourTrip.exploreOptions('["swimming", "running"]', 1)).to.throw(Error, "Invalid Information!");
        })
        it("Test with invalid index", function() {
            expect(() => planYourTrip.exploreOptions(["skiing", "running"], "0")).to.throw(Error, "Invalid Information!");
        })
        it("Test with out of range index", function() {
            expect(() => planYourTrip.exploreOptions(["jumping", "running"], 5)).to.throw(Error, "Invalid Information!");
        })
        it("Test with out of range index", function() {
            expect(() => planYourTrip.exploreOptions(["skiing", "swimming", "running", "jumping"], -5)).to.throw(Error, "Invalid Information!");
        })
        it("Test with floating number index", function() {
            expect(() => planYourTrip.exploreOptions(["skiing"], 3.7)).to.throw(Error, "Invalid Information!");
        })
    })
    describe("Test with estimateExpenses functionality", function() {
        it("Test with frinedly budget", function() {
            expect(planYourTrip.estimateExpenses(50, 5)).to.equal("The trip is budget-friendly, estimated cost is $250.00.");
        })
        it("Test with frinedly budget", function() {
            expect(planYourTrip.estimateExpenses(12.5, 20.3)).to.equal("The trip is budget-friendly, estimated cost is $253.75.");
        })
        it("Test with no frinedly budget", function() {
            expect(planYourTrip.estimateExpenses(200, 4)).to.equal("The estimated cost for the trip is $800.00, plan accordingly.");
        })
        it("Test with string instead of number", function() {
            expect(() => planYourTrip.estimateExpenses("45", "12")).to.throw(Error, "Invalid Information!");
        })
        it("Test with negative numbers", function() {
            expect(() => planYourTrip.estimateExpenses(-32, -3)).to.throw(Error, "Invalid Information!");
        })
        it("Test with zero number", function() {
            expect(() => planYourTrip.estimateExpenses(0, 12)).to.throw(Error, "Invalid Information!");
        })
        it("Test with zero number", function() {
            expect(() => planYourTrip.estimateExpenses(4)).to.throw(Error, "Invalid Information!");
        })
        it("Test with zero number", function() {
            expect(() => planYourTrip.estimateExpenses(false)).to.throw(Error, "Invalid Information!");
        })
    })
});