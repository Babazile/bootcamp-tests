describe('countAllPaarl' , function(){
    it('should return the number of Paarl regNo', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
        it('all regNo must be from Paarl', function(){
            assert.equal(countRegNumber('CJ 182736'), true);
        });
});
