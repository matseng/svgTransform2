angular.module('load', []);

angular.module('load')
  .service('load', [function() {
    var x2js = new X2JS();
    var xmlDoc = xmlFileLoader("src/load/xmlData/brainspaceBizData.xml");
    var vastJson = x2js.xml2json(xmlDoc);
    var arr = vastJson.root.node;
    console.log(xmlDoc);
    console.log(vastJson);

    this.forEach = function(callback) {
      for(var i = 0; i < arr.length; i++) {
        callback(arr[i].name.value, arr[i].x.value, arr[i].y.value);
      }
    };

  }]);
