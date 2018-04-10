describe('findItemsOver' , function(){
    it('should return 0 if there are no items that are over ', function(){
        assert.equal(findItemsOver('items'),0);
    });
    it('should return 0 if there are no items that are less ', function(){
        assert.equal(findItemsOver('items'), 0);
    });

});
