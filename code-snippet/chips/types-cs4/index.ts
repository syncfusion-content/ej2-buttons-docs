


import { ChipList } from '@syncfusion/ej2-buttons';
new ChipList({chips: ['Send a text', 'Set a remainder', 'Read my emails ', 'Set alarm'],
    click: (e: ClickEventArgs)=>{
       alert('you have clicked ' + e.text)
    } }, '#chip');



