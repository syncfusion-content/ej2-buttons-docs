ej.base.enableRipple(true);

var items = [
    {
        text: 'Edit'
    },
    {
        text: 'Delete'
    },
    {
        text: 'Mark as Read'
    },
    {
        text: 'Like Message'
    }];

//To position the icon to the left of the text on a DropDownButton.
var drpDownBtn = new ej.splitbuttons.DropDownButton({iconCss: 'ddb-icons e-message', items: items}, '#iconbutton');

var drpDownBtn = new ej.splitbuttons.DropDownButton({iconCss: 'ddb-icons e-message', items: items, iconPosition: 'Top'}, '#iconpstn');

