import { SpeedDial } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items with text only
var items = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
];

// Initialize the SpeedDial control
let speedDial: SpeedDial = new SpeedDial({
    items: items,
    target: '#targetElement',
    cssClass: 'speeddial-position'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');