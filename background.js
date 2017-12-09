/* Hello! You found the magical file of ScratchFormat! Feel free to take a peek around the source code. :D
  ____                          _            _       _____                                      _
 / ___|    ___   _ __    __ _  | |_    ___  | |__   |  ___|   ___    _ __   _ __ ___     __ _  | |_
 \___ \   / __| | '__|  / _` | | __|  / __| | '_ \  | |_     / _ \  | '__| | '_ ` _ \   / _` | | __|
  ___) | | (__  | |    | (_| | | |_  | (__  | | | | |  _|   | (_) | | |    | | | | | | | (_| | | |_
 |____/   \___| |_|     \__,_|  \__|  \___| |_| |_| |_|      \___/  |_|    |_| |_| |_|  \__,_|  \__|

To-do List:
> Color
*/
var version = "7.0";
// Feature removed by ST
console.log("Loaded ScratchFormat " + version);
var divs = document.getElementsByClassName('content');
// ScratchFormat Syntax
if (location.href.includes("https://scratch.mit.edu/users/") || location.href.includes("https://scratch.mit.edu/projects/") || location.href.includes("https://scratch.mit.edu/studios/")) { //  Detect all places with comments.
    document.getElementById('footer').innerHTML += "<div id='chooser' style='display:none;width:600px; height:450px; border: 1px solid black; border-radius: 5px;position:fixed;top:50px;left:250px;background-color:white;'> <center> <div> <h1 style='display:table-cell;'>Choose a picture:</h1> </div> <img id='scratchcat' src='https://pufflegamerz.github.io/ScratchFormat/assets/scratchcat.svg'> <img id='gobo' src='https://pufflegamerz.github.io/ScratchFormat/assets/gobo.svg'> <img id='pico' src='https://pufflegamerz.github.io/ScratchFormat/assets/pico.svg'> <img id='nano' src='https://pufflegamerz.github.io/ScratchFormat/assets/nano.svg'><img id='tera' src='https://pufflegamerz.github.io/ScratchFormat/assets/tera.svg'><img id='giga' src='https://pufflegamerz.github.io/ScratchFormat/assets/giga.svg'><img id='customimage' src='https://pufflegamerz.github.io/ScratchFormat/assets/custom.svg'><br><br><button id='cancel-picture'>Cancel</button></center></div>";
    var commentarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
    document.getElementsByClassName("control-group tooltip right")[0].innerHTML += "I agree to the <a href='http://scratchformat.usa.cc/termsandservice/' target='_blank'>ScratchFormat terms and service.</a>";
    document.getElementsByClassName("control-group tooltip right")[0].innerHTML = "<div id='scratchFormatTools' style='width: 500px; height: 20px; border-radius: 3px; border: 1px solid lightgrey; background-color: white; margin-bottom: 6px;'><img class='toolitem' id='bold' width='20' src='https://pufflegamerz.github.io/ScratchFormat/assets/bold.png' title='Bold'><img class='toolitem' src='https://pufflegamerz.github.io/ScratchFormat/assets/italic.png' id='italic' title='Italics' width='20'><img class='toolitem' src='https://pufflegamerz.github.io/ScratchFormat/assets/underline.png' title='Underlined' id='underline' width='19'><img class='toolitem' src='https://pufflegamerz.github.io/ScratchFormat/assets/strike.png' title='Strikethrough' id='strike' width='20'><img class='toolitem' src='https://pufflegamerz.github.io/ScratchFormat/assets/sub.png' width='20' title='Subheading' id='sub'><img class='toolitem' src='https://pufflegamerz.github.io/ScratchFormat/assets/big.png' title='Heading' width='20' id='big'><img class='toolitem' id='mark' src='https://pufflegamerz.github.io/ScratchFormat/assets/mark.png' title='Highlight' width='20'><img class='toolitem' id='color' src='https://pufflegamerz.github.io/ScratchFormat/assets/color.png' title='Color' width='19'><img class='toolitem' id='link' width='20' src='https://pufflegamerz.github.io/ScratchFormat/assets/link.png' title='Hyperlink'><img class='toolitem' src='https://pufflegamerz.github.io/ScratchFormat/assets/picture.png' title='Picture' id='picture' width='20'></div>" + document.getElementsByClassName("control-group tooltip right")[0].innerHTML;
    setInterval(function() {
        divs = document.getElementsByClassName('content');
    }, 10);
    setInterval(function() {
        [].slice.call(divs).forEach(function(div) {
            var commentcontent = div.innerHTML;
            // ScratchFormat
            var scratchformat = commentcontent.replace("scratch_format", "<img src='http://scratchformat.usa.cc/logo.png' width='25'>");
            // Version
            var username = scratchformat.replace("_username_", document.getElementsByClassName('user-name dropdown-toggle')[0].innerHTML.match(">(.*?)<")[1]);
            // Quote
            var quotes = ["You can do anything, but not everything. —David Allen","Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. —Antoine de Saint-Exupéry","The richest man is not he who has the most, but he who needs the least. —Unknown Author","You miss 100 percent of the shots you never take. —Wayne Gretzky","Courage is not the absence of fear, but rather the judgement that something else is more important than fear. —Ambrose Redmoon","You must be the change you wish to see in the world. —Gandhi","When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean. —Lin-Chi","The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking. —A. A. Milne","To the man who only has a hammer, everything he encounters begins to look like a nail. —Abraham Maslow","We are what we repeatedly do; excellence, then, is not an act but a habit. —Aristotle"]; // 10 quotes taken from litemind.com/best-famous-quotes/
            var quote = username.replace("_quote_",quotes[Math.floor(Math.random() * quotes.length) + 0]);
            // Bold
            var bold1 = quote.replace("(b)", "<b>");
            var bold2 = bold1.replace("(/b)", "</b>");
            // Italics
            var italics1 = bold2.replace("(i)", "<i>");
            var italics2 = italics1.replace("(/i)", "</i>");
            // Links
            var la = italics2.replace("(link)", "");
            var lb = la.replace("(/link)", "");
            var link1 = italics2.replace("(link)", "<a>");
            var link2 = link1.replace("(/linktarget='_newtab' id='link' href='" + lb + "'>");
            // Underline
            var underline1 = link2.replace("(u)", "<u>");
            var underline2 = underline1.replace("(/u)", "</u>");
            // Strike
            var strike1 = underline2.replace("(s)", "<del>");
            var strike2 = strike1.replace("(/s)", "</del>");
            // Heading
            var big1 = strike2.replace("(big)", "<h1 style='font-size:25px;margin:0px;line-height:25px;'>");
            var big2 = big1.replace("(/big)", "</h1>");
            // Sub Heading
            var sub1 = big2.replace("(small)", "<h3 style='margin:0;'>");
            var sub2 = sub1.replace("(/small)", "</h3>");
            // Image
            var ib = sub2.substring(sub2.lastIndexOf("(img)"), sub2.lastIndexOf("(/img)"));
            ib = ib.replace("(img)", "");
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
            var image1 = sub2.replace("(img)" + ib + "(/img)", "<img src='" + image + "'>");
            // Mark
            var mark1 = image1.replace("(h)", "<mark>");
            var mark2 = mark1.replace("(/h)", "</mark>");
            // Color
            var colors = ["red","orange","yellow","green","blue","indigo","voilet","black","cyan","gold","white","random"]
            var color = mark2;
            for (var i = 0; i < colors.length; i++) {
                if (colors[i] == "random") {
                    var chars = "0123456789ABCDEF";
                    var color1 = "#";
                    for (var o = 0; o < 6; o++) {
                        var random = chars[Math.floor(Math.random() * chars.length) + 0];
                        color1 = color1 + random;
                    }
                    color = color.replace("(random)","<span style='color:"+color1+";'>");
                    color = color.replace("(/random)","</span>");
                }
                color = color.replace("("+colors[i]+")","<span style='color:"+colors[i]+";'>");
                color = color.replace("(/"+colors[i]+")","</span>");
            }
            div.innerHTML = color;

        });
    }, 500);

    // Toolbar cursor
    for (var p = 0; p < 10; p++) {
        document.getElementsByClassName("toolitem")[p].style.cursor = "pointer";
    }
    // Define Button Clicks for WYSIWYG Editor
    // Code borrowed and modified from vs.nut.cc/n (shortened url)
    document.getElementById('bold').onclick = function() {
        var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
        // code from vs.nut.cc/n
        var start = txtarea.selectionStart;
        var end = txtarea.selectionEnd;
        var sel = txtarea.value.substring(start, end);
        var finText = txtarea.value.substring(0, start) + '(b)' + sel + '(/b)' + txtarea.value.substring(end);
        txtarea.value = finText;
        txtarea.focus();
        txtarea.selectionEnd = end + 3;
    };
    document.getElementById('strike').onclick = function() {
        var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
        // code from vs.nut.cc/n
        var start = txtarea.selectionStart;
        var end = txtarea.selectionEnd;
        var sel = txtarea.value.substring(start, end);
        var finText = txtarea.value.substring(0, start) + '(s)' + sel + '(/s)' + txtarea.value.substring(end);
        txtarea.value = finText;
        txtarea.focus();
        txtarea.selectionEnd = end + 3;
    };
    document.getElementById('underline').onclick = function() {
        var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
        // code from vs.nut.cc/n
        var start = txtarea.selectionStart;
        var end = txtarea.selectionEnd;
        var sel = txtarea.value.substring(start, end);
        var finText = txtarea.value.substring(0, start) + '(u)' + sel + '(/u)' + txtarea.value.substring(end);
        txtarea.value = finText;
        txtarea.focus();
        txtarea.selectionEnd = end + 3;
    };
    document.getElementById('link').onclick = function() {
        var thelink = prompt("Please paste your link");
        var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
        // code from vs.nut.cc/n
        var start = txtarea.selectionStart;
        var end = txtarea.selectionEnd;
        var sel = txtarea.value.substring(start, end);
        var finText = txtarea.value.substring(0, start) + '(link)' + thelink + '(/link)' + txtarea.value.substring(end);
        txtarea.value = finText;
        txtarea.focus();
        txtarea.selectionEnd = end + 6 + thelink.length;
    };
    document.getElementById('italic').onclick = function() {
        var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
        // code from vs.nut.cc/n
        var start = txtarea.selectionStart;
        var end = txtarea.selectionEnd;
        var sel = txtarea.value.substring(start, end);
        var finText = txtarea.value.substring(0, start) + '(i)' + sel + '(/i)' + txtarea.value.substring(end);
        txtarea.value = finText;
        txtarea.focus();
        txtarea.selectionEnd = end + 3;
    };
    document.getElementById('big').onclick = function() {
        var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
        // code from vs.nut.cc/n
        var start = txtarea.selectionStart;
        var end = txtarea.selectionEnd;
        var sel = txtarea.value.substring(start, end);
        var finText = txtarea.value.substring(0, start) + '(big)' + sel + '(/big)' + txtarea.value.substring(end);
        txtarea.value = finText;
        txtarea.focus();
        txtarea.selectionEnd = end + 5;
    };
    document.getElementById('sub').onclick = function() {
        var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
        // code from vs.nut.cc/n
        var start = txtarea.selectionStart;
        var end = txtarea.selectionEnd;
        var sel = txtarea.value.substring(start, end);
        var finText = txtarea.value.substring(0, start) + '(small)' + sel + '(/small)' + txtarea.value.substring(end);
        txtarea.value = finText;
        txtarea.focus();
        txtarea.selectionEnd = end + 5;
    };
    document.getElementById('mark').onclick = function() {
        var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
        // code from vs.nut.cc/n
        var start = txtarea.selectionStart;
        var end = txtarea.selectionEnd;
        var sel = txtarea.value.substring(start, end);
        var finText = txtarea.value.substring(0, start) + '(h)' + sel + '(/h)' + txtarea.value.substring(end);
        txtarea.value = finText;
        txtarea.focus();
        txtarea.selectionEnd = end + 3;
    };
    document.getElementById('color').onclick = function() {
        var txtarea = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0];
        // code from vs.nut.cc/n
        var color = prompt("Please enter a color.","green");
        var start = txtarea.selectionStart;
        var end = txtarea.selectionEnd;
        var sel = txtarea.value.substring(start, end);
        var finText = txtarea.value.substring(0, start) + "("+color+")"+sel+"(/"+color+")"; + txtarea.value.substring(end);
        txtarea.value = finText;
        txtarea.focus();
        txtarea.selectionEnd = end + 3;
    };
    document.getElementById('cancel-picture').onclick = function() {
        document.getElementById('chooser').style.display = 'none';
    };
    document.getElementById('picture').onclick = function() {
        document.getElementById('chooser').style.display = 'block';
    };
    document.getElementById('scratchcat').onclick = function() {
        document.getElementById('chooser').style.display = 'none';
        document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value = document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value + "(img)cat(/img)";
    };
    document.getElementById('gobo').onclick = function() {
        document.getElementById('chooser').style.display = 'none';
        document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value += "(img)gobo(/img)";
    };
    document.getElementById('nano').onclick = function() {
        document.getElementById('chooser').style.display = 'none';
        document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value += "(img)nano(/img)";
    };
    document.getElementById('tera').onclick = function() {
        document.getElementById('chooser').style.display = 'none';
        document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value += "(img)tera(/img)";
    };
    document.getElementById('pico').onclick = function() {
        document.getElementById('chooser').style.display = 'none';
        document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value += "(img)pico(/img)";
    };
    document.getElementById('giga').onclick = function() {
        document.getElementById('chooser').style.display = 'none';
        document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value += "(img)giga(/img)";
    };
    document.getElementById('customimage').onclick = function() {
        document.getElementById('chooser').style.display = 'none';
        var image = prompt("Please paste your image url.");
        document.getElementsByClassName('control-group tooltip right')[0].getElementsByTagName('textarea')[0].value += "(img)" + image + "(/img)";
    };
}
