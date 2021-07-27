const webdriver = require('selenium-webdriver');
  
function split_object(string_in, obj_split ){
        
  var string_obj = string_in.split(obj_split);
  return string_obj;
}

async function runTestWithCaps () {
  let driver = new webdriver.Builder().forBrowser('chrome').build(); //ok basepage

  await driver.get("https://qa-exam.brubru.wearepsh.com/es/"); //ok basepage -> go to url

  try {
    // let clients = await driver.findElements(webdriver.By.className("client--slider"));
    sum = 0
    let clientes = await driver.findElements(webdriver.By.xpath(".//section[@class='client--section']/div/div/div/div/div/div/img"));
    for(let e of clientes) {

      object1 = await e.getAttribute("src");
      object2 = split_object(object1,"/");
      lastItem1 = object2[object2.length - 1];
      nameClient1 = split_object(lastItem1,"_");
      lastItem2 = nameClient1[nameClient1.length - 1];
      object3 = split_object(lastItem2,".");
      
      sum = sum + 1;
      console.log(sum + ". " + object3[0]);
      //console.log(client);
      }
        console.log('El total de clientes es: '+ sum);
    }
    
    finally {
      await driver.quit(); //ok basePage
    }
  
  
  await driver.quit();
}
runTestWithCaps(); 