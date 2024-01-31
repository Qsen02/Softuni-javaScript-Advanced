import { expect } from "chai";
import { sum } from "./sumOfNumbers.js";

describe("Test", function() {
    it("works", function() {
        expect(sum([1, 2, 3])).to.equal(6);
    })
    it("works", function() {
        expect(sum([5])).to.equal(5);
    })
    it("works", function() {
        expect(sum([])).to.equal(0);
    })
})