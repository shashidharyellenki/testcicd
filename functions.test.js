 // importing the poo from the js functions.js file

 const file = require('./functions');   //Now we can access to the functions dic

 //using the test inbuilt function we can test the all the functions

//1
 //toBe acts as match fucntion it checks weather the recevied answer is to satisfying the answer or not
 test("yaya the answer is correct all the test cases are passed",()=>{
     expect(file.Addtion(2,2)).toBe(4);
 })
//2
 test("the answer for 5,9 is 14 and the test cases is,",()=>{
     expect(file.Addtion(5,9)).toBe(14);
 })

 //3
 test("the answer for 10,10 is 20 and the test cases is,",()=>{
    expect(file.Addtion(10,10)).toBe(20);
})
//4
test("the answer for 10,10 is 20 and the test cases is,",()=>{
    expect(file.Addtion(10,10)).toBe(20);
})

//5
//this checks wether this function is returning Null value or not
test("Must return null value,",()=>{
    expect(file.NULL()).toBeNull();
})

//6
//cheking for true
test("Must return True value,",()=>{
    expect(file.Nijam()).toBeTruthy();
})

//7
//checking for false
test("Must return false value",()=>{
    expect(file.abadam()).toBeFalsy();
})


//8
//checking for undefined
test("Must return udefined value,",()=>{
    expect(file.Undef()).toBeUndefined();
})


//9
test("Must return defined value,",()=>{
    expect(file.Undef()).not.toBeDefined();
})

//10
//checking the value using the user defined function
test("checkvalue,",()=>{
    expect(file.checkVale(undefined,false,null)).toBeFalsy();
})

//11
//testcase for the createuser
test("Must return an object of user,",()=>{
    expect(file.createUser()).toEqual({firstname:'yellenki',lastname:'shashidhar'});
})
//12
//we can write functions in the test file also as we write in the functions.js file
//checking to be lessthan function
test('the quantity should be less then 1600',()=>{
    const load1 = 800;
    const load2 = 800;
    expect(load1+load2).toBeLessThan(1600);
})

//13
//tobelessthanorequal
test('the quantity should be less then or equal 1600',()=>{
    const load1 = 800;
    const load2 = 800;
    expect(load1+load2).toBeLessThanOrEqual(1600);
})

//14
//tobegreatertthen
test('the quantity should be greater then 1600',()=>{
    const load1 = 5000;
    const load2 = 500;
    expect(load1+load2).toBeGreaterThan(1600);
})

//15
//tobegreaterthenorequal
test('the quantity should be greater then 1600',()=>{
    const load1 = 5000;
    const load2 = 500;
    expect(load1+load2).toBeGreaterThanOrEqual(1600);
})
//16
//regex
//This function will pass because we are checking only for Caps I inorder to overcome this we need 
//to use caseIncsentive(i) flag in the regular expression
test('There is no I in the following sentence',()=>{
    expect('i Hello world').not.toMatch(/I/)
})

//17
//Arrays
test('Shashidhar should in userNames Array',()=>{
    const userNames = ['revanth', 'jhon', 'Shashidhar'];
    expect(userNames).toContain('shashidhar');
})

//18
test('the sum of 10+20 should be 30',()=>{
    expect(10+20).toBe(30);
})

//19
//working with the callbacks and axios which fetches from the api
test('The name should match with the Leanne Graham',()=>{
    expect.assertions(1);
    return file.fetch().then(res=>{
        expect(res.name).toEqual('Leanne Graham');
    })
})

//20
//refactoring the above code using await and async
test('The name should match with the Leanne Graham',async ()=>{
    expect.assertions(1);
    const data = await file.fetch();
        expect(data.name).toEqual('Leanne Graham');
    
})