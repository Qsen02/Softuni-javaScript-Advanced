import { expect } from "chai";
import { PaymentPackage } from "./paymentPackage.js";

describe("Test for class PaymentPachage", function() {
    it("valid inputs without change VAT or active", function() {
        let payment = new PaymentPackage("designer", 1000);
        expect(payment.toString(), "incorrect output!").to.equal("Package: designer\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200");
        let payment1 = new PaymentPackage("QA", 535);
        expect(payment1.toString(), "incorrect output!").to.equal("Package: QA\n- Value (excl. VAT): 535\n- Value (VAT 20%): 642");
        let payment2 = new PaymentPackage("programmer", 3698);
        expect(payment2.toString(), "incorrect output!").to.equal("Package: programmer\n- Value (excl. VAT): 3698\n- Value (VAT 20%): 4437.599999999999");
        let payment3 = new PaymentPackage("some worker", 950.5);
        expect(payment3.toString(), "incorrect output!").to.equal("Package: some worker\n- Value (excl. VAT): 950.5\n- Value (VAT 20%): 1140.6");
    })
    it("valid inputs with changing VAT or active", function() {
        let payment = new PaymentPackage("HR", 1300);
        payment.active = false;
        expect(payment.toString(), "incorrect output!").to.equal("Package: HR (inactive)\n- Value (excl. VAT): 1300\n- Value (VAT 20%): 1560");
        let payment1 = new PaymentPackage("doctor", 1750);
        payment1.VAT = 25;
        expect(payment1.toString(), "incorrect output!").to.equal("Package: doctor\n- Value (excl. VAT): 1750\n- Value (VAT 25%): 2187.5");
        let payment2 = new PaymentPackage("engineer", 2120);
        payment2.VAT = 30;
        payment2.active = false;
        expect(payment2.toString(), "incorrect output!").to.equal("Package: engineer (inactive)\n- Value (excl. VAT): 2120\n- Value (VAT 30%): 2756");
        let payment3 = new PaymentPackage("HR", 1200.75);
        payment3.active = false;
        expect(payment3.toString(), "incorrect output!").to.equal("Package: HR (inactive)\n- Value (excl. VAT): 1200.75\n- Value (VAT 20%): 1440.8999999999999");
        let payment4 = new PaymentPackage("doctor", 1150.55);
        payment4.VAT = 10;
        expect(payment4.toString(), "incorrect output!").to.equal("Package: doctor\n- Value (excl. VAT): 1150.55\n- Value (VAT 10%): 1265.605");
        let payment5 = new PaymentPackage("engineer", 2050.5);
        payment5.VAT = 15;
        payment5.active = false;
        expect(payment5.toString(), "incorrect output!").to.equal("Package: engineer (inactive)\n- Value (excl. VAT): 2050.5\n- Value (VAT 15%): 2358.075");
        let payment6 = new PaymentPackage("doctor", 1200);
        payment6.VAT = 10.7;
        expect(payment6.toString(), "incorrect output!").to.equal("Package: doctor\n- Value (excl. VAT): 1200\n- Value (VAT 10.7%): 1328.4");
        let payment7 = new PaymentPackage("doctor", 937.25);
        payment7.VAT = 18.45;
        expect(payment7.toString(), "incorrect output!").to.equal("Package: doctor\n- Value (excl. VAT): 937.25\n- Value (VAT 18.45%): 1110.172625");
    })
    it("invalid names", function() {
        expect(() => new PaymentPackage("", 1100), "Must throw error!").to.throw(Error, 'Name must be a non-empty string');
        expect(() => new PaymentPackage(20, 175), "Must throw error!").to.throw(Error, 'Name must be a non-empty string');
        expect(() => new PaymentPackage(true, 1555), "Must throw error!").to.throw(Error, 'Name must be a non-empty string')
        expect(() => new PaymentPackage(1203), "Must throw error!").to.throw(Error, 'Name must be a non-empty string');
    })
    it("invalid values", function() {
        expect(() => new PaymentPackage("software engineer", -500), "Must throw error!").to.throw(Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage("Ivan", "1250"), "Must throw error!").to.throw(Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage("Petar", [3, 2]), "Must throw error!").to.throw(Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage("Drago", "120.34"), "Must throw error!").to.throw(Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage("Tosho", -32.234), "Must throw error!").to.throw(Error, 'Value must be a non-negative number');
        expect(() => new PaymentPackage("Tisho"), "Must throw error!").to.throw(Error, 'Value must be a non-negative number');
    })
    it("invalid VAT", function() {
        let payment = new PaymentPackage("Gosho", 1000);
        expect(() => payment.VAT = "30", "Must throw error!").to.throw(Error, 'VAT must be a non-negative number');
        let payment1 = new PaymentPackage("Tosho", 1750);
        expect(() => payment1.VAT = -50, "Must throw error!").to.throw(Error, 'VAT must be a non-negative number');
        let payment2 = new PaymentPackage("Pesho", 145);
        expect(() => payment2.VAT = true, "Must throw error!").to.throw(Error, 'VAT must be a non-negative number');
        let payment3 = new PaymentPackage("Tisho", 1213);
        expect(() => payment3.VAT = "32.5", "Must throw error!").to.throw(Error, 'VAT must be a non-negative number');
        let payment4 = new PaymentPackage("someone", 1415);
        expect(() => payment4.VAT = -52.3, "Must throw error!").to.throw(Error, 'VAT must be a non-negative number');
    })
    it("invalid active", function() {
        let payment = new PaymentPackage("Alekasnder", 1340);
        expect(() => payment.active = "boolean", "Must throw error!").to.throw(Error, 'Active status must be a boolean');
        let payment1 = new PaymentPackage("Todor", 1750);
        expect(() => payment1.active = 1, "Must throw error!").to.throw(Error, 'Active status must be a boolean');
        let payment2 = new PaymentPackage("Sasho", 1256);
        expect(() => payment2.active = [0, 1], "Must throw error!").to.throw(Error, 'Active status must be a boolean');
    })
})