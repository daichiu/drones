/**
 * Created by h205p2 on 5/24/17.
 */
var pakistan = [];


$(document).ready(function(){
    $.ajax({
        url: 'http://api.dronestre.am/data',
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (result) {
            console.log(result);
            pak(result)
        },
        error: function () {
            alert('Failed!');
        }
    });
});
function pak(result){
    for(var i = 0; i<result.strike.length; i++){
        if(result.strike[i].country==="Pakistan"){
            pakistan.push(result.strike[i])
        }
    }
}

console.log(pakistan);