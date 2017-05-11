var vFunc = function (a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
};

vFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// currently using the ...varname syntax only works in ES6 and above.
