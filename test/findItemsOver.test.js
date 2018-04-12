describe('findItemsOver' , function(){
    it(var items {names= "teddys 38, toys 40, cellphones 20, laptops 32"}, function(){
        assert.equal(findItemsOver('items'),3);
    });
    it('should return 0 if there are no items that are less ', function(){
        assert.equal(findItemsOver('items'), 0);
    });

});
