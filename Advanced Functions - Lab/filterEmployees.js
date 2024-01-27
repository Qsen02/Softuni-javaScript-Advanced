function filterEmployees(data, criteria) {
    let parsedData = JSON.parse(data);
    let count = -1;
    for (let data of parsedData) {
        let [curCriteria, value] = criteria.split("-");
        if (curCriteria in data) {
            if (data[curCriteria] == value) {
                count++;
                console.log(`${count}. ${data.first_name} ${data.last_name} - ${data.email}`);
            }
        } else if (criteria == "all") {
            count++;
            console.log(`${count}. ${data.first_name} ${data.last_name} - ${data.email}`);
        }
    }
}
filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
);