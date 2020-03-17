import {Component} from '@angular/core';

import {mergeWebPlugin, Plugins} from '@capacitor/core';
import {NFCPlugin, NFCPluginWeb} from 'capacitor-nfc';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

    mergeWebPlugin(Plugins, new NFCPluginWeb());

    const NFC = Plugins.NFC as NFCPlugin;

    NFC.showSettings().then((status => {
      console.log('NFC.showSettings resolved', status);
    })).catch((status: any) => {
      console.log('NFC.showSettings rejected', status);
    });
  }
}
