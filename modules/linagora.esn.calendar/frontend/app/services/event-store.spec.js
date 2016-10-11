'use strict';

/* global chai, sinon, _: false */

var expect = chai.expect;

describe('eventStore', function() {
  var self;

  function createPeriod(start, end) {
    return {
      start: self.fcMoment.utc([2000, 0, start]).stripTime(),
      end: self.fcMoment.utc([2000, 0, end]).stripTime()
    };
  }

  function createEvent(calId, id, start, end) {
    return {
      id: id,
      calendarId: calId,
      start: self.fcMoment.utc([2000, 0, start, 0, 0]),
      end: self.fcMoment.utc([2000, 0, end, 0, 1])
    };
  }

  beforeEach(function() {
    self = this;
    angular.mock.module('esn.calendar');
  });

  beforeEach(angular.mock.inject(function(fcMoment, eventStore) {
    self.eventStore = eventStore;
    self.fcMoment = fcMoment;
  }));

  describe('reset function', function() {
    it('should destroy previously saved event in given calId', function() {
      var event = createEvent('calId', 'a', 2, 2);

      self.eventStore.save(event);
      event.calendarId = 'calId2';
      self.eventStore.save(event);
      self.eventStore.reset('calId');
      expect(self.eventStore.getInPeriod('calId', createPeriod(1, 30))).to.deep.equals([]);
      expect(self.eventStore.getInPeriod('calId2', createPeriod(1, 30))).to.deep.equals([event]);
    });

    it('should destroy previously saved event in all calendar if not cal id given', function() {
      var event = createEvent('calId', 'a', 2, 2);

      self.eventStore.save(event);
      event.calendarId = 'calId2';
      self.eventStore.save(event);
      self.eventStore.reset();
      expect(self.eventStore.getInPeriod('calId', createPeriod(1, 30))).to.deep.equals([]);
      expect(self.eventStore.getInPeriod('calId2', createPeriod(1, 30))).to.deep.equals([]);
    });
  });

  describe('save function', function() {
    it('should properly save an event in his calendar', function() {
      var event = createEvent('calId', 'a', 2, 2);
      var event2 = createEvent('calId2', 'b', 2, 2);

      self.eventStore.save(event);
      self.eventStore.save(event2);
      expect(self.eventStore.getInPeriod('calId', createPeriod(1, 30))).to.deep.equals([event]);
      expect(self.eventStore.getInPeriod('calId2', createPeriod(1, 30))).to.deep.equals([event2]);
    });

    it('should not save twice the same event', function() {
      var event = createEvent('calId', 'a', 2, 2);
      var event2 = createEvent('calId', 'b', 2, 2);

      self.eventStore.save(event);
      self.eventStore.save(createEvent('calId', 'a', 2, 2));
      expect(self.eventStore.getInPeriod('calId', createPeriod(1, 30))).to.deep.equals([event]);

      self.eventStore.save(event2);
      self.eventStore.save(createEvent('calId', 'a', 2, 2));
      expect(_.sortBy(self.eventStore.getInPeriod('calId', createPeriod(1, 30)), 'id')).to.deep.equals(_.sortBy([event, event2], 'id'));
    });
  });

  describe('getInPeriod function', function() {
    it('should obtain all event in period', function() {
      var event1 = createEvent('calId', '1', 13, 15);
      var event2 = createEvent('calId', '2', 15, 15);
      var event3 = createEvent('calId', '3', 13, 18);
      var event4 = createEvent('calId', '4', 14, 14);

      [event1, event2, event3, event4, createEvent('calId', '5', 11, 13), createEvent('calId', '6', 18, 18), createEvent('calId', '7', 13, 13), createEvent('calId', '8', 1, 1)].map(function(event) {
        self.eventStore.save(event);
      });
      expect(_.sortBy(self.eventStore.getInPeriod('calId', createPeriod(14, 17)), 'id')).to.deep.equals([event1, event2, event3, event4].sort());
    });
  });
});