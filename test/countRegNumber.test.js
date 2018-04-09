describe('countRegNumber' , function(){
    it('the number of regNo should be equal to 3', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('the number of regNo should be equal to  0', function(){
        assert.equal(countRegNumber('CA 182736,CA 523519,CA 812328''CA 182736,CA 523519,CA 812328'), 0);
    });
});
