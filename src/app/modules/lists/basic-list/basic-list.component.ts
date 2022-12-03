import { Component} from '@angular/core';




export type Producto = {
  name: string,
  price: number,
  description: string
}

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent {
  
  elementsList: Producto[] = [
    {
      name: "Leche",
      price: 24,
      description: "Leche entera"
    },
    {
      name: "Coca",
      price: 28,
      description: "Coca cola 2Lts"
    }
  ];
  charging: boolean = false;
  option: number = 0;
  
  
  changeCharging(){
    this.charging = !this.charging;
  }

  selectOption(option: number){
    this.option = option;
  }

}
