describe('isFromBellville' , function(){
    it('it should return true if it is from Bellville' , function(){
        assert.equal(isFromBellville("CY 233433"), true);
    });
    it('it should return false false if it is not from Bellville' , function(){
        assert.equal(isFromBellville('CJ 233433', 'CA  15355', 'CA 8999', 'CJ 46436'), false);
    });
});
