var utils = require('../../utils');
var createAccountVirtualSuccess = require('./createAccountVirtualSuccess').createAccountVirtualSuccess;

var formId = '#changePasswordForm',
    element = {
        form: formId,
        currentPasswordInput: '#oldpassword',
        newPasswordInput: '#npassword',
        verifyNewPasswordInput: '#npassword2',
        changePasswordButton: '#submit'
    };

module.exports = {

    "changePasswordFail": function (browser) {

        createAccountVirtualSuccess(browser, true);

        browser
            .url(browser.globals.url + '/d/change_password.cgi')
            .waitForElementVisible(element.form, 5000)
            .click(element.changePasswordButton)
            .assert.containsText('body', 'enter a password')
        .end();
    }
};