import {MysqlDB} from '../modules/dbc'

class UserClass{
    username: string | undefined;
    password: string | undefined;
}

let UserModel = new MysqlDB<UserClass>('我要连接数据库啦');

export {UserClass,UserModel};