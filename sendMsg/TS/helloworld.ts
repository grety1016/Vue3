export{}
//数字类型
// @ts-ignore
let num1:number =0;
//字符串类型
// @ts-ignore
let str:string = "Hello World";
//布尔类型
// @ts-ignore
let flag:boolean;
flag = false;
//进制数字
// @ts-ignore
let a:number  = 10;
// @ts-ignore
let a1:number = 0b10;
// @ts-ignore
let a2:number = 0o73434;
// @ts-ignore
let a3:number = 0x156af; 

// null undefined
// @ts-ignore
let u:undefined = undefined;
// @ts-ignore
let n:null = null;
//undefined null 为所有类型的子类型，可以直接赋值给其它类型
// @ts-ignore
let num2:number = 10;
// @ts-ignore
let num3:number = 20;
// @ts-ignore
const num4:number = 10;

//数字类型数组array
// @ts-ignore
let arr1:number[] =[1,2,3];

//泛型数组
// @ts-ignore
let arr2:Array<number> = [1,2,3,4,5];

//对象object非原始类型
// @ts-ignore
let obj:object ={};
obj = {};
obj = {};
obj = [];
obj = new String('123');
obj = String;

//Any类型数组
// @ts-ignore
let anyValue:any[]=[100,2,4,"123",true];
//console.log(anyValue[0].split());//此语句在类型检查时可以通过，但是运行时会报错，因为TypeError: anyValue[0].split is not a function，这是因为对象是any类型，这也是any方便使用的同时也存在的缺点


//类型推断
// @ts-ignore
let grety = 'SuNingLv';
//grety = 10;  //类型推断后，后续赋值只能跟首次赋值的类型一致

//复合类型
let numStr:number | string = 0;
numStr = "SuNingLv";

//接口对象类型：它是行为的抽象
interface IPerson{
    name:string;
    age:number;
    readonly sex:string;
    parent?:string;
    [propName:string]:any;
}

let p:IPerson={
    name:"SuNingLv",
    age:20,
    sex:"Man",
    head:"toll"
};
console.log(p);
p.name = "Grety";
p.age = 33;
p.parent = "father";
p.head = "fall";
p.body = "toll";
console.log(p);
//p.sex = 'woman' //只读属性无法在初始化后再次赋值

//接口数组类型一般不常用，需要用到再查询资料！！！

//接口函数类型
interface ISerchFunc{
    (a:string, b:string):boolean;
}

const fun1:ISerchFunc =function fun1(a:string, b:string):boolean {
    return  a.search(b)!== -1;
}

console.log(fun1('123','1'));

//函数定义
function add(a:number,b:number):number {
    return a+b;
}

let c = add(1,3);
console.log(c);

//函数表达式\匿名函数
const add2 = function(a:number,b:number):number {return a+b;};

console.log(add2(2,3));

//函数完整的写法
let add3:(a:number, b:number) => number = function(a:number, b:number):number {
    return a+b;
}

console.log(add3(3,3));

//函数的可选参数和默认参数

let getNmae =  function(a:string='NingLv',b?:string,c:string='Grety') {
    return a+b+c;
}

console.log(getNmae());

//函数剩余参数,剩余参数只能放在所有的参数末尾

function getSum(...args:number[]):number {
    let sum:number = 0;
    for(let i=0;i<args.length;i++){
        sum += args[i];
    }
    return sum;
}
console.log(getSum(1,2,3,4,5,6));

//函数的重载

function getSum2(a:number,b:number):number;
function getSum2(a:string,b:string):string;
function getSum2(a:any,b:any):any {
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }else if(typeof a === 'string' && typeof b === 'string'){
        return a+b;
    }else{
        throw new Error('参数类型不匹配');
    }
};

console.log(getSum2(1,2));
console.log(getSum2('a','b'));

//类型断言
//①变量 as 类型 ②<类型>变量

let strAny: any = 'Hello World';
// @ts-ignore
let str2: string = strAny as string; //方法一

let objAny: any = {name:'NingLv',age:20};
// @ts-ignore
let obj2: IPerson = <IPerson>objAny ; //方法二

