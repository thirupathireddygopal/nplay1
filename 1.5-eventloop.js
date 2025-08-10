// synchronous running
// return undefined when we don't return anything
console.log('======== 1.console ========');
console.log('start1');
function a() {
    console.log('hi thiru, js engine makes a request to get it print on to the console...');
}
a();
console.log('end1');

// js engine registers callbacks in web-apis enviorment and pushing that callback to callstack using eventloop fom callback queue
console.log('======== 2.event loop using callbacks ========');
console.log('start2');
setTimeout(function cbTimer() {
    console.log('this callback timer executed after 2 secs');
}, 2000);
console.log('end2');

console.log('======== 3.event loop using eventListeners ========');
console.log('start3');
document.getElementById('clickMe').addEventListener('click', function cbEvent() {
    console.log('this event listener callback executes after click event....')
})
console.log('end3');

console.log('======== 4.event loop using fetch ========');
console.log('start4');
setTimeout(function cbT2() {
    console.log('executed after 4 secs');
}, 4000);
// here the (cb)=>{} using arrow function (or) function(cb){} is a callback function which will run after the we get a response from the reqres server
fetch('https://reqres.in/api/users?page=2', { headers: { "x-api-key": "reqres-free-v1" } })
    .then(function cbFetch(res) {
        console.log()
        if (!res.ok) {
            throw new Error(`HTTP Error status: ${res.status}`);
        }
        return res.json(); // parse response as JSON
    })
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err.message);
    })
console.log('end4');
