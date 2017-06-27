import { Component } from '@angular/core';
import { Geolocation } from 'ionic-native';

declare var alert_dialog;

@Component({
  selector: 'cordova-plugin',
  templateUrl: 'cordova-plugin.html'
})

export class CordovaPlugin{

  constructor(){

  }

  alertDialog(): void{
    var entity=["你好","今天天气如何? \n 不是很好","取消","确定","跳转跳转",1,3];
    alert_dialog.getAlertDialog(null,null,entity);
  }

  getLocation(): void{
    Geolocation.getCurrentPosition().then((resp) => {
      alert("location: " + resp.coords.latitude + " " + resp.coords.longitude);
    })
  }
}
