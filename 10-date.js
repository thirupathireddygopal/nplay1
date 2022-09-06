const date1 = Date.now().valueOf();
console.log(`new date: ${date1}`);

const date2 = new Date(Date.UTC(2021, 4, 10, 11, 25, 35));
console.log(date2.getTime()/1000);
