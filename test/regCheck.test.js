describe('regCheck' , function(){
    it('it should check the registration number' , function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'), false);
    });
    it('it should return false if the registration number isFromBellville' , function(){
        assert.equal(isFromBellville('CY189-012', 'ND'), true);
    });
});
