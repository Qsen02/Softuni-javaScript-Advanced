class Company {
    depapartments = {};
    avgSalaries = {};
    addEmployee(name, salary, position, depapartment) {
        if (!name || !salary || !position || !depapartment) {
            throw new Error("Invalid input!");
        } else if (salary < 0) {
            throw new Error("Invalid input!");
        }
        if (!(depapartment in this.depapartments)) {
            this.depapartments[depapartment] = [{
                name: name,
                salary: salary,
                position: position,
                depapartment: depapartment
            }];
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        } else {
            this.depapartments[depapartment].push({
                name: name,
                salary: salary,
                position: position,
                depapartment: depapartment
            })
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }
    bestDepartment() {
        for (let depapartment in this.depapartments) {
            let sum = 0;
            for (let employee of this.depapartments[depapartment]) {
                sum += employee.salary;

            }
            let avgSalary = sum / this.depapartments[depapartment].length;
            this.avgSalaries[depapartment] = avgSalary;
        }
        let sortedArray = Object.entries(this.avgSalaries).sort((a, b) => a[1] - b[1]);
        let bestDepartmentName = sortedArray[sortedArray.length - 1][0];
        let bestDepartmentSalary = sortedArray[sortedArray.length - 1][1];
        let sortedEmployess = this.depapartments[bestDepartmentName].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        let result = `Best Department is: ${bestDepartmentName}\nAverage salary: ${bestDepartmentSalary.toFixed(2)}`;
        for (let employee of sortedEmployess) {
            result += `\n${employee.name} ${employee.salary} ${employee.position}`;
        }
        return result;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());