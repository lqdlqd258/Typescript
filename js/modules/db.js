"use strict";
// export let DBUrl = '这是数据库地址';
// export function getData():any[]{
//     console.log('获取数据库数据');
//     return [
//         {
//             title:'123321'
//         }
//     ]
// }
Object.defineProperty(exports, "__esModule", { value: true });
// export function save(){
//     console.log('保存数据');
// }
//或者统一暴露
var DBUrl = '这是数据库地址';
exports.DBUrl = DBUrl;
function getData() {
    console.log('获取数据库数据');
    return [
        {
            title: '123321'
        }
    ];
}
exports.getData = getData;
function save() {
    console.log('保存数据');
}
exports.save = save;
