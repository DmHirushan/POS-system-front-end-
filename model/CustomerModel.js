import { customers } from '../database/db.js'

export function getAllCustomers(){
    return customers;
}

export function getAll(){
    let customers = [];
    const http = new XMLHttpRequest();
    
    http.onreadystatechange = () => {
        if (http.readyState == 4) {
            if (http.status == 200) {
                customers = JSON.parse(http.responseText);
                console.log(customers);
                // document.getElementById('CustomerId').value = customer.id;
                // document.getElementById('CustomerName').value = customer.name;
                // document.getElementById('CustomerAddress').value = customer.address;
                // document.getElementById('CustomerSalary').value = customer.salary;
                return customers;
            } else {
                console.log('Request failed with status:', http.status);
            }
        }
        // return customer;
    };
    
    http.open("GET", `http://localhost:8080/pos/customer?type=${'all'}`, true);
    http.setRequestHeader("Content-type", "application/json");
    http.send();
}

export function save(Customer){    
    customers.push(Customer);
}

export function remove(index){
    customers.splice(index, 1);
}

export function search(id){

    let customer = {};

    const http = new XMLHttpRequest();
    
    http.onreadystatechange = () => {
        if (http.readyState == 4) {
            if (http.status == 200) {
                customer = JSON.parse(http.responseText);
                console.log(customer);
                document.getElementById('CustomerId').value = customer.id;
                document.getElementById('CustomerName').value = customer.name;
                document.getElementById('CustomerAddress').value = customer.address;
                document.getElementById('CustomerSalary').value = customer.salary;
                
            } else {
                console.log('Request failed with status:', http.status);
            }
        }
        return customer;
    };
    
    http.open("GET", `http://localhost:8080/pos/customer?id=${id}&type=${'one'}`, true);
    http.setRequestHeader("Content-type", "application/json");
    http.send();
}

export function update(index, customer){
    customers[index] = customer;
}