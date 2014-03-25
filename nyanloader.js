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
    var self = this;
    self.frames = [
        ' '+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+',------,'+yelB('      o         \n')+
        ' '+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+'|   /\\_/\\'+yelB('             \n')+
        ' '+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+'~|__( ^ .^)'+yelB('  +     +     \n')+
        '               \"\"  \"\"              \n',

        ' '+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+ora('_')+red('-')+',------,'+yelB('  o      +      \n')+
        ' '+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+yel('-')+gre('_')+'|   /\\_/\\'+yelB('    +        \n')+
        ' '+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+blu('-')+vio('_')+'~|__( o .o)'+yelB('     o        \n')+
        'Loading . . .    \"\"  \"\"            \n'
    ];
    self.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    self.frame = 0;
    self.animation = setInterval(function () {
        self.frame&&process.stdout.write(clc.bol(-4));
        self.rl.write(self.frames[++self.frame%2]);
    }, 200);
    return self;
};
NyanLoader.prototype.stop = function(){
    clearInterval(this.animation);
}
module.exports = new NyanLoader();
