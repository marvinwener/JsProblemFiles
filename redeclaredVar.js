function redeclaredvar(x) {
    switch (x.type) {
    case 'String':
        var value = x.value;
        return +value.trim();
    case 'Integer':
        var value = x.value;
        return value%2;
    }
}

var redeclaredVar_a = 3;
var redeclaredVar_a = 10;