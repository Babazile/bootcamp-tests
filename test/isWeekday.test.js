describe('isWeekday', function(){


    it('should return true', function(){

        assert.equal(isWeekday ('Monday'), true);
      });
      it('should return false', function(){
        assert.equal(isWeekday ('Sunday'), false);
      });

    });
