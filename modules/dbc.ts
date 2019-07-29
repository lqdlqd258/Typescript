import DBI from './interface';
//实现Mysql数据库类
class MysqlDB<T> implements DBI<T>{
    constructor(name:string){
        console.log(name);
    }
    add(info: T): boolean {
        console.log(info);
        return true;
    }    
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        let list = [
            {
                title:'xxxx',
                desc:'xxxx'
            },
            {
                title:'xxxx',
                desc:'xxxx'
            }
        ]
        return list;
    }
}
//实现MSsql数据库类
class MSsqlDB<T> implements DBI<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }    
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}

export {MysqlDB,MSsqlDB}