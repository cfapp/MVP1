describe('MockTest', function() {

  beforeEach(function(){
    browser.get('http://localhost:8100');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('WOD');
  });

});