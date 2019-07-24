//#region  基本类型定义
// let a:string = '123'
// console.log(a)
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
class Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    getInfo():string{
        return this.name;
    }
}

class student extends Person{
    constructor(name:string){
        super(name)
    }
}

let stu = new student('yhy');
alert(stu.getInfo())
//#endregion
