/* global describe, it */

(function () {
    'use strict';
    var x2js = new X2JS();

    describe('xmlFileLoader', function() {
      var xmlDoc = xmlFileLoader("../tests/xmlExampleFiles/brainspaceNodeExample.xml");
      console.log(xmlDoc);
      var vastJson = x2js.xml2json(xmlDoc);
      console.log(vastJson);
      // describe('basic xml string to xml document', function() {
      //   var node = '<node id="5">  \
      //     <data key="name">BrainSpace</data>  \
      //     <data key="gender">...website coming soon!</data>  \
      //     <data key="X">183</data>  \
      //     <data key="Y">-8162</data>  \
      //     <data key="anchor">true</data>  \
      //     <data key="image">data/images/BrainSpace5.jpg</data>  \
      //     <data key="imageThumbnail">data/images/BrainSpace5Thumbnail.jpg</data>  \
      //     <data key="aggregate">0 1 2 3 4 5 6 8 9 10 11 12 13 </data>  \
      //     <data key="font">56</data>  \
      //     <data key="webAddress"></data>  \
      //     <data key="fillColor">default color</data>  \
      //     <data key="aggShape">rectangle</data>  \
      //     <data key="aggSize">null</data>  \
      //     <data key="aggColor">(none)</data>  \
      //     <data key="imageSize">120</data>  \
      //     <data key="scaleSize">-1</data>  \
      //   </node>';
      // });
    });
})();
