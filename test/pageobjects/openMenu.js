const Page = require('./page');
var chai = require('chai')
var assert = chai.assert;
const Locators = require('../../ConfigData/locators');
const Login = require('./loginPage');
const LoginData = require('../../ConfigData/logindata');
class OpenMenu extends Page {
    get menuLink() {
        return $('//*[text()="Open Menu"]')
    }
    get allItemsLink() {
        return $('//*[text()="All Items"]')
    }
    get aboutLink() {
        return $('//*[text()="About"]')
    }
    get logoutLink() {
        return $('//*[text()="Logout"]')
    }
    get resetAppStatteLink() {
        return $('//*[text()="Reset App State"]')
    }
    async test() {
        await this.menuLink.click();

        let logout = await this.logoutLink;
        logout.click();
        let cd = await super.get_Title();
        assert.equal(cd, "Swag Labs")

        Login.login(LoginData.username1, LoginData.password)


        let a = await this.aboutLink;
        if (a.isClickable) {
            a.click();
        } else {
            assert.equal(false)
        }
    }

}
module.exports = new OpenMenu();