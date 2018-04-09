describe('transportFee' , function(){
    it('should return the total cost for the morning shift', function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return the total cost for the afternoon shift', function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should return the total cost for the night shift', function(){
        assert.equal(transportFee('nightshift'), 'free');
    });

});
