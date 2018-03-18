/*
 ____                          _            _       _____                                      _
/ ___|    ___   _ __    __ _  | |_    ___  | |__   |  ___|   ___    _ __   _ __ ___     __ _  | |_
\___ \   / __| | '__|  / _` | | __|  / __| | '_ \  | |_     / _ \  | '__| | '_ ` _ \   / _` | | __|
 ___) | | (__  | |    | (_| | | |_  | (__  | | | | |  _|   | (_) | | |    | | | | | | | (_| | | |_
|____/   \___| |_|     \__,_|  \__|  \___| |_| |_| |_|      \___/  |_|    |_| |_| |_|  \__,_|  \__|

*/
// Name of feature, image, and tag letter ( like <s></s> ), name of html tag it creates.
// Remember to add a onclick event for each option.
var options = ["Bold,bold.png,b,b","Italic,italic.png,i,i","Underline,underline.png,u,u"]; 

var commentarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0]; // Comment box
var optionarea = document.getElementsByClassName("control-group tooltip right")[0];

makeIcons();
function makeIcons() {
	optionarea.innerHTML = "<div id='scratchformat'></div>" + optionarea.innerHTML;
	var scratchformat = document.getElementById('scratchformat');
	for (var i = 0; i < options.length; i++) {
		var name = options[i].split(",")[0];
		var image = options[i].split(",")[1];
		var t = options[i].split(",")[2];
		var ht = options[i].split(",")[3]; 
		scratchformat.innerHTML += "<img src='https://pufflegamerz.github.io/ScratchFormat/assets2/"+image+"' id='"+name+"' title='"+name+"' class='sf-option'>";
	}
	format();
}
function format() {
	for (var n = 0; n < document.getElementsByClassName('content').length; n++) {
		var comment = document.getElementsByClassName('content')[n].innerHTML;
		for (var i = 0; i < options.length; i++) {
			var t = options[i].split(",")[2];
			var ht = options[i].split(",")[3]; 
			comment = comment.replace("("+t+")","<"+ht+">");
			comment = comment.replace("(/"+t+")","</"+ht+"/>");
		}
		// Special regex options go here
		comment = comment.replace(/\(color=([^\n)]*)\)/g,"<span style='color:$1;'>"); // Replace (color=*color*) with <span style='color:*color*;'>
		comment = comment.replace(/\(\/color\)/g,"</span>"); // Replace (/color) with </span>
		var quotes = ["You can do anything, but not everything. —David Allen","Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. —Antoine de Saint-Exupéry","The richest man is not he who has the most, but he who needs the least. —Unknown Author","You miss 100 percent of the shots you never take. —Wayne Gretzky","Courage is not the absence of fear, but rather the judgement that something else is more important than fear. —Ambrose Redmoon","You must be the change you wish to see in the world. —Gandhi","When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean. —Lin-Chi","The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking. —A. A. Milne","To the man who only has a hammer, everything he encounters begins to look like a nail. —Abraham Maslow","We are what we repeatedly do; excellence, then, is not an act but a habit. —Aristotle"]; // 10 quotes taken from litemind.com/best-famous-quotes/
		comment = comment.replace("_quote_",quotes[Math.floor(Math.random() * quotes.length) + 0]); // Pick a random quote
		document.getElementsByClassName('content')[n].innerHTML = comment;
	}
	// Remember to create an icon for a custom option
	scratchformat.innerHTML += "<img src='https://pufflegamerz.github.io/ScratchFormat/assets2/color.png' id='Color' title='Color' class='sf-option'>";
}
// Option Click Events
document.getElementById("Bold").onclick = function() {
	var t1 = "b"; // Tag
	var textarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    var sel = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    var finText = textarea.value.substring(0, textarea.selectionStart) + '('+t1+')' + sel + '(/'+t1+')' + textarea.value.substring(textarea.selectionEnd);
    textarea.value = finText;
    textarea.focus();
    textarea.selectionEnd = textarea.selectionEnd + 2 + t1.length;
}
document.getElementById("Italic").onclick = function() {
	var t1 = "i"; // Tag
	var textarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    var sel = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    var finText = textarea.value.substring(0, textarea.selectionStart) + '('+t1+')' + sel + '(/'+t1+')' + textarea.value.substring(textarea.selectionEnd);
    textarea.value = finText;
    textarea.focus();
    textarea.selectionEnd = textarea.selectionEnd + 2 + t1.length;
}
document.getElementById("Underline").onclick = function() {
	var t1 = "u"; // Tag
	var textarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    var sel = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    var finText = textarea.value.substring(0, textarea.selectionStart) + '('+t1+')' + sel + '(/'+t1+')' + textarea.value.substring(textarea.selectionEnd);
    textarea.value = finText;
    textarea.focus();
    textarea.selectionEnd = textarea.selectionEnd + 2 + t1.length;
}
document.getElementById("Color").onclick = function() {
	var t1 = "color=red"; // Tag
	var textarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    var sel = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    var finText = textarea.value.substring(0, textarea.selectionStart) + '('+t1+')' + sel + '(/color)' + textarea.value.substring(textarea.selectionEnd); // Gotta modify if a little bit
    textarea.value = finText;
    textarea.focus();
    textarea.selectionEnd = textarea.selectionEnd + 2 + t1.length;
}
// Extra stuff
