import { customers } from '../database/db.js'

// export function getAllCustomers(){
//     return customers;
// }

// export function getAll(){
//     let customers = [];
//     const http = new XMLHttpRequest();
    
//     http.onreadystatechange = () => {
//         if (http.readyState == 4) {
//             if (http.status == 200) {
//                 customers = JSON.parse(http.responseText);
//                 console.log(customers);
                
//                 let tableBody = document.getElementById('customer-table-body');

//                 let customer;
//                 for(let i=0; i<customers.length; i++){
//                     customer = customers[i];
//                     let newRow = tableBody.insertRow();

//                     let cell1 = newRow.insertCell(0);
//                     let cell2 = newRow.insertCell(1);
//                     let cell3 = newRow.insertCell(2);
//                     let cell4 = newRow.insertCell(3);

//                     cell1.textContent = customer.id;
//                     cell2.textContent = customer.name;
//                     cell3.textContent = customer.address;
//                     cell4.textContent = customer.salary;
//                 }
                
//                 return customers;
//             } else {
//                 console.log('Request failed with status:', http.status);
//             }
//         }
//         // return customer;
//     };
    
//     http.open("GET", `http://localhost:8080/pos/customer?type=${'all'}`, true);
//     http.setRequestHeader("Content-type", "application/json");
//     http.send();
// }

export function getAll(){
    return new Promise ((resolve, reject) => {
        let customers = [];
        const http = new XMLHttpRequest();
    
        http.onreadystatechange = () => {
        if (http.readyState == 4) {
            if (http.status == 200) {
                customers = JSON.parse(http.responseText);
                console.log(customers);
                resolve(customers);
            } else {
                reject('Request failed with status:', http.status);
            }
        }
        // return customer;
        }
    
        http.open("GET", `http://localhost:8080/pos/customer?type=${'all'}`, true);
        http.setRequestHeader("Content-type", "application/json");
        http.send();
    })
}


export function save(customerJSON){
    return new Promise ((resolve, reject) => {
        const http = new XMLHttpRequest();
        
        http.onreadystatechange = () => {
        if(http.readyState == 4){
            if(http.status == 201){
                console.log('Hello');
                resolve(true);
            }else{
                resolve(false);
                console.log('Request failed with status:', http.status);
            }
        }else{

        }
    };

    http.open("POST", "http://localhost:8080/pos/customer", true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(customerJSON);
    }) 
    
}

export function remove(customerId){
    const http = new XMLHttpRequest();
    http.onreadystatechange = () => {
        if(http.readyState == 4){
            if(http.status == 201){

            }else{

            }
        }else{

        }
    };

    http.open("DELETE", `http://localhost:8080/pos/customer?id=${customerId}`, true);
    http.setRequestHeader("Content-type", "application/json");
    http.send();
}

// export function search(id){

//     let customer = {};

//     const http = new XMLHttpRequest();
    
//     http.onreadystatechange = () => {
//         if (http.readyState == 4) {
//             if (http.status == 200) {
//                 customer = JSON.parse(http.responseText);
//                 console.log(customer);
//                 // document.getElementById('CustomerId').value = customer.id;
//                 // document.getElementById('CustomerName').value = customer.name;
//                 // document.getElementById('CustomerAddress').value = customer.address;
//                 // document.getElementById('CustomerSalary').value = customer.salary;
                
//             } else {
//                 console.log('Request failed with status:', http.status);
//             }
//         }
//         return customer;
//     };
    
//     http.open("GET", `http://localhost:8080/pos/customer?id=${id}&type=${'one'}`, true);
//     http.setRequestHeader("Content-type", "application/json");
//     http.send();
// }

export function search(id) {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();

        http.onreadystatechange = () => {
            if (http.readyState == 4) {
                if (http.status == 200) {
                    const customer = JSON.parse(http.responseText);
                    resolve(customer);
                } else {
                    reject(`Request failed with status: ${http.status}`);
                }
            }
        };

        http.open("GET", `http://localhost:8080/pos/customer?id=${id}&type=${'one'}`, true);
        http.setRequestHeader("Content-type", "application/json");
        http.send();
    });
}


export function update(cusId, customerJSON){
    const http = new XMLHttpRequest();
        
    http.onreadystatechange = () => {
        if(http.readyState == 4){
            if(http.status == 201){
                console.log('Hello');
                return true;
            }else{
                console.log('Request failed with status:', http.status);
            }
        }else{

        }
    };

    http.open("PUT", `http://localhost:8080/pos/customer?id=${cusId}`, true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(customerJSON);
}


