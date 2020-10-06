/** asycn and await */

const uno = () =>{
    return "I am One";
};

const dos = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout( ()=>{
            reject("I am two");
        }, 3000);
    });
};

const tres = () => {
    return "I am three";
};

const callMe = async () =>{
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

// callMe();

var status = {
    active : false,
    network : false,
    power  : false,
};

// const p = new Promise((resolve, reject) => {
//     if(status.active) resolve("connection established!");
//     else if(status.network) resolve("Please wait....routing");
//     else if(status.power) resolve("Please wait...rebooting");
//     else reject('System crashed!');
    
// });

// p.then(message => {
//     console.log(message);
// }).catch(err => {
//     console.log(err);
// });


async function makeRequest(request){
    return new Promise((resolve, reject) =>{
        if(request === 'google') resolve(`Making request to ${request}`);
        else if(request === 'facebook') resolve(`Making request to ${request}`);
        else{
            setTimeout(() => {
                reject(`we can only talk to goole or facebook`)
            },3000);
        }
    });
};

async function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        setTimeout(() =>{
            resolve(`Extra Information + ${response}`);    
        }, 3000);
        
    });
};


async function doWork(){
    try {
        const req = await makeRequest('facebook');
        console.log('respnse recieved!');
        const res = await processRequest(req);
        console.log(res);    
    } catch (error) {
        console.log(error);
    }
      

};

doWork();






