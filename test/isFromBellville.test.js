describe('isFromBellville' , function(){
    it('it should state that it is from Bellville' , function(){
        assert.equal(isFromBellville("CY 233433"), true);
    });
    it('it should state that it is not from Bellville' , function(){
        assert.equal(isFromBellville("CJ 233433"), false);
    });
});
