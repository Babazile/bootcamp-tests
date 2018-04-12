describe('countAllPaarl' , function(){
    it('should return the list of 3 regNo', function(){
        assert.equal(countAllPaarl('CA 182736,CY 523519,CJ 812328'), 1);
    });
        it('should return true if the regNo is from Paarl', function(){
            assert.equal(countAllPaarl('CJ 182736'), true);
        });
});
