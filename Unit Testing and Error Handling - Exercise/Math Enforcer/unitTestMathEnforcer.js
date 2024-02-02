import { expect } from "chai";
import { mathEnforcer } from "./mathEnforcer.js";

describe("Test for addFive function in mathEnforcer", function() {
    it("valid integers", function() {
        expect(mathEnforcer.addFive(5), "must return integer number").to.equal(10);
        expect(mathEnforcer.addFive(-10), "must return integer number").to.equal(-5);
        expect(mathEnforcer.addFive(-5), "must return integer number").to.equal(0);
        expect(mathEnforcer.addFive(50), "must return integer number").to.equal(55);
    })
    it("valid floating numbers", function() {
        expect(mathEnforcer.addFive(2.5), "must return floating or integer number").to.equal(7.5);
        expect(mathEnforcer.addFive(1.2), "must return floating or integer number").to.equal(6.2);
        expect(mathEnforcer.addFive(-2.5), "must return floating or integer number").to.equal(2.5);
        expect(mathEnforcer.addFive(-10.5), "must return floating or integer number").to.equal(-5.5);
    })
    it("invalid data", function() {
        expect(mathEnforcer.addFive("2.5"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.addFive("-5"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.addFive("0"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.addFive("10"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.addFive({ five: 5 }), "invalid data must return undefined").to.equal(undefined);
    })
})
describe("Test for subtractTen function in mathEnforcer", function() {
    it("valid integers", function() {
        expect(mathEnforcer.subtractTen(7), "must return integer number").to.equal(-3);
        expect(mathEnforcer.subtractTen(-15), "must return integer number").to.equal(-25);
        expect(mathEnforcer.subtractTen(100), "must return integer number").to.equal(90);
        expect(mathEnforcer.subtractTen(10), "must return integer number").to.equal(0);
    })
    it("valid floating numbers", function() {
        expect(mathEnforcer.subtractTen(4.5), "must return floating or integer number").to.equal(-5.5);
        expect(mathEnforcer.subtractTen(-15.2), "must return floating or integer number").to.equal(-25.2);
        expect(mathEnforcer.subtractTen(120.7), "must return floating or integer number").to.equal(110.7);
        expect(mathEnforcer.subtractTen(0.5), "must return floating or integer number").to.equal(-9.5);
    })
    it("invalid data", function() {
        expect(mathEnforcer.subtractTen("25"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.subtractTen("-20"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.subtractTen("45.7"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.subtractTen([10, 5]), "invalid data must return undefined").to.equal(undefined);
    })
})
describe("Test for sum function in mathEnforcer", function() {
    it("valid integers", function() {
        expect(mathEnforcer.sum(7, 5), "must return integer number").to.equal(12);
        expect(mathEnforcer.sum(-15, -10), "must return integer number").to.equal(-25);
        expect(mathEnforcer.sum(20, 0), "must return integer number").to.equal(20);
        expect(mathEnforcer.sum(10, -5), "must return integer number").to.equal(5);
        expect(mathEnforcer.sum(-10, 20), "must return integer number").to.equal(10);
        expect(mathEnforcer.sum(10, -20), "must return integer number").to.equal(-10);
        expect(mathEnforcer.sum(-100, 40), "must return integer number").to.equal(-60);
    })
    it("valid floating numbers", function() {
        expect(mathEnforcer.sum(4.5, 3.5), "must return floating or integer number").to.equal(8);
        expect(mathEnforcer.sum(-15.2, 5), "must return floating or integer number").to.equal(-10.2);
        expect(mathEnforcer.sum(2.3, 3.2), "must return floating or integer number").to.equal(5.5);
        expect(mathEnforcer.sum(5, -0.5), "must return floating or integer number").to.equal(4.5);
        expect(mathEnforcer.sum(5, 0.5), "must return floating or integer number").to.equal(5.5);
        expect(mathEnforcer.sum(3.5, 7), "must return floating or integer number").to.equal(10.5);
        expect(mathEnforcer.sum(-3.5, -5.2), "must return floating or integer number").to.equal(-8.7);
        expect(mathEnforcer.sum(-10.5, 5.2), "must return floating or integer number").to.equal(-5.3);
        expect(mathEnforcer.sum(10.5, -5.2), "must return floating or integer number").to.equal(5.3);
    })
    it("invalid data", function() {
        expect(mathEnforcer.sum("20", 20), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.sum(30, "-10"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.sum("45.7", 5), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.sum(["3", "5", "8"]), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.sum(10, "2.2"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.sum(12, "24"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.sum(-10, "-4"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.sum("-13", -40), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.sum("10", "400"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.sum("10.5", "400.35"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.sum("-10.7", "-400.25"), "invalid data must return undefined").to.equal(undefined);
        expect(mathEnforcer.sum("-12", "-250"), "invalid data must return undefined").to.equal(undefined);
    })
})