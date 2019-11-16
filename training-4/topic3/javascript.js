var demoElement = document.getElementById('demo');         
var javascriptIntroduction = () => {
    var demoInner = 'Hello JavaScript';
    demoElement.innerHTML = demoInner;
}
var changeStyleHtml = () => {
        var demoFontsize = '35px';
        demoElement.style.fontSize = demoFontsize;
}
var hideHtmlElement = () => {
        var demoDisplay = 'none';
        demoElement.style.display = demoDisplay;
}
var showHtmlElement = () => {
        var demoStyle = 'block';
        demoElement.style.display = demoStyle;
}