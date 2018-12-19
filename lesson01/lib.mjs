export const time = Date.now();

export function getCurrrentYear() {
    return new Date().getFullYear();
}

export const people = {
    age: 26,
    name: 'rioli',
    cities: ['jieyang', 'shenzhen']
};

export default class Animal {
    constructor(name) {
        this.name = name;
    }

    say() {
        return `I am ${this.name}`;
    }
}