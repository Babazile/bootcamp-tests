describe('fromWhere' , function(){
    it('should return true if the regNo is for Paarl', function(){
        assert.equal(fromWhere('CJ 5353'),true);
    });
    it('should return false if the regNo is not for Paarl', function(){
        assert.equal(fromWhere('CY 65779'), false);
    });
});
