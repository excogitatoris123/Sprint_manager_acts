import Manager from './Manager'
import axios from 'axios';
const baseUrl="http://localhost:9090/Login"

class ManagerService{
    constructor(){
        this.manarr=[new Manager('vaibhav','Pune',500000,'consultant','1234'),
        new Manager('Abhishek','Pune',700000,'manager','2345'),
        new Manager('Laksh','Satara',600000,'lead','3456')];
    }
/*     getAllProducts(){
        return this.manarrarr;
       // return axios.get(baseUrl);
       //return axios.get("http://localhost:8282/products")
    }
    insertProduct(product){
        console.log("in service add")
       //this.prodarr.push(product);
       //console.log(this.prodarr);
       return axios.post(baseUrl+"/product/"+product.pid,product)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

    deleteproduct(pid){
       // let pos=this.prodarr.findIndex(p=>p.pid==pid);
       // this.prodarr.splice(pos,1);
       return axios.delete(baseUrl+"/product/"+pid)
    }*/
    getByName(name,password){
        if(name!=undefined && password!=undefined){
       let man= this.manarr.find(manager=>manager.name===name);
       if(man.password === password)
       return man;
        }
       //return axios.get(baseUrl+"/product/"+id)
    }
    /* 
    updateproduct(prod){
        //let pos=this.prodarr.findIndex(p=>p.pid==prod.pid);
       // this.prodarr.splice(pos,1,{...prod});
       return axios.put(baseUrl+"/product/"+prod.pid,prod)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    } */

}

export default new ManagerService();