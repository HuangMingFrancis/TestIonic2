import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Component({
  templateUrl: 'action-sheets.html',
  selector: 'page-action-sheets'
})
export class ActionSheetsPage{
  constructor(public action : ActionSheetController){

  }

  initActionSheets(){
    let actionSheet = this.action.create({
      title: 'testAction',
      buttons:[
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}

