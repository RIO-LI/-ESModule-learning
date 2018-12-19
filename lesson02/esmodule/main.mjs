import { people } from './lib.mjs';
import * as lib from './lib.mjs';


// 首先定一个基调，其实但我们用 import * as xx from 'yy' 将一个模块做整体导入时，此时xx会作为作为模块命名空间
// 模块命名空间对象是一个不可拓展的对象，对其属性的操作就像在严格模式下，被Object.preventExtensions() API操作过的对象一样
// 不可扩展，也就是永远不能再添加新的属性。

const print = (data) => {
    console.log("===================================");
    console.log(data);
};

print(people);
print(lib);

// 允许修改
people.age = 999;
print(people);

// 允许修改
people.father = 'baba';
print(people);


// 不允许修改，因为作为整体导入时，模块对象的直接一级属性是只读属性，修改将引发报错
try {
    lib.people = 23;
    print(lib);
} catch (e) {
    print(e);
    print("不允许修改lib.people，因为作为整体导入时，模块对象的直接一级属性是只读属性，修改将引发报错");
}


// 允许修改，因为作为整体导入时，模块对象的直接一级属性是只读属性，但一级
// 属性引用的对象不是只读对象，可以修改其属性（只要没有被设置为不可写）
lib.people.age = 666;
print(lib);

// 整体导入时，不允许给模块对象新增属性，因为整体导入时的模块对象是一个不可拓展的对象,不可以给模块对象新增任何属性
try {
    lib.provices = ['GD', 'FJ'];
    print(lib);
} catch (e) {
    print(e);
    print("不允许对lib对象新增属性,整体导入时，不允许给模块对象新增属性，因为整体导入时的模块对象是一个不可拓展的对象,不可以给模块对象新增任何属性");
}



