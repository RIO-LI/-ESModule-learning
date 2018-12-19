const lib = require('./lib');
const people = lib.people;

// 首先定个基调，在commonjs模块化中，可以对引入的模块对象进行动态修改

const print = (data) => {
    console.log("===================================");
    console.log(data);
};

print(people);
print(lib);


people.age = 999;
print(people);


people.father = 'baba';
print(people);


lib.people = 23;
print(lib);

lib.people.age = 666;
print(lib);


lib.provices = ['GD', 'FJ'];
print(lib);



