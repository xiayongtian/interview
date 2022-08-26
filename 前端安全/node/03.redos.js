const reg = /A(B|C+)+D/
console.time('case-1')
reg.test('ACCCCCCCCCCCCCCCCCCCD')
console.timeEnd('case-1')

console.time('case-2')
reg.test('ACCCCCCCCCCCCCCCCCCCX')
console.timeEnd('case-2')

console.time('case-3')
reg.test('ACCCCCCCCCCCCCCCCCCCCCCCCCCCX')
console.timeEnd('case-3')
console.log('haha')

console.time('for')
for (i = 0; i < 500000; i++) {

}

console.timeEnd('for')