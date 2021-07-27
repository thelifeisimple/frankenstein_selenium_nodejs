const webdriver = require('selenium-webdriver');

function split_object(string_in, obj_split ){
        
    var string_obj = string_in.split(obj_split);
    return string_obj;
  }

async function socialURL(){

    let driver = new webdriver.Builder().forBrowser('chrome').build(); //ok basepage
    await driver.get("https://qa-exam.brubru.wearepsh.com/blog/");
    await driver.manage().window().maximize();
    //await driver.wait(driver.executeScript("window.scrollBy(0,1024)"),10000)
    
    try{

        await driver.wait (driver.findElements(webdriver.By.xpath("//footer/div/div/ul[2]/li/a")),10000);

        let socialurls = await driver.findElements(webdriver.By.xpath("//footer/div/div/ul[2]/li/a"));
        for(let e of socialurls) {
            urlsocial = await e.getAttribute("href");
            urlsocial1 = await e.getAttribute("href");
            //console.log( urlsocial);
            object1 = split_object(urlsocial1,"/");
            if(object1 != 'undefined'){
                lastItem1 = object1[2];
            }           
            socialName = split_object(lastItem1,".");
            lastItem2 = socialName[socialName.length - 2];
            console.log( lastItem2 + ": " + urlsocial);                      
        }

    }
    finally{

    }
    await driver.quit();

}

socialURL()