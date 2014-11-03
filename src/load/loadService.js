angular.module('load', ['firebase', 'newNote']);

angular.module('load')
  .service('load', ['$firebase', '$rootScope', 'render', function($firebase, $rootScope, render) {
    var x2js = new X2JS();
    var xmlDoc = xmlFileLoader("src/load/xmlData/brainspaceBizData.xml");
    var vastJson = x2js.xml2json(xmlDoc);
    var brainspaceNotesArr = vastJson.root.node;
    console.log(xmlDoc);
    console.log(vastJson);
    var $notesScope = $rootScope.$new();

    var ref = new Firebase('https://brainspace-biz.firebaseio.com/');

    var notesRef = ref.child('notes2');
    var groupsRef = ref.child('groups2');
    
    var notesCollection = $firebase(notesRef).$asObject();
    var groupsCollection = $firebase(groupsRef);



    this.forEach = function(callback) {
      for(var i = 0; i < brainspaceNotesArr.length; i++) {
        callback(brainspaceNotesArr[i].name.value, brainspaceNotesArr[i].x.value, brainspaceNotesArr[i].y.value);
      }
    };

    notesCollection.$loaded().then(function() {
      angular.forEach(notesCollection, function(note, key) {
        // console.log(val);
        render.append(note.data.text, note.data.x, note.data.y);
      });
    })

  }]);
