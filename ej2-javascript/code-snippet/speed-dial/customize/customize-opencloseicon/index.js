ej.base.enableRipple(true);

// Initialize action items with text only
var items = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
];

// Initialize the SpeedDial control
var speedDial = new ej.buttons.SpeedDial({
    items: items,
    target: '#targetElement',
    openIconCss: "e-icons speeddial-icon-open",
    closeIconCss: "e-icons speeddial-icon-close"
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');

