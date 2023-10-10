import { Injectable } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';

@Injectable({
  providedIn: 'root'
})
export class ShakeService {

  public options = { 
    frequency: 100,
    deviation : 45
  };
  private lastX:number;
  private lastY:number;
  private lastZ:number;
  public show: boolean;

  constructor(private deviceMotion: DeviceMotion) {

  }

  startWatching(){
	return this.deviceMotion.watchAcceleration(this.options).subscribe((acceleration: DeviceMotionAccelerationData) => {
        this.lastX = acceleration.x;
        this.lastY = acceleration.y;
        this.lastZ = acceleration.z;

        let deltaX:number, deltaY:number, deltaZ:number;
        deltaX = Math.abs(acceleration.x);
        deltaY = Math.abs(acceleration.y);
        deltaZ = Math.abs(acceleration.z);

        if(deltaX + deltaY + deltaZ > this.options.deviation) {
          this.show = true;
          return true;
        }
        this.show = false;
        return false;
	});
  }


}
