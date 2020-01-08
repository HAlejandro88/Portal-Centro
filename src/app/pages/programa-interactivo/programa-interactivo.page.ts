import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
@Component({
  selector: 'app-programa-interactivo',
  templateUrl: './programa-interactivo.page.html',
  styleUrls: ['./programa-interactivo.page.scss'],
})
export class ProgramaInteractivoPage implements OnInit {
  

  fecha = new Date();
  dia = this.fecha.getDay();
  year = this.fecha.getFullYear();

  hoy = `${this.dia}/ Enero/ ${this.year}`;
  framework ='';
  framework2 ='';
  framework3='';
  framework4='';
  
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
            {text:'TT Intermodal Querétaro',value:'A'},
            {text:'TT Intermodal Guadalajara',value:'A'},
            {text:'TT Intermodal Monterrey',value:'A'},
            {text:'TT Intermodal Acolman',value:'A'},
            {text:'TT Intermodal Tuxpan',value:'A'},
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
            {text:'Carro Tanque',value:'A'},
            {text:'Buque Tanque',value:'A'},
            {text:'Ducto',value:'A'},
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
  }async picker3(){
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
            {text:'Terminal',value:'A'},
            {text:'Estacion de servicio',value:'A'},
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
  }async picker4(){
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
            {text:'Suministrador',value:'A'},
            {text:'Cliente',value:'A'},
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(Opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
      let col = await picker.getColumn('framework4');
      this.framework4 =  col.options[ col.selectedIndex].text;
    });
  }


}
