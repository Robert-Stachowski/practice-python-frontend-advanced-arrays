const years = [1980, 1934, 2002, 2019];


const now = new Date();
const currentYear = now.getFullYear();
const mapYears = years.map(parsYearsToData);


function parsYearsToData(year) {
    return currentYear - year
        
}

console.log(mapYears);
