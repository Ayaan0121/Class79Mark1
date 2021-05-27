studentArray=[];
 
//sumbmit function
function submit(){
    //varibles
    var n1 = document.getElementById("name1").value;
    var n2 = document.getElementById("name2").value;
    var n3 = document.getElementById("name3").value;
    var n4 = document.getElementById("name4").value;
  studentArray.push ( n1 );
  studentArray.push ( n2 );
  studentArray.push ( n3 );
  studentArray.push ( n4 );
  //display
  document.getElementById("display").innerHTML=studentArray;
  //style
  document.getElementById("submitButton").style.display="none";
  document.getElementById("sortButton").style.display="inline-block";
}
//sort function
function sort() {
    //sorting
studentArray.sort();
//display (sorted)
document.getElementById("display").innerHTML=studentArray;
}
 //paly function
 function play12() {
    document.getElementById("play123").play();
 }