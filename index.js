// Code your solution in this file!

 let drivers=['Antonia', 'Nuru', 'Amari', 'Mo'];

  const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers=function(drivers){
    return drivers.slice(drivers.length-2,drivers.length);
  }
  const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(multiplier) {
    return function (fare) {
      return multiplier * fare;
    };
};

  const fareDoubler = createFareMultiplier(2)
  const fareTripler = createFareMultiplier(3)
  fareDoubler(fare);
  fareTripler(fare);

    function selectDifferentDrivers(drivers, selectingFunction) {
        return selectingFunction(drivers);
  };