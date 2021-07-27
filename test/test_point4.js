const webdriver = require('selenium-webdriver');
var assert = require('assert')
const fs = require('fs');
let driver = new webdriver.Builder().forBrowser('chrome').build();


webdriver.WebDriver.prototype.saveScreenshot = filename => {
    return driver.takeScreenshot().then(data =>  {
      fs.writeFile(`${__dirname}/screen_shots/${filename}`, data.replace(/^data:image\/png;base64,/,''), 'base64', err => {
        if(err) throw err
      })
    })
  }

async function screenShot(){
    var now = (Date.now()/1e3)|0
    await driver.get("https://qa-exam.brubru.wearepsh.com/en/");
    await driver.manage().window().maximize();
    var title = await driver.getTitle();
    assert(title,"We Are PSh")
    
    var totalHeight = await driver.executeScript('return document.body.offsetHeight');
    var windowHeight = await driver.executeScript('return window.outerHeight');

    try{
        for (var i = 0; i <= (totalHeight/windowHeight); i++) {
            await driver.executeScript(`window.scrollTo(0, window.outerHeight*${i})`);
            driver.saveScreenshot(`home-${i}-${now}.png`);
          }
        }
    finally{     
        console.log('done');
    }

    await driver.quit();

}

screenShot()