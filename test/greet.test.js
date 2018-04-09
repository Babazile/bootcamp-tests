describe('greet' , function(){
    it('should greet Babsy', function(){
        assert.equal(greet("Babsy"),"hello, Babsy");
    });
    it('should return Hello Babsy', function(){
        assert.equal(greet("Janine"), "hi, Janine");
    });


});
