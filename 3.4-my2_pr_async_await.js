async function main() {
    console.log('first');
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('second')
        }, 3000);
        resolve()
    });
    console.log('third');
}
// main();
// result >> first, third, second

async function main2() {
    console.log('first');
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('second');
            resolve();
        }, 3000);
    });
    console.log('third');
}
main2(); // first, second, third