describe('totalPhoneBill' , function(){
    it('should return the total cost for calls', function(){
        assert.equal(totalPhoneBill('call, call'), 'R5.50');
    });
    it('should return the total cost for smsTotal', function(){
        assert.equal(totalPhoneBill('sms, sms, sms'), 'R1.95');
    });
    it('should return the total cost for call and sms', function(){
        assert.equal(totalPhoneBill('sms, sms, sms, call, call'), 'R7.45');
    });
    it('should return cost per call', function(){
        assert.equal(totalPhoneBill('call'), 'R2.75');
    });
    it('should return cost per sms', function(){
        assert.equal(totalPhoneBill('sms'), 'R0.65');
    });
});
