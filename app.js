//Async And Await
// Async is a promise typeObj
//Await keyword stop assigning a value to the constData until the promise had resolved 
//the cleaner way to get data 


// fetch('data/data.json').then((response) => {

//     //Getting Response 
//     console.log('Resolved', response);
//     //Taking the formatJson of this response
//     return response.json();

// }).then( data => {

//     //taking this promise to get data
//     console.log(data);

// }).catch((error) => {

//     console.log('Rejected', error);

// });


//Chain promises together to get the same result


const getDatas = async () => {
    
    const response = await fetch('data/data.json');
    
    const data = await response.json();
    
    return data;
    
};


console.log(1);
console.log(2);


getDatas()
.then(data => { console.log('Resolved : ',data);});


console.log(3);
console.log(4);