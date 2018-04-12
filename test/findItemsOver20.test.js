describe('findItemsOver20' , function(){
  var items = [{"name": "teddys", "qty": 30}, {"name": "toys", "qty": 40}, {"name": "cellphones", "qty": 20}, {"name": "laptops", "qty": 32}];
    it("should  give the number of items that are over 20", function(){
        assert.deepEqual(findItemsOver20(items),3);
    });
  it('should return a list of the items  that are over 20', function(){
        assert.deepEqual(findItemsOver20(items), 3);
    });

});
