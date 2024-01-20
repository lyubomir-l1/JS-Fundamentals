function companyUsers(input) {
    let companyData = {};
    for (const line of input) {
        let [companuName, personId] = line.split(" -> ");
        if (!companyData[companuName]) {
            companyData[companuName] = [];
        }
        companyData[companuName].push(personId);
    }
    let sorted = Object.entries(companyData).sort((a, b) => a[0].localeCompare(b[0]));
    sorted.forEach(el => {
        let companuName = el[0];
        let allIdS = el[1];
        let unique = new Set(allIdS);
        console.log(companuName);

        for (const id of unique) {
            console.log(`-- ${id}`);
        }
    })

}