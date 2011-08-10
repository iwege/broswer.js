// ==========================================================================
// Thanks for SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

(function(){

	var _detectBrowser = function(userAgent, language) {
	  var version, webkitVersion, browser = {};

	  var userAgent = (userAgent || navigator.userAgent).toLowerCase();
	  var platform = (platform || navigator.platform).toLowerCase();	 
	  var language = language || navigator.language || navigator.browserLanguage;
	  // is mobile browser !!(agent.match(/(iPhone|iPod|blackberry|android 0.5|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i));
	  // is tablet agent.match(/(iPad|SCH-I800|xoom|kindle|meego)/i
	  // Gibberish at the end is to determine when the browser version is done
	  version = browser.version = (userAgent.match( /.*(?:rv|chrome|webkit|opera|ie)[\/: ](.+?)([ \);]|$)/ ) || [])[1];
	  webkitVersion = (userAgent.match( /webkit\/(.+?) / ) || [])[1];

	  /**
	    @name browser.isWindows
	    @type Boolean
	  */
	  browser.windows = browser.isWindows = !!/windows/.test(userAgent);

	  /**
	    @name browser.isMac
	    @type Boolean
	  */
	  browser.mac = browser.isMac = !!/macintosh/.test(userAgent) || (/mac os x/.test(userAgent) && !/like mac os x/.test(userAgent));

	  /**
	    @name browser.isiPhone
	    @type Boolean
	  */
	  browser.iPhone = browser.isiPhone = !!/iphone/.test(userAgent);

	  /**
	    @name browser.isiPod
	    @type Boolean
	  */
	  browser.iPod = browser.isiPod = !!/ipod/.test(userAgent);

	  /**
	    @name browser.isiPad
	    @type Boolean
	  */
	  browser.iPad = browser.isiPad = !!/ipad/.test(userAgent);

	  /**
	    @name browser.isiOS
	    @type Boolean
	  */
	  browser.iOS = browser.isiOS = browser.iPhone || browser.iPod || browser.iPad;

	  /**
	    @name browser.isAndroid
	    @type Boolean
	  */
	  browser.android = browser.isAndroid = !!/android/.test(userAgent);

	  /**
	    @name browser.opera
	    @type String
	  */
	  browser.opera = /opera/.test(userAgent) ? version : 0;

	  /**
	    @name browser.isOpera
	    @type Boolean
	  */
	  browser.isOpera = !!browser.opera;

	  /**
	    @name browser.msie
	    @type String
	  */
	  browser.msie = /msie/.test(userAgent) && !browser.opera ? version : 0;

	  /**
	    @name browser.isIE
	    @type Boolean
	  */
	  browser.isIE = !!browser.msie;

	  /**
	    @name browser.isIE8OrLower
	    @type Boolean
	  */
	  browser.isIE8OrLower = !!(browser.msie && parseInt(browser.msie, 10) <= 8);

	  /**
	    @name browser.mozilla
	    @type String
	  */
	  browser.mozilla = /mozilla/.test(userAgent) && !/(compatible|webkit|msie)/.test(userAgent) ? version : 0;

	  /**
	    @name browser.isMozilla
	    @type Boolean
	  */
	  browser.isMozilla = !!browser.mozilla;

	  /**
	    @name browser.webkit
	    @type String
	  */
	  browser.webkit = /webkit/.test(userAgent) ? webkitVersion : 0;

	  /**
	    @name browser.isWebkit
	    @type Boolean
	  */
	  browser.isWebkit = !!browser.webkit;

	  /**
	    @name browser.chrome
	    @type String
	  */
	  browser.chrome = /chrome/.test(userAgent) ? version: 0;

	  /**
	    @name browser.isChrome
	    @type Boolean
	  */
	  browser.isChrome = !!browser.chrome;

	  /**
	    @name browser.mobileSafari
	    @type String
	  */
	  browser.mobileSafari = /apple.*mobile/.test(userAgent) && browser.iOS ? webkitVersion : 0;

	  /**
	    @name browser.isMobileSafari
	    @type Boolean
	  */
	  browser.isMobileSafari = !!browser.mobileSafari;

	  /**
	    @name browser.iPadSafari
	    @type String
	  */
	  browser.iPadSafari = browser.iPad && browser.isMobileSafari ? webkitVersion : 0;

	  /**
	    @name browser.isiPadSafari
	    @type Boolean
	  */
	  browser.isiPadSafari = !!browser.iPadSafari;

	  /**
	    @name browser.iPhoneSafari
	    @type String
	  */
	  browser.iPhoneSafari = browser.iPhone && browser.isMobileSafari ? webkitVersion : 0;

	  /**
	    @name browser.isiPhoneSafari
	    @type Boolean
	  */
	  browser.isiPhoneSafari = !!browser.iphoneSafari;

	  /**
	    @name browser.iPodSafari
	    @type String
	  */
	  browser.iPodSafari = browser.iPod && browser.isMobileSafari ? webkitVersion : 0;

	  /**
	    @name browser.isiPodSafari
	    @type Boolean
	  */
	  browser.isiPodSafari = !!browser.iPodSafari;

	  /**
	    @name browser.isiOSHomeScreen
	    @type Boolean
	  */
	  browser.isiOSHomeScreen = browser.isMobileSafari && !/apple.*mobile.*safari/.test(userAgent);

	  /**
	    @name browser.safari
	    @type String
	  */
	  browser.safari = browser.webkit && !browser.chrome && !browser.iOS && !browser.android ? webkitVersion : 0;

	  /**
	    @name browser.isSafari
	    @type Boolean
	  */
	  browser.isSafari = !!browser.safari;
	  /**
	    @name browser.blackberry
	    @type Boolean
	  */
	  browser.blackberry = !!/blackberry/.test(userAgent);
	  /**
	    @name browser.linux
	    @type Boolean
	  */
	  browser.linux = !!/linux/.test(userAgent);
	  /**
	    @name browser.meego
	    @type Boolean
	  */
	  browser.meego = !!/meego/.test(userAgent) || !!/arora/.test(userAgent);
	 /**
	    @name browser.nokia
	    @type Boolean
	  */
	  browser.nokia = !!/nokia/.test(userAgent);
	 /**
	    @name browser.uc
	    @type Boolean
	  */
	  browser.uc = !!/ucweb/.test(userAgent);

	 /**
	    @name browser.xoom
	    @type Boolean
	  */
	  browser.xoom = !!/xoom/.test(userAgent);
	 /**
	    @name browser.kindle
	    @type Boolean
	  */
	  browser.kindle = !!/kindle/.test(userAgent);
	
	  browser.
	
	  /**
	    @name browser.language
	    @type String
	  */
	  browser.language = language.split('-', 1)[0];

	  /**
	    Possible values:

	      - 'msie'
	      - 'mozilla'
	      - 'chrome'
	      - 'safari'
	      - 'opera'
	      - 'mobile-safari'
	      - 'unknown'

	    @name browser.current
	    @type String
	    @default 'unknown'
	  */
	  browser.current = browser.msie ? 'msie' : browser.mozilla ? 'mozilla' : browser.chrome ? 'chrome' : browser.safari ? 'safari' : browser.opera ? 'opera' : browser.mobileSafari ? 'mobile-safari' : browser.android ? 'android' : 'unknown';
	  return browser;
	};


	/** @class

	  Contains information about the browser environment that SproutCore
	  is running in. String properties, such as `browser.webkit` or
	  `browser.msie`, will have a value that represents the browser build
	  number if that browser is being used. Otherwise, they will have a
	  falsey value. For convenience, Boolean counterparts for all of the
	  versioned properties are provided.

	  @since SproutCore 1.0
	*/
	window.browser = _detectBrowser();
});