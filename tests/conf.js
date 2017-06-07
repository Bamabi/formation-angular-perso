
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/*.js'],
  onPrepare: function(){
    'use strict';
    browser.driver.manage().window().setSize(1200,800);
  };
};
