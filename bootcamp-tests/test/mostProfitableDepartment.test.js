describe('mostProfitableDepartment' , function(){
    it('must show the most profitable department', function(){
        assert.equal(mostProfitableDepartment('proft'), ' ');
    });
    it('must show the non-profitable department', function(){
        assert.equal(mostProfitableDepartment('lost'), ' ');
    });
});
