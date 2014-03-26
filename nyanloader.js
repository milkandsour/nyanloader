var readline = require('readline')
  , clc = require('cli-color');

var red = clc.xterm(9)
  , ora = clc.xterm(214)
  , yel = clc.xterm(226)
  , yelB= clc.xterm(11)
  , gre = clc.xterm(76)
  , blu = clc.xterm(27)
  , gre = clc.xterm(76)
  , vio = clc.xterm(63);

function NyanLoader(){
    this.frames = [
        ' '+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+',------,'+yelB('      o         \n')+
        ' '+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+'|   /\\_/\\'+yelB('             \n')+
        ' '+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+'~|__( ^ .^)'+yelB('  +     +     \n')+
        '               \"\"  \"\"              \n',

        ' '+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+',------,'+yelB('  o      +      \n')+
        ' '+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+'|   /\\_/\\'+yelB('    +        \n')+
        ' '+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+'~|__( o .o)'+yelB('     o        \n')+
        'Loading . . .    \"\"  \"\"            \n'
    ];
    this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    this.frame = 0;
    this.animation = this.start();
    return this;
};
NyanLoader.prototype.start = function(){
    var self = this;
    if(!this.animation)
        this.animation = setInterval(function () {
            self.frame&&process.stdout.write(clc.bol(-4));
            self.rl.write(self.frames[++self.frame%2]);
        }, 200);
    return this.animation;
}
NyanLoader.prototype.stop = function(){
    clearInterval(this.animation);
    this.animation = null;
    this.frame = 0;
    process.stdout.write(clc.bol(-1));
    this.rl.write("             \n");
}
module.exports = new NyanLoader();
