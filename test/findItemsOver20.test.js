describe('findItemsOver20' , function(){
    it('should return the number of items that are over 20', function(){
        assert.equal(findItemsOver20('items'), '0');
    });

    it('should return the number of items that are less than 20', function(){
        assert.equal(findItemsOver20('items'), '0');
    });
});
