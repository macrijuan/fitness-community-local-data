const server = require('./app.js');
// const { conn } = require('./src/db.js');
const { conn } = require('./src/db.js');
const reFillDB = require("./local_server_actions.js");

const date = new Date();

// if(process.env.ENVIORMENT==="live"){
//   conn.authenticate().then(async() => {
//     reFillDB(true).then(()=>{
//       server.listen(3001, () => {
//         console.log('listening at port 3001');
//         console.log('__________________________________');
//         console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//         console.log('__________________________________');
//       });
//     });
//   }).catch(err=>{console.log(err)});
// }else{
  const setForce = true;
  // const setForce = false;
  conn.sync({ force: setForce }).then(async() => {
    reFillDB(setForce).then(()=>{
      server.listen(3001, () => {
        console.log('listening at port 3001');
        console.log('__________________________________');
        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
        console.log('__________________________________');
      });
    });
  }).catch(err=>{console.log(err)});
// };