function sayThis() {
  console.log('this:', this);
}
// who's the owner?
// no one, so the owner is the global object
sayThis();

const obj = {
  key: 'Look at this!',
  sayThis,
};

// who's the owner now?
// obj
obj.sayThis();

// see what all the "global" values are
// console.log('global:', global); // node global
// console.log('window', window); // browser global WILL BREAK IN NODE
// console.log('globalThis:', globalThis); // works in browsers and node

// console.log('this:', this); // module.exports because that's just what node does
// module.exports.test = 'See? `this` is the exports obj!';
// console.log('this:', this);


