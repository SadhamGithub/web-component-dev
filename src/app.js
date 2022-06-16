import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import SHORTDATEFORM from '@salesforce/i18n/dateTime.shortDateFormat';

export default class App extends LightningElement {
    datetimeVar;
    formattedDate;
    formattedDatet;
  handleDateTime(event){
    var dateVar = new Date();
    if(dateVar.getHours() > 20){
      dateVar = new Date() + 1;
      dateVar.setHours(8);
    }
    else{
      dateVar.setHours(dateVar.getHours() + 1);
    }
    dateVar.setMinutes(0, 0, 0);

    console.log('dateVar:', dateVar);

    var options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false,
    };

   this.formattedDate = new Intl.DateTimeFormat(LOCALE , options).format(dateVar);
//    yyyy-MM-dd HH:mm:ss  
    this.formattedDatet = `${dateVar.getFullYear()}-${dateVar.getMonth() + 1}-${dateVar.getDate()} ${dateVar.getHours()}:${dateVar.getMinutes()}:${dateVar.getSeconds()}`;
  console.log('** '+ this.formattedDatet);
    // const date = new Date();
    //     console.log('** '+ date);

    // const newDate = Date.parse(event.target.value);
    // console.log('** '+ date);
    // console.log('time >> '+ event.target.value);
    // // this.datetimeVar = event.target.value;
    //  this.formattedDate = new Intl.DateTimeFormat(LOCALE , { dateStyle: 'full', timeStyle: 'long' }).format(newDate);
  }
}