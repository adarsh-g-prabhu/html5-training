
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncfunc() {
  await delay(5000); 
  console.log(`Wake up, Man1!`);
  

  await delay(6000); 
  console.log(`Wake up, Man2!`);


  await delay(3000); 
  console.log(`Wake up, gedi!`);
  
 
  await delay(2000); 
  console.log(`Wake up, alan!`);

  
  await delay(6000); 
  console.log("Hello world");
}

async function asyncfunc2() {

  await new Promise (resolve=> {setTimeout((a)=>{ resolve(0)},3000)});
  console.log("japan");
  
}


asyncfunc();
console.log("Hello3");
  console.log("Hello4");
asyncfunc2()



async function func1() {

  const resolved=await new Promise(resolve1 => {
    setTimeout(() => {
      resolve1("ichigo");
    }, 2000);
    
  });
  return resolved;
  
}

const kuro=func1();
kuro.then(result=>{
console.log(result+" kurosaki");});