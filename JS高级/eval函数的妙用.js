// eval 是全局对象上的一个函数，会把传入的字符串当做 JavaScript 代码执行。如果传入的参数不是字符串，它会原封不动地将其返回。eval 分为直接调用和间接调用两种，通常间接调用的性能会好于直接调用

// 直接调用时，eval 运行于其调用函数的作用域下；

// var context = 'outside';
// function test() {
//   var context = 'inside';
//   return eval('context');
// }
// test()
// console.log(context)



// return 'inside'


// 而间接调用时，eval 运行于全局作用域。
// var context = 'outside';
// var geval = eval;
// function io() {
//   return geval('var context=23');

//   // 下面两种也属于间接调用
//   // return eval.call(null, 'context');
//   // return (1, eval)('context');
// }
// io()
// console.log(context)
// return 'outside'


// eval() 是一个危险的函数， 它使用与调用者相同的权限执行代码。如果你用 eval() 运行的字符串代码被恶意方（不怀好意的人）修改，
// 您最终可能会在您的网页 / 扩展程序的权限下，在用户计算机上运行恶意代码。更重要的是，
// 第三方代码可以看到某一个 eval() 被调用时的作用域，这也有可能导致一些不同方式的攻击。
// 相似的 Function 就不容易被攻击。

// eval() 通常比其他替代方法更慢，因为它必须调用 JS 解释器，而许多其他结构则可被现代 JS 引擎进行优化。
