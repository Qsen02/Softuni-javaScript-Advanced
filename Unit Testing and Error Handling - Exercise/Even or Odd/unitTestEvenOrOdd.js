import { expect } from "chai";
import { isOddOrEven } from "./еvenOrOdd.js";

describe("Test for even or odd", function() {
    it("test with invalid inputs", function() {
        expect(isOddOrEven(["a", "b", "c"]), "test with array must return undefined").to.equal(undefined);
        expect(isOddOrEven({ one: 1, two: 2 }), "test with object must return undefined").to.equal(undefined);
    })
    it("test with valid inputs", function() {
        expect(isOddOrEven("apple"), "test with string.length=5 must return odd").to.equal("odd");
        expect(isOddOrEven("cat"), "test with string.length=3 must return odd").to.equal("odd");
        expect(isOddOrEven("tree"), "test with string.length=4 must return even").to.equal("even");
        expect(isOddOrEven("airplane"), "test with string.length=8 must return even").to.equal("even");
    })
})