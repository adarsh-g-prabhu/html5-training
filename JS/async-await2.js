async function asyncfunc() {
    await setTimeout(() => {
        setTimeout(() => {
            console.log(`Wake up, Man2!`);
          }, 6000);
        console.log(`Wake up, Man1!`);
       
      }, 5000);

      await setTimeout(() => {
        setTimeout(() => {
            console.log(`Wake up, alan!`);
          }, 2000);
        console.log(`Wake up, gedi!`);
       
      }, 3000);


 
    console.log("Hello3");
    console.log("Hello4");
    setTimeout(()=>{console.log("Hello world")},6000);
      

 
    }
   
asyncfunc();