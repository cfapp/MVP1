angular.module('crossFitApp.services', [])

.factory('PersonalBest', function() {

  var lifts = [{
    id: 0,
    name: 'Back Squat',
    history: [{
      date: '01.01.2015',
      weight: 80
    },
    {
      date: '07.01.2015',
      weight: 85
    }]
  },
  {
    id: 1,
    name: 'Front Squat'
  },
  {
    id: 2,
    name: 'Deadlift'
  },
  {
    id: 3,
    name: 'Power Clean'
  },
  {
    id: 4,
    name: 'Power Snatch'
  },
  {
    id: 5,
    name: 'Snatch'
  },
  {
    id: 6,
    name: 'Thruster'
  },
  {
    id: 7,
    name: 'Overhead Squat'
  },
  {
    id: 8,
    name: 'Shoulder/strict press'
  },
  {
    id: 9,
    name: 'Push Press'
  },
  {
    id: 10,
    name: 'Push Jerk'
  },
  {
    id: 10,
    name: 'Clean & Jerk'
  },
  {
    id: 10,
    name: 'Bench Press'
  }
  ];


return {
  all: function() {
    return lifts;
  },
  get: function(liftId) {
      for (var i = 0; i < lifts.length; i++) {
        if (lifts[i].id === parseInt(liftId)) {
          return lifts[i];
        }
      }
      return null;
    }
};

});
