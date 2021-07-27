var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
class BasePage{

    constructor(){
        global.driver = driver;
    }

    goToUrl (url) {
        return driver.get(url);
      };

}

module.exports = BasePage;