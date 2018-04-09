describe('countAllFromTown' , function(){
    it('return a  number of Town regNo', function(){
        assert.equal(countAllFromTown('CA 182736,CY 523519,CJ 812328'),true);
    });
        it('regNo must be from Cape Town', function(){
            assert.equal(countAllFromTown('CA 182736'), true);
        });
});
