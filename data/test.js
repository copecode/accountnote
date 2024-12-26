const account = require('./dbs/account')
const  accountlog= require('./models/accountlog')

let a 
account(
   async  ()=> {
       a = await accountlog.read()
   }
).catch(err => {console.log(err)})
.then(console.log(a)


)
