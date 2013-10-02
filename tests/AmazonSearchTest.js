describe('Amazon Test', function () {

  it('should get a result from the search', function (done) {
    stig.open('/');
    stig.el('#twotabsearchtextbox').type('node.js');
    stig.el('.nav-submit-input').click();
    stig.el('.newaps:first .lrg.bold').text(function (text) {
      console.log('First Result: ' + text);
      assert(text.length > 0);
    });
    stig.run(done);
  });

});