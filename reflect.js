const a = [];
a.foo = 1;
console.log(Object.getOwnPropertyDescriptor(a, 'foo'));
// { value: 1, writable: true, enumerable: true, configurable: true }

for (let key in a) {
  console.log(key);
}

Object.defineProperty(a, 'foo', {
    value: 2,
    writable: false,
});
// { value: 2, writable: false, enumerable: true, configurable: true }

for (let key in a) {
    console.log('with new descriptors value: ', key);
}

console.log(Object.getOwnPropertyDescriptor(a, 'foo'));

(function () {
    `use strict`;
    Object.defineProperty(a, 'foo', {
        value: 3, // change value
    });
    console.log(Object.getOwnPropertyDescriptor(a, 'foo'));
    console.log(a.foo);
    a.foo++; // didn't change value
    console.log(a.foo);
})();




