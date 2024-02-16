import { expect } from "chai";
import { lottery } from "./lottery.js";

describe("Tests", function() {
    describe("Tests with buyLotteryTicket functionality", function() {
        it("test with valid input", function() {
            expect(lottery.buyLotteryTicket(5, 3, true)).to.equal("You bought 3 tickets for 15$.");
        });
        it("test with false buy", function() {
            expect(() => lottery.buyLotteryTicket(3, 4, false)).to.throw(Error, "Unable to buy lottery ticket!");
        });
        it("test with invalid input", function() {
            expect(() => lottery.buyLotteryTicket("10", "20", "true")).to.throw(Error, "Invalid input!");
        })
    });
    describe("Test with checkTicket functionnality", function() {
        it("Test with 3 matched numbers", function() {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])).to.equal("Congratulations you win, check your reward!");
        })
        it("Test with all matched numbers", function() {
            expect(lottery.checkTicket([4, 3, 7, 5, 8, 9], [4, 3, 7, 5, 8, 9])).to.equal("You win the JACKPOT!!!");
        })
        it("Test with invalid unput", function() {
            expect(() => lottery.checkTicket("[1, 2, 3, 4, 5, 6]", "[1, 2, 3,4,5,6]")).to.throw(Error, "Invalid input!");
        })
    })
    describe("Test with secondChance functionnality", function() {
        it("Test with winning", function() {
            expect(lottery.secondChance(5, [10, 5, 30])).to.equal("You win our second chance prize!");
        })
        it("Test with no winning", function() {
            expect(lottery.secondChance(10, [4, 15, 7, 32, 8, 9])).to.equal("Sorry, your ticket didn't win!");
        })
        it("Test with invalid unput", function() {
            expect(() => lottery.secondChance("3", "[1,2,3]")).to.throw(Error, "Invalid input!");
        })
    });
});