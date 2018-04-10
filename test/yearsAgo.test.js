describe('yearsAgo' , function(){
    it('should state how many years ago' , function(){
        assert.equal(yearsAgo(1994),24);
    });
    it('should state the current year' , function(){
        assert.equal(yearsAgo(2018),0);
    });

});
