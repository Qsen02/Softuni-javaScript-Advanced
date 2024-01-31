import { expect } from "chai";
import { isSymmetric } from "./checkForSymmetry.js"
import { it } from "mocha";


describe("Suit", function() {
    it("works", function() {
        expect(isSymmetric([3, 3, 3, 3])).to.equal(true);
    });
    it("works", function() {
        expect(isSymmetric([1, 2, 3])).to.equal(false);
    });
    it("works", function() {
        expect(isSymmetric("stirng")).to.equal(false);
    });
    it("works", function() {
        expect(isSymmetric([50])).to.equal(true);
    });
    it("works", function() {
        expect(isSymmetric([])).to.equal(true);
    });
    it("works", function() {
        expect(isSymmetric(["wall", " "])).to.equal(false);
    });
    it("works", function() {
        expect(isSymmetric(["1", "2", "3", "3", "2", "1"])).to.equal(true);
    });
})