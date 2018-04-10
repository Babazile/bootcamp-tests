describe('mostProfitableDepartment' , function(){
    it('must show the most profitable department', function(){
        assert.equal(mostProfitableDepartment('proft'), ' ');
    });
    it('must show the least profitable department', function(){
        assert.equal(mostProfitableDepartment('loss'), ' ');
    });
});
