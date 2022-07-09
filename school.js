const Eventemitter = require('events')

class School extends Eventemitter {
    startPriod(){
        console.log('class started')
    
        setTimeout(()=>{
            this.emit('belllring',{
                priod:'first',
                name:'class started'
            })
        })
    }
}

module.exports = School;