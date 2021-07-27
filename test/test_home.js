var { describe, it, after, before } = require("selenium-webdriver/testing");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var should = chai.should();
const home_page = require('../pages/home/home_page');
const Clients = require('../pages/home/home_locators');


describe('home page feature test2', function(){

    this.timeout(10000);

    this.beforeEach(function(){
        var baseurl = 'https://qa-exam.brubru.wearepsh.com/en/';
        home_page.goToUrl(baseurl);
        
    });

    it('count and print total client home page', function(){
        let client = home_page.read_array( Clients,"src");

    });
});