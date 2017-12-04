/* Hello! You found the magical file of ScratchFormat! Feel free to take a peek around the source code. :D
  ____                          _            _       _____                                      _
 / ___|    ___   _ __    __ _  | |_    ___  | |__   |  ___|   ___    _ __   _ __ ___     __ _  | |_
 \___ \   / __| | '__|  / _` | | __|  / __| | '_ \  | |_     / _ \  | '__| | '_ ` _ \   / _` | | __|
  ___) | | (__  | |    | (_| | | |_  | (__  | | | | |  _|   | (_) | | |    | | | | | | | (_| | | |_
 |____/   \___| |_|     \__,_|  \__|  \___| |_| |_| |_|      \___/  |_|    |_| |_| |_|  \__,_|  \__|

To-do List:
> Color
*/
var version = "6.0";
// Feature removed by ST
console.log("Loaded ScratchFormat " + version);
var divs = document.getElementsByClassName('content');
// ScratchFormat Syntax
if (location.href.includes("https://scratch.mit.edu/users/") || location.href.includes("https://scratch.mit.edu/projects/") || location.href.includes("https://scratch.mit.edu/studios/")) { //  Detect all places with comments.
document.getElementById('footer').innerHTML += "<div id='pictureChooser' style='display:none;width:600px; height:450px; border: 1px solid black; border-radius: 5px;position:fixed;top:50px;left:250px;background-color:white;'> <center> <div> <h1 style='display:table-cell;'>Choose a picture:</h1> </div> <img id='scratchcat' src='https://pufflegamerz.github.io/ScratchFormat/assets/scratchcat.svg'> <img id='gobo' src='https://pufflegamerz.github.io/ScratchFormat/assets/gobo.svg'> <img id='pico' src='https://pufflegamerz.github.io/ScratchFormat/assets/pico.svg'> <img id='nano' src='https://pufflegamerz.github.io/ScratchFormat/assets/nano.svg'><img id='tera' src='https://pufflegamerz.github.io/ScratchFormat/assets/tera.svg'><img id='giga' src='https://pufflegamerz.github.io/ScratchFormat/assets/giga.svg'><br><br><button id='cancel-picture'>Cancel</button></center></div>";
var commentarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
document.getElementsByClassName("control-group tooltip right")[0].innerHTML += "I agree to the <a href='http://scratchformat.usa.cc/termsandservice/' target='_blank'>ScratchFormat terms and service.</a>";
document.getElementsByClassName("control-group tooltip right")[0].innerHTML = "<div id='scratchFormatTools' style='width: 500px; height: 20px; border-radius: 3px; border: 1px solid lightgrey; background-color: white; margin-bottom: 6px;'><img id='bold' width='20' src='https://pufflegamerz.github.io/ScratchFormat/assets/bold.png'><img src='https://pufflegamerz.github.io/ScratchFormat/assets/italic.png' id='italic' width='20'><img src='https://pufflegamerz.github.io/ScratchFormat/assets/underline.png' id='underline' width='19'><img src='https://pufflegamerz.github.io/ScratchFormat/assets/strike.png' id='strike' width='20'><img src='https://pufflegamerz.github.io/ScratchFormat/assets/sub.png' width='20' id='sub'><img src='https://pufflegamerz.github.io/ScratchFormat/assets/big.png' width='20' id='big'><img id='link' width='20' src='https://pufflegamerz.github.io/ScratchFormat/assets/link.png'><img src='https://pufflegamerz.github.io/ScratchFormat/assets/picture.png' id='picture' width='20'></div>" + document.getElementsByClassName("control-group tooltip right")[0].innerHTML;
setInterval(function() {
     divs = document.getElementsByClassName('content');
},10);
     setInterval(function() {
         [].slice.call( divs ).forEach(function ( div ) {
        var commentcontent = div.innerHTML;
        // ScratchFormat
        var scratchformat = commentcontent.replace("scratch_format","<img src='http://scratchformat.usa.cc/logo.png' width='25'>");
        // Version
        var version2 = scratchformat.replace("current_version",version);
        // Bold
        var bold1 = version2.replace("(b)","<b>");
        var bold2 = bold1.replace("(/b)","</b>");
        // Italics
        var italics1 = bold2.replace("(i)","<i>");
        var italics2 = italics1.replace("(/i)","</i>");
        // Links
        var la = italics2.replace("(link)","");
        var lb = la.replace("(/link)","");
        var link1 = italics2.replace("(link)","<a>");
        var link2 = link1.replace("(/link)","</a>");
        link2 = link2.replace("<a>","<a target='_newtab' id='link' href='"+lb+"'>");
        // Underline
        var underline1 = link2.replace("(u)","<u>");
        var underline2 = underline1.replace("(/u)","</u>");
        // Strike
        var strike1 = underline2.replace("(s)","<del>");
        var strike2 = strike1.replace("(/s)","</del>");
        // Heading
        var big1 = strike2.replace("(big)","<h1>");
        var big2 = big1.replace("(/big)","</h1>");
        // Sub Heading
        var sub1 = big2.replace("(sub)","<h5>");
        var sub2 = sub1.replace("(/sub)","</h5>");
        // Image
    var ib = sub2.substring(sub2.lastIndexOf("(img)"),sub2.lastIndexOf("(/img)")); 
    ib = ib.replace("(img)","");
    var image;
		if (ib == "cat") {
			image = "https://pufflegamerz.github.io/ScratchFormat/assets/scratchcat.svg";
		} else if (ib == "pico") {
			image = "https://pufflegamerz.github.io/ScratchFormat/assets/pico.svg";
		} else if (ib == "gobo") {
			image = "https://pufflegamerz.github.io/ScratchFormat/assets/gobo.svg";
		} else if (ib == "tera") {
			image = "https://pufflegamerz.github.io/ScratchFormat/assets/tera.svg";
		} else if (ib == "nano") {
			image = "https://pufflegamerz.github.io/ScratchFormat/assets/nano.svg";
		} else if (ib == "giga") {
			image = "https://pufflegamerz.github.io/ScratchFormat/assets/giga.svg";
		} else {
			image = ib;
		}
		var image1 = sub2.replace("(img)"+ib+"(/img)","<img src='"+image+"'>");
    // Use special code to activate links
    //var replacelink = image1.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1">$1</a> ');
    div.innerHTML = image1;

             });
      },500);

// Element Styles
document.getElementById("bold").style.cursor = "pointer";
document.getElementById("link").style.cursor = "pointer";
document.getElementById("picture").style.cursor = "pointer";
document.getElementById("italic").style.cursor = "pointer";
document.getElementById("underline").style.cursor = "pointer";
document.getElementById("strike").style.cursor = "pointer";
document.getElementById("big").style.cursor = "pointer";
document.getElementById("sub").style.cursor = "pointer";
// Define Button Clicks for WYSIWYG Editor
// Code taked and modified from vs.nut.cc/n (shortened url)
document.getElementById('bold').onclick=function(){
    var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    // code from vs.nut.cc/n
  	var start = txtarea.selectionStart;
    var end = txtarea.selectionEnd;
  	var sel = txtarea.value.substring(start, end);
  	var finText = txtarea.value.substring(0, start) + '(b)' + sel + '(/b)' + txtarea.value.substring(end);
  	txtarea.value = finText;
  	txtarea.focus();
  	txtarea.selectionEnd= end + 3;
};
document.getElementById('strike').onclick=function(){
    var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    // code from vs.nut.cc/n
  	var start = txtarea.selectionStart;
    var end = txtarea.selectionEnd;
  	var sel = txtarea.value.substring(start, end);
  	var finText = txtarea.value.substring(0, start) + '(s)' + sel + '(/s)' + txtarea.value.substring(end);
  	txtarea.value = finText;
  	txtarea.focus();
  	txtarea.selectionEnd= end + 3;
};
document.getElementById('underline').onclick=function(){
    var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    // code from vs.nut.cc/n
  	var start = txtarea.selectionStart;
    var end = txtarea.selectionEnd;
  	var sel = txtarea.value.substring(start, end);
  	var finText = txtarea.value.substring(0, start) + '(u)' + sel + '(/u)' + txtarea.value.substring(end);
  	txtarea.value = finText;
  	txtarea.focus();
  	txtarea.selectionEnd= end + 3;
};
document.getElementById('link').onclick=function(){
   var thelink = prompt("Please paste your link");
  var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    // code from vs.nut.cc/n
  	var start = txtarea.selectionStart;
    var end = txtarea.selectionEnd;
  	var sel = txtarea.value.substring(start, end);
  	var finText = txtarea.value.substring(0, start) + '(link)' + thelink + '(/link)' + txtarea.value.substring(end);
  	txtarea.value = finText;
  	txtarea.focus();
  	txtarea.selectionEnd= end + 5;
};
document.getElementById('italic').onclick=function(){
    var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    // code from vs.nut.cc/n
  	var start = txtarea.selectionStart;
    var end = txtarea.selectionEnd;
  	var sel = txtarea.value.substring(start, end);
  	var finText = txtarea.value.substring(0, start) + '(i)' + sel + '(/i)' + txtarea.value.substring(end);
  	txtarea.value = finText;
  	txtarea.focus();
  	txtarea.selectionEnd= end + 5;
};
document.getElementById('big').onclick=function(){
    var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    // code from vs.nut.cc/n
  	var start = txtarea.selectionStart;
    var end = txtarea.selectionEnd;
  	var sel = txtarea.value.substring(start, end);
  	var finText = txtarea.value.substring(0, start) + '(big)' + sel + '(/big)' + txtarea.value.substring(end);
  	txtarea.value = finText;
  	txtarea.focus();
  	txtarea.selectionEnd= end + 5;
};
document.getElementById('sub').onclick=function(){
    var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    // code from vs.nut.cc/n
  	var start = txtarea.selectionStart;
    var end = txtarea.selectionEnd;
  	var sel = txtarea.value.substring(start, end);
  	var finText = txtarea.value.substring(0, start) + '(sub)' + sel + '(/sub)' + txtarea.value.substring(end);
  	txtarea.value = finText;
  	txtarea.focus();
  	txtarea.selectionEnd= end + 5;
};
document.getElementById('cancel-picture').onclick=function(){
  document.getElementById('pictureChooser').style.display = 'none';
};
document.getElementById('picture').onclick=function(){
  document.getElementById('pictureChooser').style.display = 'block';
};
document.getElementById('scratchcat').onclick=function(){
  document.getElementById('pictureChooser').style.display = 'none';
  document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value + "(img)cat(/img)";
};
document.getElementById('gobo').onclick=function(){
  document.getElementById('pictureChooser').style.display = 'none';
  document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value += "(img)gobo(/img)";
};
document.getElementById('nano').onclick=function(){
  document.getElementById('pictureChooser').style.display = 'none';
  document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value += "(img)nano(/img)";
};
document.getElementById('tera').onclick=function(){
  document.getElementById('pictureChooser').style.display = 'none';
  document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value += "(img)tera(/img)";
};
document.getElementById('pico').onclick=function(){
  document.getElementById('pictureChooser').style.display = 'none';
  document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value += "(img)pico(/img)";
};
document.getElementById('giga').onclick=function(){
  document.getElementById('pictureChooser').style.display = 'none';
  document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value += "(img)giga(/img)";
};
}
