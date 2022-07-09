
const School = require('./school')

const school = new School ()




// register a listner for a bell ring
school.on('belllring',({priod, name})=>{
 console.log(`we need to run..', ${priod}, ${name}`)
});

school.startPriod()

