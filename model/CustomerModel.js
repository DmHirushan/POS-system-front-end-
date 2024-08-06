import { customers } from '../database/db.js'

export function getAllCustomers(){
    return customers;
}

export function save(Customer){    
    customers.push(Customer);
}

export function remove(index){
    customers.splice(index, 1);
}

export function search(id){
    const http = new XMLHttpRequest();
    
    http.onreadystatechange = () => {
        if (http.readyState == 4) {
            if (http.status == 200) {
                const customer = JSON.parse(http.responseText);
                console.log(customer);
                // const cutomerToPass = {
                //     id : customer.id,
                //     name : customer.name, 
                //     address : customer.address,
                //     salary : customer.salary
                // }
                return customer;
            } else {
                console.log('Request failed with status:', http.status);
            }
        }
    };
    
    http.open("GET", `http://localhost:8080/pos/customer?id=${id}&type=${'one'}`, true);
    http.setRequestHeader("Content-type", "application/json");
    http.send();
}

export function update(index, customer){
    customers[index] = customer;
}