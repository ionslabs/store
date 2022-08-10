该项目用于简化对 localStorage 与 sessionStorage 的数据存取

## 作用方式

---

以 sessionStorage 为例（localStorage 使用方式为: local['get'|'set'|'merge'|'del'|'clear']()）

#### 存储数据

```js
session.set("a", [1, 2, 3]); // a: [1,2,3]
session.set("b", [{ a: "1" }, { b: "2" }]); // b: [{"a":"1"},{"b":"2"}]
session.set("c", { a: "1", b: "2" }); // c: {"a":"1","b":"2"}
session.set("d", 1); // d: 1
session.set("e", "a"); // e: a
session.set("f", undefined); // f: undefined
session.set("g", null); // g: null
```

#### 获取数据

```js
session.get("a"); // [1,2,3]
session.get("b"); // [{"a":"1"},{"b":"2"}]
session.get("c"); // {"a":"1","b":"2"}
session.get("d"); // 1
session.get("e"); // a
session.get("f"); // undefined
session.get("g"); // null
// 获取多个数据
session.get(["a", "b", "c", "d", "e", "f", "g"]); // {a: [1,2,3], b: [{"a":"1"},{"b":"2"}], c: {"a":"1","b":"2"}, d: 1, e: a, f: undefined, g: null}
```

#### 合并数据

合并数据主要针对对象、数组、数组对象。若数据不为上述三种则采用设置方式存储数据

```js
session.merge("a", [4, 5]); // a: [1,2,3,4,5]
session.merge("b", [{ c: "3" }, { b: "4" }]); // b: [{"a":"1"},{"b":"2"},{"c":"3"},{"b":"4"}]
session.merge("c", { a: "3", c: "5" }); // c: {"a":"3","b":"2","c":"5"}
session.merge("d", 2); // d: 2
```

#### 删除数据

```js
session.del("g"); // 删除单个数据
session.del(["b", "c", "d"]); // 删除多个数据
session.clear(); // 清空所用数据，慎用
```
