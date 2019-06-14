console.log("Hi from index.js");
// $.ajax({
//   url: 'products.json',
//   type: 'get',
//   dataType: 'json',
//   error: function(data){
//   },
//   success: function(data){
//         processData(data);
//       }
//   });
var k = "children";
var mData = new Map(Object.entries(JSON.parse(data)));
// mData.forEach(function(value, key) {
//   console.log(key + ' = ' + value);
//   console.log(mData.size);
  
// });
readData(mData);

function readData(myMap){
  myMap.forEach(function(value, key) {
    console.log(key + ' = ' + value);
    var mMap = _.keyBy(value, o => o.key);
  
    //console.log(value.entries);
    if(mMap.size>0){
      readData(mMap);
    }else{
      console.log(key);
    }
  });
}

processData(JSON.parse(data));

  function processData(mydata){
    
var tbl = document.getElementById("my_table");

var globalIndex = 0;

// for (let i = 0; i < mydata.children.length; i++) {
//     const element1 = mydata.children[i];
//     console.log(element1.name);

//     for (let j = 0; j < element1.children.length; j++) {
//         const element2 = element1.children[j];
//         console.log(element2.name);

//         for (let k = 0; k < element2.children.length; k++) {
//             const element3 = element2.children[k];
//             console.log(element3.name);

//             var row = tbl.insertRow();
//             row.insertCell(0).innerHTML = globalIndex;
//             row.insertCell(1).innerHTML = element1.name;
//             row.insertCell(2).innerHTML = element2.name;
//             let index = 3;
//             for (const key in element3) {
//                 console.log(key);

//                 var cell = row.insertCell(index);
//                 if (element3.hasOwnProperty(key)) {
//                     const element = element3[key];
//                     cell.innerHTML = element;
//                 }
//                 index++;
//             }
//             globalIndex++;
//         }
//     }
// }
  }


$(document).ready(function(){
    $("#a2").on("click", function() {
      //var value = $(this).val().toLowerCase();
      $("#my_table tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

function filter(a){
    if(a.id === "a1"){

    }else if(a.id === "a2"){

    }else if(a.id === "a3"){

    }else {

    }
}
