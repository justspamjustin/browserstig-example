var stig;
var assert = function (bool) {if(!bool) throw new Error('Assertion Failed!');};

mocha.setup({timeout: 30000});

beforeEach(function () {
  stig = new BrowserStig();
});