'use strict';

function Trail(data) {
  const placeholder = 'https://i.imgur.com/iaV1Lp0.jpg';
  let httpRegex = /^(http:\/\/)/g

  this.name = data.name ? data.name : 'No name available';
  this.summary = data.summary ? data.summary : 'No summary available';
  this.trail_id = data.id;
  this.difficulty = data.difficulty === 'green' || data.difficulty === 'greenBlue' ? 'Easy' : data.difficulty === 'blue' ? 'Intermediate' : data.difficulty === 'blueBlack' ? 'Hard' : 'Expert';
  this.stars = data.stars ? data.stars : '';
  this.imgURL = data.imgSmallMed ? data.imgSmallMed.replace(httpRegex, 'https://') : data.imgURL ? data.imgURL : placeholder;
  this.latitude = data.latitude;
  this.longitude = data.longitude;
  this.length = data.length ? data.length : 'No length available';
  this.conditionStatus = data.conditionStatus ? data.conditionStatus : 'No condition status available';
  this.conditionDetails = data.conditionDetails ? data.conditionDetails : 'No condition details';
}

module.exports = Trail;