
const webdriver = require('selenium-webdriver');
const BasePage = require('../base_page');
const Locator = require('./home_locators');

class HomePage extends BasePage {

    // Methods

    split_object(string_in, obj_split ){
        
        var string_obj = string_in.split(obj_split);
        return string_obj;
    }

    read_array(Locators, attribute){
        for (let e of Locators){
            object1 = e.getAttribute(attribute);
            object2 = object1.split_object(object1,"/");
            lastItem1 = object2[object2.length - 1];
            nameClient1 = lastItem.split_object(lastItem,"_");
            lastItem2 = nameClient1[nameClient1.length - 1];
            object3 = lastItem2.split_object(lastItem2,".");
            console.log(object3[0]);
        }

    }

    // Home.prototype.Clients = function(elements){

    //     for(let e of elements){
    //         object1 = await e.getAttribute(attribute);
    //         console.log(object1);
    //     }

    // }

    // Home.prototype.titleClient =function () {
    //    return this.find(Locator.titleClient).getText(); 
    // }
}
module.exports = new HomePage();