import {Component} from '@angular/core';

import {Plugins, Capacitor, mergeWebPlugin} from '@capacitor/core';
import {NFCPluginWeb} from 'capacitor-nfc';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

    mergeWebPlugin(Plugins, new NFCPluginWeb());

    const NFC = Plugins.NFC as NFCPluginWeb;

    console.log('NFC available: ', Capacitor.isPluginAvailable('NFC'));

    NFC.showSettings().then((status => {
      console.log('NFC.showSettings resolved', status);
    })).catch((status: any) => {
      console.log('NFC.showSettings rejected', status);
    });
    // } else {
    //   console.log('NFC is not available');
    //  }
  }
}
