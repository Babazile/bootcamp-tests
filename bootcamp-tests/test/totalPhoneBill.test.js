describe('totalPhoneBill' , function(){
    it('should return the total cost for calls', function(){
        assert.equal(totalPhoneBill('call, call'), 'R5.50');
    });
    it('should return the total cost for smsTotal', function(){
        assert.equal(totalPhoneBill('sms, sms, sms'), 'R1.95');
    });
});
