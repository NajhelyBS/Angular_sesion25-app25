import { Component, OnInit } from '@angular/core';
import { Farmacia } from 'src/app/interfaces/interface';
import { FarmaciaService } from 'src/app/services/farmacia.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent  implements OnInit{

  page_actual = 1;
  farmacia!:Farmacia[];

  constructor( private farmaciaservice:FarmaciaService){

  }

  ngOnInit(): void {
    this.farmaciaservice.getFarmacia().subscribe(Farmacia => {
      this.farmacia = Farmacia;
    })
  }

  onClickDelete(farmacia : Farmacia){
    const response = this.farmaciaservice.deleteFarmacia(farmacia);
    console.log(response);
  }

}
