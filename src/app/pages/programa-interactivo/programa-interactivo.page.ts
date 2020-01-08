import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
@Component({
  selector: 'app-programa-interactivo',
  templateUrl: './programa-interactivo.page.html',
  styleUrls: ['./programa-interactivo.page.scss'],
})
export class ProgramaInteractivoPage implements OnInit {
  
  fechaE = '';
  contador = 0;
  fecha = new Date();
  dia = this.fecha.getDay();
  year = this.fecha.getFullYear();

  hoy = `${this.dia}/ Enero/ ${this.year}`;
  framework ='';
  framework2 ='';
  framework3='';
  framework4='';
  frameworkEstado='';
  constructor( private pickerCtrl: PickerController) { }

  ngOnInit() {
  }
   async picker(){
    let Opts: PickerOptions={
      buttons:[
        {
          text:'Cancelar',
          role:'cancel'
        },
        {
          text:'Listo'
        }
      ],
      columns:[
        {
          name:'framework',
          options:[
            {text:'TT Intermodal Querétaro',value:'TT Intermodal Querétaro'},
            {text:'TT Intermodal Guadalajara',value:'TT Intermodal Guadalajara'},
            {text:'TT Intermodal Monterrey',value:'TT Intermodal Monterrey'},
            {text:'TT Intermodal Acolman',value:'TT Intermodal Acolman'},
            {text:'TT Intermodal Tuxpan',value:'TT Intermodal Tuxpan'},
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(Opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
      let col = await picker.getColumn('framework');
      this.framework =  col.options[ col.selectedIndex].text;
    });
  }
  async picker2(){
    let Opts: PickerOptions={
      buttons:[
        {
          text:'Cancelar',
          role:'cancel'
        },
        {
          text:'Listo'
        }
      ],
      columns:[
        {
          name:'framework2',
          options:[
            {text:'Carro Tanque',value:'Carro Tanque'},
            {text:'Buque Tanque',value:'Buque Tanque'},
            {text:'Ducto',value:'Ducto'},
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(Opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
      let col = await picker.getColumn('framework2');
      this.framework2=  col.options[ col.selectedIndex].text;
    });
  }
  async picker3(){
    let Opts: PickerOptions={
      buttons:[
        {
          text:'Cancelar',
          role:'cancel'
        },
        {
          text:'Listo'
        }
      ],
      columns:[
        {
          name:'framework3',
          options:[
            {text:'Terminal',value:'Terminal'},
            {text:'Estacion de servicio',value:'Estacion de servicio'},
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(Opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
      let col = await picker.getColumn('framework3');
      this.framework3 =  col.options[ col.selectedIndex].text;
    });
  }

  async picker4(){
    let Opts: PickerOptions={
      buttons:[
        {
          text:'Cancelar',
          role:'cancel'
        },
        {
          text:'Listo'
        }
      ],
      columns:[
        {
          name:'framework4',
          options:[
            {text:'Suministrador',value:'Suministrador'},
            {text:'Cliente',value:'ACliente'},
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(Opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
      let col = await picker.getColumn('framework4');
      this.framework4 =  col.options[ col.selectedIndex].text;
      console.log(this.framework4); 
    });
  }

  async pickerEstado(){
    let Opts: PickerOptions={
      buttons:[
        {
          text:'Cancelar',
          role:'cancel'
        },
        {
          text:'Listo'
        }
      ],
      columns:[
        {
          name:'frameworkEstado',
          options:[
            {text:'Cancelado',value:'Cancelado'},
            {text:'Pendiente',value:'Pendiente'},
            {text:'Activo',value:'Activo'},
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(Opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
      let col = await picker.getColumn('frameworkEstado');
      this.frameworkEstado =  col.options[ col.selectedIndex].text;
      console.log(this.frameworkEstado); 
    });
  }
  
  genera_tabla(){
    this.contador ++;
    console.log(this.contador);   
    document.getElementById("wraped").insertRow(-1).innerHTML=`<td>${this.contador}</td><td>producto</td><td>M3.</td><td>${this.framework3}</td><td>${this.fechaE}</td><td>turno</td><td>PMX20000</td><td>1</td><td>20,000</td><td>${this.framework2}</td><td>${this.framework}</td><td>ESTIMADO</td><td>${this.frameworkEstado}</td><td>EL EMBARQUE SOBREPASA EL LIMITE DE LA TERMINAL</td>`
    
  }
}