describe('isWeekday', function(){


    it('should return true if it is weekday', function(){

        assert.equal(isWeekday ('Monday'), true);
      });
      it('should return false if it is not a weekday', function(){
        assert.equal(isWeekday ('Sunday'), false);
      });

    });
