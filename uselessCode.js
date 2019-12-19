var uselessConcatString = `some` + `string`;
var uselessConcatTen = '1' + '0';

function doSomethingThatMightThrow(){}

try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
}

var someUselessVar = 0;

"\'";
'\"';
"\#";
"\e";
`\"`;
`\"${someUselessVar}\"`;
`\#{someUselessVar}`;
/\!/;
/\@/;


class uselessConstructorA {
    constructor () {
    }
}

class uselessConstructorB extends uselessConstructorA {
    constructor (...args) {
      super(...args);
    }
}