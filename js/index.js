"use strict";
//#region  基本类型定义
// let a:string = '123'
// console.log(a)
//#endregion
//#region  函数
// function add(name:string):void{
//     console.log(name);
// }
// add('ljc');
//或者
// let a = function(name:string):void{
//     console.log(name);
// }
// a('ljc');
//#endregion
//#region  枚举类型
// enum color{red = 1,blue = 2,black = 3}
// let c:color = color.blue;
// console.log(c)
//#endregion
//#region  重载
// function getInfo(name:string):string;
// function getInfo(name:string,age:number):string;
// function getInfo(name:any,age?:any):any{
//     if(typeof age !== 'number'){
//         return `我没有age`
//     }else{
//         return `我的名字是_${name},年龄是_${age}`
//     }
// }
// alert(getInfo('ljc',24));
//#endregion
//#region  类
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     getInfo():string{
//         return this.name;
//     }
// }
// let p = new Person('ljc');
// alert(p.getInfo())
//#endregion
//#region  类的继承 extends super
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     getInfo():string{
//         return this.name;
//     }
// }
// class student extends Person{
//     constructor(name:string){
//         super(name)
//     }
// }
// let stu = new student('yhy');
// alert(stu.getInfo())
//#endregion
//#region  jQuery 构造函数封装 和 静态方法封装 (简单还原)
// function $(element){
//     return new Base(element);
// }
// $.ajax = function(){
// }
// function Base(element){
//     this.element = '获取dom操作';
//     this.css = function(arr,val){
//         this.element.style.arr = val;
//     }
// }
// $('#app').css('color','red');   //实例方法封装
// $.ajax({}); //静态方法封装
//#endregion
//#region  静态方法
// class Person {
//     public name:string = '123';
//     static staName:string = '我是静态属性';
//     constructor(name:string) {
//         this.name = name;
//     }
//     run(){  //实例方法
//         alert(`${this.name}在运动`)
//     }
//     static work(){
//         alert(`${this.staName}`)
//     }
// }
// let p = new Person('ljc');
// p.run();
// Person.work();
//#endregion
//#region  多态
// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     eat(){  //每个动物都有吃的方法，具体怎么吃不知道,继承(重写方法)它的 子类 去实现，每一个子类表现不一样
//         console.log(`吃的方法`);
//     }
// }
// class dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         return this.name+`吃粮食`;
//     }
// }
// class cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         return this.name+`吃老鼠`;
//     }
// }
//#endregion
//#region  抽象方法 和 抽象类 (更好实现多态)
// abstract class Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     abstract eat():any;//定义抽象方法
// }
// class cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         alert(`${this.name}在吃东西`)
//     }
// }
// let a = new cat('小花');
// a.eat();
//#endregion
//#region  属性(对象)接口  以及它的 可选属性
// interface FullName{
//     firstName:string;
//     secondName?:string; //可选属性
//     // secondName:string;
// }
// function PrintName(name:FullName){
//     alert(`${name.firstName}--${name.secondName}`);
// }
// let obj = {
//     firstName:'L',
//     secondName:'JC'
// }
// PrintName(obj);
//#endregion
//#region  函数接口
// interface encrypt{
//     (key:string,value:string):string;
// }
// var md5:encrypt = function(key:string,value:string):string{
//     return key+value;
// }
// console.log(md5('name','ljc'));
//#endregion
//#region  类接口
// interface Animal{
//     name:string;
//     eat(str:string):void;
// }
// class Dog implements Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     eat(){
//         console.log(this.name+`吃粮食`);
//     }
// }
// let a = new Dog('狗');
// a.eat();
//#endregion
//#region  泛型 定义 和 函数
// 泛型：可以支持不特定的数据类型  要求：传入的参数和返回的参数一致
// function getInfo<T>(name:T):T{
//     return name;
// }
// console.log(getInfo("ljc"));
//#endregion
//#region  泛型类
// class MinClass<T>{
//     public list:T[]=[];
//     add(value:T):void{
//         this.list.push(value);
//     }
//     min():T{
//         let minvalue = this.list[0];
//         this.list.forEach(function(val,index,arr){
//             if(minvalue > val){
//                 minvalue = val;
//             }
//         })
//         return minvalue;
//     }
// }
// let filternum = new MinClass<number>();
// filternum.add(4);
// filternum.add(7);
// filternum.add(2);
// filternum.add(1);
// console.log(filternum.min());
// let filterdata = new MinClass<string>();
// filterdata.add('f');
// filterdata.add('g');
// filterdata.add('t');
// filterdata.add('l');
// console.log(filterdata.min());
//#endregion
//#region  泛型接口
//第一种
// interface ConfigFn{
//     <T>(value:T):T
// }
// let getDate:ConfigFn = function<T>(value:T):T{
//     return value;
// }
// console.log(getDate<number>(123))
//第二种
// interface ConfigFn<T>{
//     (value:T):T
// }
// let getDate:ConfigFn<string> = function<T>(value:T):T{
//     return value;
// }
// console.log(getDate('ljc'))
//#endregion
//#region  把类当作参数，传入泛型类
// class ArticaleCate{
//     title: string | undefined;
//     desc: string | undefined;
//     constructor(params:{
//         title: string | undefined;
//         desc: string | undefined;
//     }){
//         this.title = params.title;
//         this.desc = params.desc;
//     }
// }
// let a = new ArticaleCate({
//     title:'美食',
//     desc: '好好吃'
// })
// class MySqlDb<T>{
//     add(info:T):boolean{
//         console.log(info);
//         return true;
//     }
// }
// let b = new MySqlDb<ArticaleCate>();
// b.add(a);
//#endregion
//#region  泛型实战
//解决方案：（约束统一的规范，以及代码复用）需要规范所以要定义接口，需要代码重用所以用到泛型
//1.接口：面向对象的编程中，接口是 一种规范定义 ，它定于了行为和规范；
//2.泛型：通俗理解：泛型就是解决 类，接口，方法的复用性
// interface DBI<T>{
//     add(info:T):boolean;
//     delete(id:number):boolean;
//     update(info:T,id:number):boolean;
//     get(id:number):any[];
// }
// //定义一个操作数据库的类   注意：要实现泛型接口 这个类也是应该是一个 泛型类
// //实现Mysql数据库类
// class MysqlDB<T> implements DBI<T>{
//     constructor(name:string){
//         console.log(name);
//     }
//     add(info: T): boolean {
//         console.log(info);
//         return true;
//     }    
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     get(id: number): any[] {
//         let list = [
//             {
//                 title:'xxxx',
//                 desc:'xxxx'
//             },
//             {
//                 title:'xxxx',
//                 desc:'xxxx'
//             }
//         ]
//         return list;
//     }
// }
// //实现MSsql数据库类
// class MSsqlDB<T> implements DBI<T>{
//     add(info: T): boolean {
//         throw new Error("Method not implemented.");
//     }    
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     get(id: number): any[] {
//         throw new Error("Method not implemented.");
//     }
// }
// //操作用户表  定义一个User类和数据库表做映射
// class User{
//     username: string | undefined;
//     password: string | undefined;
// }
// let u = new User();
// u.username = '张三'
// u.password = '123';
// // 传入 User类 做为类型变量 做验证
// let MySql = new MysqlDB<User>('我要连接数据库啦');
// // MySql.add({username:'123',password:'321'});
// MySql.add(u);
// // 获取User表，ID=4的数据
// let data = MySql.get(4);
// console.log(data);
//#endregion
//#region  模块和模块化
// import {getDate,save,DBUrl as data} from './modules/db' 
// getDate();
// save();
// console.log(data);
//#endregion
//#region  运用模块化进行 泛型实战封装
//先调用mysqlDB库
// import {UserClass,UserModel} from './model/user';
// let u = new UserClass();
// u.username = '张三'
// u.password = '123456';
// UserModel.add(u);
// let res = UserModel.get(321);
// console.log(res);
//#endregion
//#region  命名空间 (主要用于组织代码，避免命名冲突)
// namespace A{
//     interface Animal{
//         name:string;
//         eat(str:string):void;
//     }
//     export class Dog implements Animal{
//         name:string;
//         constructor(name:string){
//             this.name = name;
//         }
//         eat(){
//             console.log(this.name+`吃粮食`);
//         }
//     }
// }
// let a = new A.Dog('小狗');
// a.eat();
// namespace B{
//     interface Animal{
//         name:string;
//         eat(str:string):void;
//     }
//     export class Dog implements Animal{
//         name:string;
//         constructor(name:string){
//             this.name = name;
//         }
//         eat(){
//             console.log(this.name+`吃粮食`);
//         }
//     }
// }
// let b = new B.Dog('小花');
// b.eat();
//#endregion
//#region  命名空间 模块化封装
// import A from './namespace/a'
// let a = new A.Dog('小狼狗');
// a.eat();
//#endregion
//#region  装饰器(类装饰器)
//普通装饰器 (类装饰器)
// function logClass(params:any){
//     //params就是当前类
//     console.log(params);
//     params.prototype.apiUrl = '动态扩展的属性';
//     params.prototype.run = function(){
//         console.log(`这是run方法`);
//     }
// }
// @logClass
// class HttpClient{
//     constructor(){
//     }
//     getDate(){
//     }
// }
// let a:any = new HttpClient();
// console.log(a.apiUrl);
// a.run()
//装饰器工厂 (类装饰器)
// function logClass1(params:string){
//     // console.log(params);
//     return function(target:any){
//         //这是当前类
//         // console.log(target);
//         target.prototype.apiUrl = params;
//     }
// }
// //会自动执行
// @logClass1('http://www.baidu.com')
// class HttpClient1{
//     constructor(){
//     }
//     getDate(){
//     }
// }
// let a:any = new HttpClient1();
// console.log(a.apiUrl);
//#endregion
//#region  类装饰器 重载构造函数例子
// function logClass(target:any){
//     //params就是当前类
//     console.log(target);
//     return class extends target{
//         apiUrl:string | undefined;
//         constructor(){
//             super()
//             this.apiUrl = '321'
//         }
//         getDate(){
//         }
//     }
// }
// @logClass
// class HttpClient{
//     apiUrl:string | undefined;
//     constructor(){
//         this.apiUrl = 'www.baidu.com'
//     }
//     getDate(){
//     }
// }
// let a:any = new HttpClient();
// console.log(a.apiUrl);
//#endregion
//#region  属性装饰器
// function logProperty(params:any){
//     return function(target:any,attr:any){
//         console.log(target);
//         console.log(attr);
//         target[attr] = params;
//     }
// }
// class HttpClient{
//     @logProperty('3333')
//     apiUrl:string | undefined;
//     constructor(){
//     }
//     getDate(){
//     }
// }
// let a:any = new HttpClient();
// console.log(a.apiUrl);
//#endregion
//#region  方法装饰器
//方法装饰器一 (增加属性和方法)
// function logClass(params:string){
//     return function(target:any,methodName:any,desc:any){
//         target.url = 'www.ljc.com';
//         target.run = function(){
//             console.log('run方法');
//         }
//     }
// }
// class HttpClient{
//     public url:string | undefined;
//     constructor(){
//         // this.url = 'www.baidu.com'
//     }
//     @logClass('www')
//     getDate(){
//         console.log(this.url);
//     }
// }
// let a:any = new HttpClient()
// console.log(a.url);
// a.run();
//方法装饰器二 (修改方法)
// function logClass(params:string){
//     return function(target:any,methodName:any,desc:any){
//         // console.log(target,methodName,desc);
//         // console.log(methodName);
//         // console.log(desc);
//         //1.保存当前方法
//         let oMethod = desc.value;
//         desc.value = function(...args:any[]){
//             args = args.map((value)=>{
//                 return String(value);
//             })
//             console.log(args);
//             oMethod.apply(this,args);
//         }
//     }
// }
// class HttpClient{
//     public url:string | undefined;
//     constructor(){
//         // this.url = 'www.baidu.com'
//     }
//     @logClass('www')
//     getDate(...args:any[]){
//         console.log(args);
//         console.log('我是getDate方法');
//     }
// }
// let a:any = new HttpClient()
// a.getDate([13,'hello']);
//#endregion
//#region  方法参数装饰器
// function logClass(params:string){
//     return function(target:any,methodName:any,paramsIndex:any){
//         console.log(params);
//         console.log(target);
//         console.log(methodName);
//         console.log(paramsIndex);
//     }
// }
// class HttpClient{
//     public url:string | undefined;
//     constructor(){
//     }
//     getDate(@logClass('xxxx') uuid:string){
//         console.log('这是getDate');
//     }
// }
//#endregion
