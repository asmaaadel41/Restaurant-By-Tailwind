import { Component } from '@angular/core';
import 'tw-elements';
import { faCartShopping, fas , faList, faTruck , faCoffee, faMessage,faClock ,faEnvelope,faLocation,faPhone} from '@fortawesome/free-solid-svg-icons'; //import icon
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant';
  
  faCartShopping = faCartShopping;
  faCaretDown = faCaretDown;
  faList=faList;
  faTruck=faTruck;
  faCoffee=faCoffee;
  faMessage=faMessage;
  faEnvelope=faEnvelope;
  faLocation=faLocation;
  faPhone=faPhone;
  faClock=faClock

  Show: boolean = false;
  toggle() {
    this.Show = !this.Show;
  }
  unToggle() {
    this.Show = false;
  }
}
