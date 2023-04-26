

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>

            <!-- Essential JS 2 Base's material theme (Dependency Styles) -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 RadioButton's material theme (Control Styles) -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Base's global script (Dependency Script) -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 RadioButton's global script (Control Script) -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>

            <link href="styles.css" rel="stylesheet">
       </head>
       <body>
           <!--element which is going to render-->
            <input type="radio" id="radiobutton1"/>
            <input type="radio" id="radiobutton2"/>
            <script>
                ej.base.enableRipple(true);

                //checked state.
                var radiobutton = new ej.buttons.RadioButton({ label: 'Option 1', name: 'state', checked: true });
                radiobutton.appendTo('#radiobutton1');

                //unchecked state.
                radiobutton = new ej.buttons.RadioButton({ label: 'Option 2', name: 'state' });
                radiobutton.appendTo('#radiobutton2');
            </script>
       </body>
  </html>



