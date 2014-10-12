angular.module('load', []);

angular.module('load')
  .service('load', [function() {
    var x2js = new X2JS();
    var xmlDoc = xmlFileLoader("src/load/xmlData/brainspaceBizData.xml");
    var vastJson = x2js.xml2json(xmlDoc);
    console.log(xmlDoc);
    console.log(vastJson);

  this.forEach = function() {

  };

  }]);
