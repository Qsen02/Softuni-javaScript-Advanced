import { expect } from "chai";
import { lookupChar } from "./charLookup.js";

describe("test for char in current index", function() {
    it("invalid inputs", function() {
        expect(lookupChar(["string"], 2), "array must return undefined").to.equal(undefined);
        expect(lookupChar("string", "2"), "string as index must return undefined").to.equal(undefined);
        expect(lookupChar(["string"], "3"), "array and index as string must return undefined").to.equal(undefined);
        expect(lookupChar("watermelon", 2.5), "index with floating point must return Incorrect index").to.equal(undefined);
    })
    it("invalid index", function() {
        expect(lookupChar("apple", -2), "negative index must return Incorrect index").to.equal("Incorrect index");
        expect(lookupChar("apricot", 7), "index bigger than string.length must return Incorrect index").to.equal("Incorrect index");
        expect(lookupChar("mouse", 123), "index bigger than string.length must return Incorrect index").to.equal("Incorrect index");
    })
    it("valid inputs", function() {
        expect(lookupChar("computer", 2), "char at index 2 must be m").to.equal("m");
        expect(lookupChar("cup", 0), "char at index 0 must be c").to.equal("c");
        expect(lookupChar("phone", 4), "char at index 4 must be e").to.equal("e");
    })
})