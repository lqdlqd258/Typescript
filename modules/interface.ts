interface DBI<T>{
    add(info:T):boolean;
    delete(id:number):boolean;
    update(info:T,id:number):boolean;
    get(id:number):any[];
}

export default DBI;