var chai = require('chai')
var assert = chai.assert;
const expectChai = require('chai').expect;
const LoginPage = require('../pageobjects/loginPage');
const SecurePage = require('../pageobjects/secure.page');
const LoginData = require('../../ConfigData/logindata');
const Locators = require('../../ConfigData/locators');
const loginPage = require('../pageobjects/loginPage');
const HomePage = require('../pageobjects/homePageDropDown');
const AddToCart = require('../pageobjects/addToCart');
const Menu = require('../pageobjects/openMenu');
describe('Check Login Credentials', async()=>{
    it('should login with invalid credentials', async()=>{
        await LoginPage.open();
        await LoginPage.login(LoginData.invalidusername,LoginData.invalidpassword)
        /*let a = await LoginPage.geterrorValue();
        console.log(a)
        expectChai(a).to.equal(LoginData.errormessage1)*/
    })
    it('Should login with Accepted Username', async()=>{
        await LoginPage.open();
        await LoginPage.login(LoginData.username2,LoginData.password)
        /*let b = await LoginPage.geterrorValue();
        console.log(b)
        expectChai(b).to.equal(LoginData.errormessage2)*/
        await LoginPage.open();
        await LoginPage.login(LoginData.username3,LoginData.password)

        await LoginPage.open();
        await LoginPage.login(LoginData.username4,LoginData.password)
    })
    it('should login with valid credentials', async()=>{
        await LoginPage.open();
        await LoginPage.login(LoginData.username1,LoginData.password)
    })
    it('Check functionality of Products dropdown button', async()=>{
        await LoginPage.open();
        await LoginPage.login(LoginData.username1,LoginData.password)
        await LoginPage.wait();
        await HomePage.select();
        await LoginPage.wait();
    })
    it('Check functionality of add to cart and further process', async()=>{
        await LoginPage.open();
        await LoginPage.login(LoginData.username1,LoginData.password)
        await AddToCart.test();
    })
    it('Check functionality of open menu',async()=>{
        await LoginPage.open();
        await LoginPage.login(LoginData.username1,LoginData.password) 
        await Menu.test();
    })
})