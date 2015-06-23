Sk.builtin.str.$emptystr = new Sk.builtin.str("");

/**
 * Python bool True constant.
 * @type {Sk.builtin.bool}
 * @memberOf Sk.builtin.bool
 */
Sk.builtin.bool.true$ = /** @type {Sk.builtin.bool} */ (Object.create(Sk.builtin.bool.prototype, {v: {value: 1, enumerable: true}}));

/**
 * Python bool False constant.
 * @type {Sk.builtin.bool}
 * @memberOf Sk.builtin.bool
 */
Sk.builtin.bool.false$ = /** @type {Sk.builtin.bool} */ (Object.create(Sk.builtin.bool.prototype, {v: {value: 0, enumerable: true}}));

/* Constants used for kwargs */

// Sk.builtin.int_
Sk.builtin.int_.co_varnames = [ "base" ];
Sk.builtin.int_.co_numargs = 2;
Sk.builtin.int_.$defaults = [ new Sk.builtin.int_(10) ];

// Sk.builtin.lng
Sk.builtin.lng.co_varnames = [ "base" ];
Sk.builtin.lng.co_numargs = 2;
Sk.builtin.lng.$defaults = [ new Sk.builtin.int_(10) ];

// Sk.builtin.sorted
Sk.builtin.sorted.co_varnames = ["cmp", "key", "reverse"];
Sk.builtin.sorted.co_numargs = 4;
Sk.builtin.sorted.$defaults = [Sk.builtin.none.none$, Sk.builtin.none.none$, false];

Sk.builtin.str.$float_ = new Sk.builtin.str("__float__");
Sk.builtin.str.$int_ = new Sk.builtin.str("__int__");
Sk.builtin.str.$complex = new Sk.builtin.str("__complex__");
Sk.builtin.str.$trunc = new Sk.builtin.str("__trunc__");
Sk.builtin.str.$round = new Sk.builtin.str("__round__");
Sk.builtin.str.$imag = new Sk.builtin.str("imag");
Sk.builtin.str.$real = new Sk.builtin.str("real");

Sk.builtin.str.$eq = new Sk.builtin.str("__eq__");
Sk.builtin.str.$ne = new Sk.builtin.str("__ne__");
Sk.builtin.str.$lt = new Sk.builtin.str("__lt__");
Sk.builtin.str.$le = new Sk.builtin.str("__le__");
Sk.builtin.str.$gt = new Sk.builtin.str("__gt__");
Sk.builtin.str.$ge = new Sk.builtin.str("__ge__");
Sk.builtin.str.$cmp = new Sk.builtin.str("__cmp__");

Sk.builtin.str.$getattribute = new Sk.builtin.str("__getattribute__");
Sk.builtin.str.$getattr = new Sk.builtin.str("__getattr__");
Sk.builtin.str.$setattr = new Sk.builtin.str("__setattr__");
Sk.builtin.str.$getitem = new Sk.builtin.str("__getitem__");
Sk.builtin.str.$setitem = new Sk.builtin.str("__setitem__");

Sk.builtin.str.$init = new Sk.builtin.str("__init__");
Sk.builtin.str.$index = new Sk.builtin.str("__index__");
Sk.builtin.str.$iter = new Sk.builtin.str("__iter__");
Sk.builtin.str.$next = new Sk.builtin.str("next");
Sk.builtin.str.$name = new Sk.builtin.str("__name__");
Sk.builtin.str.$repr = new Sk.builtin.str("__repr__");
Sk.builtin.str.$str = new Sk.builtin.str("__str__");
Sk.builtin.str.$len = new Sk.builtin.str("__len__");
Sk.builtin.str.$call = new Sk.builtin.str("__call__");
Sk.builtin.str.$contains = new Sk.builtin.str("__contains__");
Sk.builtin.str.$format = new Sk.builtin.str("__format__");
Sk.builtin.str.$dir = new Sk.builtin.str("__dir__");

Sk.builtin.str.$write = new Sk.builtin.str("write");
