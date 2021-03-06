var Beacon = (function (){

  var privateData = new WeakMap();

  //Constructor Function
  function Beacon(raw) {
    var privateMembers = {
      uuid: raw.ibeacon.uuid,
      point: raw.id,
      coordinates: {"x": raw.x, "y": raw.y, "z": raw.floorID},
      major: raw.ibeacon.major,
      minor: raw.ibeacon.minor
    };
    privateData.set(this, privateMembers);
  }

  Beacon.prototype.constructor = Beacon;

  Beacon.prototype.getUUID = function(){
    return privateData.get(this).uuid;
  };

  Beacon.prototype.getCoordinates = function(){
    return privateData.get(this).coordinates;
  };

  Beacon.prototype.getPoint = function(){
    return privateData.get(this).point;
  };

  Beacon.prototype.getMajor = function(){
    return privateData.get(this).major;
  };

  Beacon.prototype.getMinor = function(){
    return privateData.get(this).minor;
  };

  Beacon.prototype.destructor = function(){
    privateData.delete(this);
  };

  return Beacon;
}());
