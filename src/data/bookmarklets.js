export const bookmarklets = [
  {
    id: 0,
    name: 'Raise Fields',
    script: () => {
      overlayId = 'bg-overlay';
      stylesheetID = 'fieldPopperStylesheet';
      if (document.getElementById(stylesheetID)) {
        var stylesheet = document.getElementById(stylesheetID);
        var bgOverlay = document.getElementById(overlayId);
        [stylesheet, bgOverlay].forEach((element) => {
          element.remove();
        });
        return;
      }
      var formFieldFontFamily = 'monospace';
      var formFieldFontSize = '12px';
      var buttonFontSize = '20px';
      var formElementOutline = 'solid 2px #000';
      var gutterWidth = '20px';
      var formFieldTop = '200px';
      var formFieldHeight = '600px';
      var buttonHeight = '40px';
      var bgOverlay = document.createElement('div');
      bgOverlay.setAttribute('id', overlayId);
      var stylesheet = document.createElement('style');
      stylesheet.setAttribute('id', stylesheetID);
      stylesheet.innerHTML =
        '#MetabdMjYiaagYS0saaac9wbF0Nivp,' +
        '#Metacd5BgiaagYboUaaada6fs3Q7Tq,' +
        'button[name="apply"]' +
        '{' +
        'position: absolute;' +
        'z-index: 20;' +
        'outline: ' +
        formElementOutline +
        ';' +
        '}' +
        '#MetabdMjYiaagYS0saaac9wbF0Nivp,' +
        '#Metacd5BgiaagYboUaaada6fs3Q7Tq' +
        '{' +
        'top: ' +
        formFieldTop +
        ';' +
        'height: ' +
        formFieldHeight +
        ';' +
        'width: calc((100% - (' +
        gutterWidth +
        ' * 3)) / 2);' +
        'font-family: ' +
        formFieldFontFamily +
        ';' +
        'font-size: ' +
        formFieldFontSize +
        ';' +
        '}' +
        '#MetabdMjYiaagYS0saaac9wbF0Nivp {' +
        'left: ' +
        gutterWidth +
        ';' +
        '}' +
        '#Metacd5BgiaagYboUaaada6fs3Q7Tq {' +
        'right: ' +
        gutterWidth +
        ';' +
        '}' +
        'button[name="apply"] {' +
        'left: ' +
        gutterWidth +
        ';' +
        'top: calc(' +
        formFieldTop +
        ' + ' +
        formFieldHeight +
        ' + ' +
        gutterWidth +
        ');' +
        'width: calc(100% - (' +
        gutterWidth +
        ' * 2));' +
        'font-size: ' +
        buttonFontSize +
        ';' +
        'height: 3em;' +
        '}' +
        '#bg-overlay {' +
        'position: absolute;' +
        'z-index: 10;' +
        'top: ' +
        formFieldTop +
        ';' +
        'left: 0; right: 0; bottom: 0;' +
        'background: #fff;' +
        '}';
      document.head.appendChild(stylesheet);
      document.body.appendChild(bgOverlay);
      document.getElementById(
        'MetabdMjYiaagYS0saaac9wbF0Nivp'
      ).onfocus = function () {
        this.select();
      };
      document.getElementById(
        'Metacd5BgiaagYboUaaada6fs3Q7Tq'
      ).onfocus = function () {
        this.select();
      };
    },
  },
  {
    id: 1,
    name: 'Bookmarklet 2',
    script: () => {
      console.log('Bookmarklet 2 Test');
    },
  },
  {
    id: 2,
    name: 'Bookmarklet 3',
    script: () => {
      console.log('Bookmarklet 3 Test');
    },
  },
  {
    id: 3,
    name: 'Bookmarklet 4',
    script: () => {
      console.log('Bookmarklet 4 Test');
    },
  },
  {
    id: 4,
    name: 'Bookmarklet 5',
    script: () => {
      console.log('Bookmarklet 5 Test');
    },
  },
  {
    id: 5,
    name: 'Bookmarklet 6',
    script: () => {
      console.log('Bookmarklet 6 Test');
    },
  },
  {
    id: 6,
    name: 'Bookmarklet 7',
    script: () => {
      console.log('Bookmarklet 7 Test');
    },
  },
  {
    id: 7,
    name: 'Bookmarklet 8',
    script: () => {
      console.log('Bookmarklet 8 Test');
    },
  },
];
