describe('yearsAgo' , function(){
    it('should state how many years ago' , function(){
        assert.equal(yearsAgo("1994"),24);
    });
    it('should return ' , function(){
        assert.equal(yearsAgo(""),2);
    });

});
