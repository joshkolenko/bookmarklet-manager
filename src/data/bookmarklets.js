export const bookmarklets = [
  {
    id: 0,
    name: 'Raise fields',
    type: 'toggle',
    script: () => {
      if (!document.getElementById('MetabdMjYiaagYS0saaac9wbF0Nivp')) {
        console.error('Field elements not found');
        return;
      }
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
    name: 'Add to cart',
    type: 'button',
    script: () => {
      let siteProducts = [
        {
          site: 'batesfootwear',
          products: [
            '018467178460',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'catfootwear',
          products: [
            '044212694756',
            '044209045301',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'chacos',
          products: [
            '195018019943',
            '194917714317',
            '194917716335',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'grasshoppers',
          products: [
            '646881792346',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'harleydavidson',
          products: [
            '801100854872',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'hushpuppies',
          products: [
            '018471487688',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'hytest',
          products: [
            '720026826858',
            '677338182984',
            '886129869625',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'keds',
          products: [
            '044209486319',
            '044212330623',
            '635841735035',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'merrell',
          products: [
            '018473519158',
            '044211035628',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'onlineshoes',
          products: [
            '884401339224',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'prokeds',
          products: [
            '677338675110',
            '044214235414',
            '044209581014',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'saucony',
          products: [
            '194713687082',
            '195017087837',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'sperry',
          products: [
            '044213779216',
            '883799273943',
            '044213922247',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
        {
          site: 'wolverine',
          products: [
            '884506080878',
            '646881846360',
            '098771691398',
            '884506082124',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ],
        },
      ];

      let myHost = location.hostname;
      let mySite = myHost.replace('www.', '').replace('.com', '');
      if (mySite.indexOf('demandware.net') > -1) {
        /* staging, dev, standbox site */
        let myDWSite,
          myDWSiteArray = location.href.match(
            /\/\w+_us/g
          ); /* return anything with a slash (/) followed by a word character one ore more times (plus sign) followed by underscore "us" ("_us"). */
        if (myDWSiteArray.length) {
          myDWSite = myDWSiteArray[0];
        } else {
          let errMsg = 'Not a US site;';
          alert(errMsg);
          exit;
        }
        myHost = `${myHost}/s${myDWSite}`;
        mySite = myDWSite.replace('/', '').replace('_us', '');
      }

      /* match site with siteProducts item */
      for (let _siteProd of siteProducts) {
        if (_siteProd.site === mySite) {
          /* build URL from site objects's products) */
          let hydrationProducts = '';
          for (let _prod of _siteProd.products) {
            hydrationProducts += `${_prod}^`;
          }
          hydrationURL = `https://${myHost}/en/emailyourcart?pids=${hydrationProducts}`;
          console.log(hydrationURL);
          /* jQuery ajax call to hydration url */
          $.ajax({
            url: hydrationURL,
            success: function (result) {
              if (location.href.match(/\/en\/cart/g)) {
                /* you are in cart currently, so refresh the page */
                location.reload();
              } else {
                /* not on cart currenlty, prompt to take you there */
                let bGoToCart = confirm('You got products!\n\nGo to Cart?');
                if (bGoToCart) {
                  location.href = `https://${myHost}/en/cart`;
                }
              }
            },
          });
          break;
        }
      }
    },
  },
  {
    id: 2,
    name: 'Get category ID',
    type: 'button',
    script: () => {
      try {
        alert(dataLayer[2].product_category_id);
      } catch {
        console.error('Could not find dataLayer');
      }
    },
  },
  {
    id: 3,
    name: 'Copy category ID',
    type: 'button',
    script: () => {
      try {
        $pci = findInDataLayer('product_category_id');
        $temp = $('<input>');
        $('body').append($temp);
        $temp.val($pci === '' ? 'UNDEFINED' : $pci).select();
        document.execCommand('copy');
        $temp.remove();
      } catch {
        console.error('Could not find dataLayer');
      }
    },
  },
  {
    id: 4,
    name: 'Insert category banner',
    type: 'button',
    script: () => {
      var $catBannerLocation = $('.content-slot.slot-grid-header');
      if ($catBannerLocation.length) {
        /* Used with categoryProductHits template */
        $catBannerLocation.append('<h1>CAT-BANNER SLOT</h1>');
        return;
      }
      var $slotBannerLocation = $('.cat-landing > div:first-of-type');
      if ($slotBannerLocation.length) {
        var slotBannerMarkup = '<h1>CAT-LANDING-SLOTBANNER SLOT</h1>';
        if ($slotBannerLocation.hasClass('landing-topbanner-box')) {
          /* landing-topbanner-box used in these templates: A, B, C, D, F, U, W, X, Y, Z*/
          $slotBannerLocation.append(slotBannerMarkup);
        } else {
          /* For the rest of the rendering templates just insert at top of .cat-landing */
          $slotBannerLocation.before(slotBannerMarkup);
        }
      }
    },
  },
  {
    id: 5,
    name: 'Configure slot',
    type: 'button',
    script: () => {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://aarondake.name/dw-slot-config.js';
      document.getElementsByTagName('head')[0].appendChild(script);
    },
  },
  {
    id: 5,
    name: 'Clear dwsid',
    type: 'button',
    script: () => {
      document.cookie = 'dwsid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    },
  },
];