//将任何一个类型断言为 any,通常不能随意使用any
//(window as any).foo = 1;

//将any断言为具体类型
function abc(x:any,y:any):any {
    return x+y;
}

let re = abc(1,2) as number;
console.log(re);

//进阶
//类型别名
type s = string;
// @ts-ignore
let str11:s = "grety";

//all代表多种复合类型
type all = string | number | boolean | null | undefined ;
// @ts-ignore
let allValues:all = "Grety";
allValues = 100;
allValues = true;
allValues = null;

//字符串字面量类型
type stringType = 'su' | 'huang';//只能赋值给定的字符面量值
// @ts-ignore
let names:stringType = 'huang';

//元组
let tuples:[number,string]=[123,"123"];
tuples = [456,"789"];
tuples.push(333);
console.log(tuples);
tuples.push("444");
console.log(tuples);

//enum枚举类型

enum Color {Red=2, Green=5, Blue=7}
let color:Color = Color.Green;
console.log(color);
// @ts-ignore
enum Direction {Up=1,Down,Left,Right}
// @ts-ignore
//枚举有两种类型：常数项和计算所得项
enum Color2 {
    Red, Green, 
    Blue = "blue".length
    //Green, //在计算所得项的后面只能是赋值项，不能是未赋值项
};

//外部枚举
declare enum Directions {
    Up,
    Down,
    Left,
    Right
} 

//类class
class Person {
    name:string;
    age:number;

