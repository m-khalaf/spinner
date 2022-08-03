// for (let i = 100; i <= 1500; i += 200) {
//   let s = ''
//   setTimeout(() => {
//     if (i === 100 || i === 900) s = '|';
//     if (i === 300 || i === 1100) s = '/';
//     if (i === 500 || i === 1300) s ='-';
//     if (i === 700 || i === 1500) s = '\\';
//       process.stdout.write(`\r${s}   `)
//   }, i);
// }
let s = ['|', '/', '-', '\\', '|', '/', '-', '\\','|'];
for (let i = 0; i < s.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${s[i]}   `);
    if (i===s.length-1) process.stdout.write(`\n`);
  }, 100*(2*i+1));
  
}
