
                       lllllllllllll
                     lllllllllllllllll
                    lllllll´ ill  lllll
                   llllllll  lll :llllll
                   llllllll  ll. lllllllL
                   llll             lllll
                   lllllll  lll .llllllll
                   llll             lllll
                   llllll. lll  llllllll
                   llllll  lli ;lllllll
                   lllllllllllllllllll
                   llllllllllllllt

                    -=[ decode.hh ]=-

                 Bring your own iconfont
                     Martin Schuhfuss


------


## Worum gehts?

  * iconfonts rocken.

  * es gibt massig fertige iconfonts

  * icomoon etc. erlauben sogar das 
    anpassen und erweitern der fonts


------


## Aber

  * Designers gonna Design.

  * ...und Projekte entstehen nicht über Nacht.


------


Wir wollen iconfonts _schnell_ und _einfach_ ändern können.

So wie wir sie brauchen.

Optimiert. _Automatisch._


------


## introducing `grunt-webfont`


    SVG-Dateien ---> icons.ttf, icons.eot, icons.woff
                \--> icons.css


  * perfekt zum versionieren
  * einfach zu bearbeiten
  * vollautomatisch. 


------


## Was braucht man dafür?

 * als erstes mal [node.js](http://nodejs.org)

 * natürlich [grunt](http://gruntjs.com)

 * einen haufen SVGs
 
 * Das Programm [`ttfautohint`](http://www.freetype.org/ttfautohint/#download)
 
 * Mac/Linux: für optimale Ergebnisse sollte fontforge installiert sein



------


## Installation

  * `npm init`
        legt eine package.json an

  * `npm install --save grunt grunt-webfont`   
        installiert die notwendigen pakete und speichert sie 
        in der package.json

  * `npm install -g grunt-cli`
        installiert den commandline-runner für grunt


------



## Konfiguration

  * `Gruntfile.js`
        angegeben wird nur ein Verzeichnis mit .svg-Dateien,
        der rest geht wie von selbst :)
        
  * Details zu den einzelnen Optionen finden sich auf der
    [github-Seite von grunt-webfont](https://github.com/sapegin/grunt-webfont)


------


## Demo

Im Verzeichnis `demo` findet sich eine lauffähige Demo zum Rumspielen
(ich muss die SVGs aus copyright-gründen leider weglassen, aber
unter [flaticons.com](http://www.flaticon.com/most-downloaded/) 
oder [thenounproject.com](http://thenounproject.com/) lässt sich sowas schnell zusammensuchen).

Zum Ausprobieren einfach im demo-Verzeichnis `npm install` ausführen, die
svg-files in `assets/icons` abladen und `grunt` laufen lassen.

Der Einfachheit halber wird dabei auch gleich ein Webserver gestartet, 
der nach dem Aufruf von grunt unter der URL [http://localhost:3001/styles/icons.html]() 
erreichbar sein sollte.