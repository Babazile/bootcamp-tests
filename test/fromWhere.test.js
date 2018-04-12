describe('fromWhere' , function(){
    it('if the regNo startsWith CJ it should state that it is from Paarl', function(){
        assert.equal(fromWhere('CJ 5353'), 'Paarl');
    });
    it('if the regNo startsWith CY it should state that it is from Bellville', function(){
        assert.equal(fromWhere('CY 65779'), 'Bellville');
    });
    it('if the regNo startsWith CA it should state that it is from Cape Town', function(){
        assert.equal(fromWhere('CA 65779'), 'Cape Town');
    });
    it('if the regNo does not startsWith CJ, CY, or CA it should return Some other place!', function(){
        assert.equal(fromWhere('DV 65779'), 'Some other place!');
    });
});
