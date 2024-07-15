// begin1
// let a = +prompt("raqam kiriting");
// let b = +prompt("raqam kiriting");
// let S = a * b;
// let P = 2 * (a + b);
// console.log(S);
// console.log(P);

// // begin2
// let d = +prompt("raqam kiriting");
// const pi = 3.14;
// let L = pi * d;
// console.log(L);

// // begin3

// let a = +prompt("berilgan a tomonni kiriting");
// let S = a ** 2;
// let P = 6 * a ** 2;
// console.log(S);
// console.log(P);

// // begin4
// let a = +prompt("a tomonni kiriting");
// let b = +prompt("b tomonni kiriting");
// let c = +prompt("c tomonni kiriting");
// let V = a * b * c;
// let S = 2 * (a * b + b * c + a * c);
// console.log(V);
// console.log(S);

// // begin5
// let a = +prompt("berilgan a tomonni kiriting");
// let b = +prompt("berilgan b tomonni kiriting");
// let V = (a + b) / 2;
// console.log(V);

// // begin6
// let a = +prompt("berilgan a tomonni kiriting");
// let b = +prompt("berilgan b tomonni kiriting");
// let c = (a ** 2 + b ** 2) ** (1 / 2);
// let P = a + b + c;
// console.log(c);
// console.log(P);

// // begin7
// let r1 = +prompt("berilgan r1 kiritilsin");
// let r2 = +prompt("berilgan r2 kiritilsin, r1>r2");
// const pi = 3.14;
// let S1 = pi * r1;
// let S2 = pi * r2;
// let S = pi * (r1 - r2);
// console.log(S1);
// console.log(S2);
// console.log(S);

// // begin8
// let L = +prompt("berilgan L ga son kiriting");
// const pi = 3.14;
// let R = L / (2 * pi);
// let S = pi * R ** 2;
// console.log(R);
// console.log(S);

// // begin9
// let x1 = +prompt("berilgan x1 ni kiriting");
// let x2 = +prompt("berilgan x2 ni kiriting");
// let y1 = +prompt("berilgan y1 ni kiriting");
// let y2 = +prompt("berilgan y2 ni kiriting");
// let L = ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 1 / 2;
// console.log(L);

// // begin10
// let A = +prompt("A ga son kiriting");
// let B = +prompt("B ga son kiriting");
// let C = +prompt("C ga son kiriting");
// let D = A;
// A = B;
// B = C;
// C = D;
// console.log(A, B, C);

// // begin11
// let x = +prompt("x ni qiymatini kiriting");
// let y = 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;
// console.log(y);

// // begin12
// let A = +prompt("A soniga qiymat bering");
// let c = +prompt("darajaga son kiriting");
// let b = A ** c;
// console.log(b);

// // begin13
// let Tf = +prompt("Tf qiymatni kiriting");
// let Tc = (Tf - 32) * (5 / 9);
// console.log(Tc);

// // begin14
// let x = +prompt("x kilogramni kiriting");
// let y = +prompt("y kilogramni kiriting");
// let g = x * 40000;
// let n = y * 35000;
// let c = g - n;
// console.log("qanchaga arzon", c);

// // begin15
// let x = +prompt("x kilogramli olmani  kiriting");
// let a = +prompt("a so'mli olmani kiriting");
// let y = +prompt("y kilogramli olmani kiriting");
// let b = +prompt("b so'mli olmani kiriting");
// let g = x * a;
// let n = y * b;
// let c = g + n;
// console.log("jami savdo qilgan so'mmasi", c);

// // integer1
// let abc = +prompt("uch xonali raqam kiriting");
// let bc = abc % 100;
// let a = (abc - bc) / 100;
// let c = bc % 10;
// let A = (bc - c) / 10;
// let B = bc % 10;
// console.log("O'nlar xonasi", A);
// console.log("Birlar xonasi", B);

// // integer2
// let abc = +prompt("uch xonali raqam kiriting");
// let bc = abc % 100;
// let a = (abc - bc) / 100;
// let b = (abc - a) % 10;
// let c = bc % 10;
// let A = (bc - c) / 10;
// let B = bc % 10;
// let y = a + b + c;
// console.log("raqamlar yig'indisi", y);

// // integer3
// let abc = +prompt("uch xonali raqam kiriting");
// let bc = abc % 100;
// let a = (abc - bc) / 100;
// let b = (abc - a) % 10;
// let c = bc % 10;
// let B = bc % 10;
// let y = a + b + c;
// console.log("raqamlar teskari tartibda ", c, b, a);

// // integer4
// let abc = +prompt("uch xonali raqam kiriting");
// let bc = abc % 100;
// let a = (abc - bc) / 100;
// let b = (abc - a) % 10;
// let c = bc % 10;
// let y = a + b + c;
// console.log("o'nliklar va yuzliklar xonasidagi raqam almashsin ", b, a, c);

// // integer5
// let abc = +prompt("uch xonali raqam kiriting");
// let bc = abc % 100;
// let a = (abc - bc) / 100;
// let b = (abc - a) % 10;
// let c = bc % 10;
// let y = a + b + c;
// console.log("o'nliklar va birliklar xonasidagi raqam almashsin ", a, c, b);

// // integer6

// let abcde = +prompt("5 xonali raqam kiriting");
// let cde = abcde % 1000;
// let ab = (abcde - cde) / 1000;
// let b = ab % 10;
// console.log("besh xonali sonni ikkinchi raqami", b);

// integer7

// let seconds = +prompt("sekund kiriting");
// let r = seconds % 3600;
// let hours = (seconds - r) / 3600;
// let secund = r % 60;
// let minut = (r - secund) / 60;

// console.log(minut);

// // integer8
// let seconds = +prompt("sekund kiriting");
// let r = seconds % 3600;
// let hours = (seconds - r) / 3600;
// let secund = r % 60;
// let minut = (r - secund) / 60;
// console.log(hours);

// integer9
// let seconds = +prompt("sekund kiriting");
// let r = seconds % 3600;
// let hours = (seconds - r) / 3600;
// let secund = r % 60;
// let minut = (r - secund) / 60;
// console.log(secund);
// console.log(minut);

// integer10
// let seconds = +prompt("sekund kiriting");
// let r = seconds % 3600;
// let hours = (seconds - r) / 3600;
// let secund = r % 60;
// let minut = (r - secund) / 60;
// console.log(hours);
// console.log(secund);
