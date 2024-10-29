
const zp= [
    { id: 1, name: "Stepan", job: "CEO", salary: 100000 },
    { id: 2, name: "Matvey", job: "fullstack", salary: 20000 },
    { id: 3, name: "Sergey", job: "DevOps", salary: 10000 }
];
const gg = ("общая зп:")


function sumSalaries(zpsArray) {
    return zpsArray.reduce((total, zp) => total + zp.salary, 0);
}


const rr = sumSalaries(zp);



console.log(gg + rr);
