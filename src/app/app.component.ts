import { Component } from '@angular/core';
import { MdIconRegistry } from '@angular/material';


require('!!style!css!../assets/css/site.css');
require('!!style!css!../assets/css/deeppurple-amber.css');

@Component({
  selector: 'ngh-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
    constructor(registry: MdIconRegistry) {
        registry.addSvgIcon('add', 'assets/fonts/material-icons/ic_add_48px.svg');
        registry.addSvgIcon('arrow_back', 'assets/fonts/material-icons/ic_arrow_back_48px.svg');
        registry.addSvgIcon('arrow_forward', 'assets/fonts/material-icons/ic_arrow_forward_48px.svg');
        registry.addSvgIcon('arrow_drop_down', 'assets/fonts/material-icons/ic_arrow_drop_down_white_48px.svg');
        registry.addSvgIcon('arrow_drop_up', 'assets/fonts/material-icons/ic_arrow_drop_up_white_48px.svg');
        registry.addSvgIcon('close', 'assets/fonts/material-icons/ic_close_48px.svg');
        registry.addSvgIcon('date_range', 'assets/fonts/material-icons/ic_date_range_48px.svg');
        registry.addSvgIcon('email', 'assets/fonts/material-icons/ic_email_48px.svg');
        registry.addSvgIcon('filter_list', 'assets/fonts/material-icons/ic_filter_list_48px.svg');
        registry.addSvgIcon('location_on', 'assets/fonts/material-icons/ic_location_on_48px.svg');
        registry.addSvgIcon('menu', 'assets/fonts/material-icons/ic_menu_48px.svg');
        registry.addSvgIcon('more_vert', 'assets/fonts/material-icons/ic_more_vert_48px.svg');
        registry.addSvgIcon('people', 'assets/fonts/material-icons/ic_people_48px.svg');
        registry.addSvgIcon('person', 'Assets/fonts/material-icons/ic_person_black_48px.svg');
        registry.addSvgIcon('phone', 'assets/fonts/material-icons/ic_phone_48px.svg');
        registry.addSvgIcon('phone_android', 'assets/fonts/material-icons/ic_phone_android_48px.svg');
        registry.addSvgIcon('print', 'assets/fonts/material-icons/ic_print_48px.svg');
        registry.addSvgIcon('refresh', 'assets/fonts/material-icons/ic_refresh_48px.svg');
        registry.addSvgIcon('search', 'assets/fonts/material-icons/ic_search_48px.svg');       
    }
}