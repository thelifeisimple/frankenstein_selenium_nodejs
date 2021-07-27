var webdriver = require("selenium-webdriver"),
  By = webdriver.By;

  async function returnLocatorClient(){
    let clientes = await driver.findElements(webdriver.By.xpath(".//section[@class='client--section']/div/div/div/div/div/div/img"));
    return Clients
    // await Clients = By.xpath(".//section[@class='client--section']/div/div/div/div/div/div/img")
  }


   module.exports
    
    // titleClient: By.className ("client-title"),
  