
// 由于在lib.mjs中Animal类为默认导出，在redirect-module.mjs中
// 也为默认导出，并未对其做任何重命名，所以在main.mjs中
// 我们可以对Animal对进行导入并重命名
import AnimalClass, { people, getCurrrentYear, Life } from './redirect-module';

console.log(JSON.stringify(people, null, 4));
console.log(getCurrrentYear());
console.log((new AnimalClass('Cat')).say());

console.log(AnimalClass === Life);