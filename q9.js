class Device{
  constructor(name,type,status){
    this.name=name;
    this.type=type;
    this.status=status;
  }
 }
 Device.prototype.method= function(Book){
   console.log("device to be:"this.status)
 }
 class Smarthome {
  constructor(owner,devices){
    this.owner=owner;
    this.Device=[];
    
  }
 }
  class Smartdevice extends Smarthome {
  constructor(brand,connectivity){
    this.brand=brand;
    this.connectivity=connectivity;
    
  }
 }
 Smartdevice.prototype.updateFirmware= function(){
   if(this.connectivity){
     console.log("connected");
   }else {
     console.log("Not connected");
   }
}
 class Smartlight extends Smartdevice {
  constructor(brand,connectivity){
    this.brand=brand;
    this.connectivity=connectivity;
    
  }
 }
 class Smartthermostat extends Smarthome {
  constructor(brand,connectivity){
    this.brand=brand;
    this.connectivity=connectivity;
    
  }
 }
