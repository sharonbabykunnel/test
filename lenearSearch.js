// // const arr = ["sfs", "asfe", "nbgb", "cdwxsw"];
// // function merge(arr) {
// //     let mid = Math.floor((arr.length-1) / 2);
// //     let left = arr.splice(0, mid);
// //     let right = arr.splice(mid + 1)
// //     return mergeSort(merge(left), merge(right));
// // }

// // function mergeSort(left, right) {
// //     if (!left && !right) return []
// //     if (!left) return [...right]
// //     if(!right) return [...left]
// //     let temp = []
// //     if (left[0].length < right[0].length) {
// //         temp.push(left.unshift());
// //     } else {
// //         temp.push(right.unshift())
// //     }
// //     return [...arguments.temp,...left,...right]
// // }

// // console.log(merge(arr))

// const srt = "svbsgfuwfijw";

// function removeDuplicate(srt) {
//     let hash = {}
//     let resutl = ''
//     for (let i = 0; i < srt.length; i++){
//             let char = srt[i]
//             if (!hash[char]) {
//                 hash[char] = true;
//             } else {
//                 hash[char] = false;
//             }
//     }
//     for (let [key, value] of Object.entries(hash)) {
//         if (value) {
//             resutl += key;
//         }
//     }
//     return resutl;
// }
// console.log(removeDuplicate(srt))

const readline = require('readline');
const fs = require('fs');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout
// })

// rl.question('Enter your name: ', (name) => {
//     console.log('Your name is :' + name);
//     rl.close();
// })

fs.readFile('./files/input.txt', 'utf-8', (err, data) => {
    console.log(data)
    fs.readFile('./files/output.txt', 'utf-8', (err, data1) => {
        console.log(data);
        fs.writeFile('./files/write.txt', `${data} \n ${data1}`, () => {
            console.log('finish');
        })
    })
});
console.log('firts');
