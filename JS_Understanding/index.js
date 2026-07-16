const names = [
]
function Bind_table(params) {

    for(let i=0; i < 3 ; i++){
        let obj = [];
        obj.name = `avinash`+i;
        obj.email = `avinash`+i+`.gmail.com`;
        obj.city = `avinash`+i+`.gmail.com`;
        obj.type = typeof obj;
        names.push(obj)
    }
}
Bind_table();

console.table(names);
