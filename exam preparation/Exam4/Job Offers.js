class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates) {
        for (let candidate of candidates) {
            let [name, education, yearExperiance] = candidate.split("-");
            yearExperiance = Number(yearExperiance);
            let curName = this.jobCandidates.find(el => el.name == name);
            if (curName) {
                if (curName.yearExperiance < yearExperiance) {
                    curName.yearExperiance = yearExperiance;
                }
            } else {
                this.jobCandidates.push({ name, education, yearExperiance });
            }
        }
        let result = "You successfully added candidates: ";
        result += this.jobCandidates.map(el => `${el.name}`).join(", ");
        result += ".";
        return result;
    }
    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split("-");
        minimalExperience = Number(minimalExperience)
        let curPerson = this.jobCandidates.find(el => el.name == name);
        if (!curPerson) {
            throw new Error(`${name} is not in the candidates list!`);
        } else {
            if (minimalExperience > curPerson.yearExperiance) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
            } else {
                curPerson.yearExperiance = "hired";
                return `Welcome aboard, our newest employee is ${name}.`
            }
        }
    }
    salaryBonus(name) {
        let curPerson = this.jobCandidates.find(el => el.name == name);
        if (!curPerson) {
            throw new Error(`${name} is not in the candidates list!`);
        } else if (curPerson.education == "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if (curPerson.education == "Master") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }
    candidatesDatabase() {
        if (this.jobCandidates.length == 0) {
            throw new Error("Candidate Database is empty!");
        }
        let result = "Candidates list:\n";
        let sortedArray = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        result += sortedArray.map(el => `${el.name}-${el.yearExperiance}`).join("\n");
        return result;
    }
}

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.salaryBonus("Peter Parker"));

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());