    constructor(name:string, age:number) {//构造方法是用new()函数进行调用的
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person('NingLv', 20);
console.log(p1);

//继承类用 extends
class Animal {
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    eat():void {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    constructor(name:string,age:number){
        super(name, age);
    }
    eat(): void {
        console.log(`${this.name}  eat method.`);
    }
}

const cat = new Animal('cat', 10);
cat.eat();

const dog = new Dog('dog', 5);
dog.eat();

//类的存取器 getter 和 setter 
class Name{
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //get、set 属性名（），当实例需要访问时直接 类实例名.属性名，不需要（）
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value:string){
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

let n1 = new Name('苏','宁绿');
console.log(n1.fullName);
n1.fullName = "黄 蓝雁";
console.log(n1);

//类的静态属性和方法

class MathUtils {
    static PI:number = 3.14;

    static sum(a:number, b:number):number {
        return a + b;
    }
}

MathUtils.PI = 3.1415926;
console.log(MathUtils.PI);

console.log(MathUtils.sum(1,2));

//public private 和 protected
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

class Animal2 {
    public name:string;
    // @ts-ignore
    private age:number;
    protected weight:number;

    constructor(name:string, age:number, weight:number){
        //当构造函数修饰为 private 时，该类不允许被继承或者实例化：
        //当构造函数修饰为 protected 时，该类只允许被继承：不允许被实例化
        //修饰符和readonly还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值(只能在constructor构造初始化时赋值，后续不能再修改其属性值)
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    public eat():void {//可以在任意地方使用
        console.log(`${this.name} is eating.`);
    }
    // @ts-ignore
    private sleep():void {
        console.log(`${this.name} is sleep.`);
    }

    protected play():void {
        console.log(`${this.name} is playing.`);
    }
}
// @ts-ignore
class Dog2 extends Animal2 {
    //sleep():void {} //private只能在类自己内部访问，继承也不行
    play():void {
        console.log(`${this.name} is playing with Dog2.`);
        super.play();//protected可以在继承类中使用
    }

}

// readonly
class X {
    //readonly age:number//只读属性，但是在构造函数是可以修改的
    // readonly定义在参数上，那就是创建并且初始化的age参数age:number)
    constructor(readonly age:number){
        //此处无需再赋值，因为在调用构造函数时已经被初始化
    }
    // this.age=age
    update(){
    // this.age=15 报错，不能被修改 ，只读属性
    }
    
}

const x=new X(13)
console.log(x);

//抽象类
//抽象类专门服务于子类而生本身不支持实例化，具备方法签名，但不具备方法实体，只能在子类中实现

abstract class Animal3 {
    abstract name:string;

    // constructor(name){
    //     this.name = name;//抽象属性不能被访问
    // }

    abstract makeSound():void; // 抽象方法，没有方法体，需要子类实现
    eat():void {
        console.log(`${this.name} is eating.`);
    }
}

class Cat3 extends Animal3 {
    name:string;

    constructor(name:string){
        super();
        this.name = name;
    }
    makeSound(): void {
        console.log(`${this.name} is makeSound.`); 
    }
}

const cat3 = new Cat3('cat3');
cat3.makeSound();


//类的类型：
class Car{
    name: string;
    age:number;
    constructor(name:string,age:number){
        this.name = name
        this.age = age;
    }

    drive():void{
        console.log(`${this.name} is driving.`);
    }
}
class Ben extends Car{
    constructor(name:string,age:number){
        super(name,age)
    }   
}
//子、父类型可以相互作为变量的类型，因为他们的属性一样，但如果子类有独立于父类的属性时，是不可以这样操作的。 eg:类型 "Car" 中缺少属性 "age"，但类型 "Ben" 中需要该属性。
const car:Ben= new Car("Ben",10);
const ben: Car = new Ben("Car",20);
console.log(car);
console.log(ben);

//类与接口的结合使用

interface IAnimal {
    name: string;
    eat(): void;
}

class P implements IAnimal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(): void {
        console.log(`${this.name} is eating.`);
    }
}

class An implements IAnimal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(): void {
        console.log(`${this.name} is eating.`);
    }
}

const pp2 = new P('su');
const an2 = new An('an');
pp2.eat();
an2.eat();

//接口继承接口
interface Alarm {
    alert(): void;
}

interface Alarm2{
    alert2():void;
}
interface LightableAlarm extends Alarm,Alarm2 {//继承多个接口，类暂时不能支持多重继承
    lightOn(): void;
    lightOff(): void;
}

//类型实现接口
// @ts-ignore
class AlarmClass implements LightableAlarm{
    price: number=10;
    weight: number=20;
    alert(): void {
        console.log("Alarm is ringing...");
    }
    alert2(): void {
        console.log("Alarm2 is ringing...");
    }
    lightOn(): void {
        console.log("Light is on...");
    }
    lightOff(): void {
        console.log("Light is off...");        
    }
    
}

//接口继承类
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}
// @ts-ignore
let point3d: Point3d = {x: 1, y: 2, z: 3};



//声明合并
//函数合并
// @ts-ignore
function reverse(x: number): number;
// @ts-ignore
function reverse(x: string): string;
// @ts-ignore
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return '';
}

//接口合并
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}
//相当于：//注意，合并的属性的类型必须是唯一的：
interface Alarm {
    price: number;
    weight: number;
}

//类的合并与接口的合并规则一致。

//泛型
function getArr<T>(value:T,count:number):T[]{
    const arr:T[]=[]
    for(let i=0;i< count; i++){
        arr.push(value)
    }
    return arr
}

console.log(getArr(123,3));
console.log(getArr('123',3));

//多个泛型参数
//[123,'123']
function updateArr<T,U>(t:[T,U]):[U,T]{
    return[t[1],t[0]];
}
console.log('-----------------');
console.log(updateArr<number,string>([123,'234']));
console.log(updateArr<boolean,string>([false,'234']));


//泛型的约束
//约束的对象
interface ILength{
    length:number;
}

function getLength<T extends ILength>(value:T):number
{
    return value.length;
}

console.log(getLength([112,'234',456]));

//泛型接口
// @ts-ignore
interface IArr<T>{
    <T>(value:T,count:number):Array<T>
}

let getArr2:IArr<string> = function getArr<T>(value:T,count:number):T[]{
    const arr:T[]=[]
    for(let i=0;i< count; i++){
        arr.push(value)
    }
    return arr
}

console.log(getArr2('123',3));

//泛型类
class Genericity<T>{
    name:T;
    content:T;

    constructor(name:T,content:T){
        this.name = name;
        this.content = content;
    }
    
}

const per3 = new Genericity<string>("ccc","content");
console.log(per3);
