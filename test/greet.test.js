describe('greet' , function(){
    it('should greet Babsy', function(){
        assert.equal(greet("Babsy"),"Hello, Babsy");
    });
    it('should return Hello Babsy', function(){
        assert.equal(greet("Janine"), "Hello, Janine");
    });


});
