const axios = require('axios');
const poo = {
    Addtion: (args1, args2)=> args1+args2,
    NULL : function(){return null},
    Undef : function(){return undefined},
    Nijam : function(){return true},
    abadam : function(){return false},
    checkVale: function(x,y,z){ return x,y, z},
    createUser: ()=>{
        const user = {firstname:'yellenki', lastname:'shashidhar'};
        return user;
    },
    fetch: ()=>axios.get('https://jsonplaceholder.typicode.com/users/1').then(res=>res.data).catch(err=>'error'),
}

// Inorder to use this function in the next file we need to export the function/file

module.exports=poo;

//to convert the promise into json we will be using .data

