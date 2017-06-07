'use strict'

describe('angularjs contact page', function() {
  it('should check page', function() {
    browser.get('http://localhost:8080');
    expect(browser.getCurrentUrl()).toContain('/contacts');
    expect(browser.getTitle()).toEqual('Test AngularJS');
    /*var imputId =  element(by.id('id'));
    imputId.sendKeys('Coucou');
    expect(imputId.toEqual('Coucou'));*/


  });
});

describe('angularjs add contact page', function(){
  it('should add contact', function() {
    $('body > div > ui-view:nth-child(2) > div > button').click();
    expect(browser.getCurrentUrl()).toContain('/contacts/add');

    var firstName = $('#firstName');
    var lastName = $('#lastName');
    var email = $('#email');
    var cellphone = $('#cellphone');

    firstName.sendKeys('Alban');
    lastName.sendKeys('Leau');
    email.sendKeys('alban.leau@modisfrance.fr');
    cellphone.sendKeys('0123456789');

    $('#contactForm > div.form-group.centered > button.submit.btn.btn-primary.ng-binding').click();
    expect(browser.getCurrentUrl()).toContain('/contacts');

    browser.sleep(20000);
    var lastItem = element.all(by.repeater('contact in contacts')).last();
    //lastItem.element(by)

  });
});
