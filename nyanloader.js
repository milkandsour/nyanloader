const readline  = require('readline')
const clc       = require('cli-color')

const red   = clc.xterm(9)
const ora   = clc.xterm(214)
const yel   = clc.xterm(226)
const yelB  = clc.xterm(11)
const gre   = clc.xterm(76)
const blu   = clc.xterm(27)
const vio   = clc.xterm(63)

const frames = [
  ' '+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+',------,'+yelB('      o         \n')+
  ' '+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+'|   /\\_/\\'+yelB('             \n')+
  ' '+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+'~|__( ^ .^)'+yelB('  +     +     \n')+
  '               \"\"  \"\"              \n',

  ' '+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+',------,'+yelB('  o      +      \n')+
  ' '+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+'|   /\\_/\\'+yelB('    +        \n')+
  ' '+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+'~|__( o .o)'+yelB('     o        \n')+
  'Loading . . .    \"\"  \"\"            \n'
]

class NyanLoader {

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    this.frame = 0
    this.animation = this.start()
  }

  start() {
    var self = this;
    if(!this.animation) {
      this.animation = setInterval(() => {
          self.frame && process.stdout.write(clc.bol(-4))
          self.rl.write(frames[++self.frame % 2])
      }, 200);
    }
    return this.animation
  }

  stop() {
    clearInterval(this.animation)
    this.animation = null
    this.frame = 0
    process.stdout.write(clc.bol(-1))
    this.rl.write('             \n')
  }

}

module.exports = new NyanLoader()
