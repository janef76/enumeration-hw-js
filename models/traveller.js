const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  // loop with forEach
  const arrayOfStartLocations = this.journeys.map((journey) => {
    // return journey['startLocation'];
    return journey.startLocation;
  });
  return arrayOfStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const arrayOfEndLocations = this.journeys.map((journey) => {
    // return journey['endLocation'];
    return journey.endLocation;
  });
  return arrayOfEndLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  const arrayOfTransportModes = this.journeys.map((journey) => {
    // return journey['transport'];
    return journey.transport;
  });
  return arrayOfTransportModes;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const arrayOfTransport = this.journeys.filter((journey) => {
    // return journey['transport'] === transport;
    return journey.transport === transport;
  });
  return arrayOfTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const arrayOfMinDistance = this.journeys.filter((journey) => {
    // return journey['distance'] > minDistance;
    return journey.distance > minDistance;
  });
  return arrayOfMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = this.journeys.reduce((runningTotal, journey) => {
    // console.log('runningTotal is...')
    // console.log(runningTotal)
    // return runningTotal + journey['distance'];
    return runningTotal + journey.distance;
  }, 0);
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
const unique = [];
  this.journeys.forEach((journey) => {
    if (unique.indexOf(journey) < 0 ) {
      unique.push(journey.transport);
    }
  });
  return unique;
  // const result = (journeyArr) => {
  //   return this.journeys.filter((elem, pos) => {
  //   return journey.transport.indexOf(elem) == pos;
  //   });
  // // return result;
  // };
}

module.exports = Traveller;
