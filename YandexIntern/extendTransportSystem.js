class MotherShip {
    static warehouse = [];
}

function extendTransportSystem(EarthRoute, MoonRoute) {
    const oldTransfer = EarthRoute.prototype.transfer;

    EarthRoute.prototype.transfer = function(parcel) {
      oldTransfer.apply(this, arguments);
      let clone = {}; 

      for (let key in parcel) {
        clone[key] = parcel[key];
      }
      
      clone.origin = "Earth";
      clone.destination = 'Mothership';

      MotherShip.warehouse.push(clone);
    }
    
    const oldMoonTransfer = MoonRoute.prototype.transfer;
    MoonRoute.prototype.transfer = function(parcel) {
      oldMoonTransfer.apply(this, arguments);
      let clone = {};

      for (let key in parcel) {
        clone[key] = parcel[key];
      }

      clone.origin = "Moon";
      clone.destination = 'Mothership';

      MotherShip.warehouse.push(clone);
    }
    
    return MotherShip.warehouse;
}