import {print, add} from './sum'
const minus = require('./minus')


print(add(1,2));
print(minus(1,2));

require(['./multi'], function (multi){
    print(multi(1,2))
})