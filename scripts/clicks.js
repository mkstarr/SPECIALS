console.log("fetchFilePathGlobal: " + fetchFilePathGlobal);
console.log("querySelectorIDGlobal: " + querySelectorIDGlobal);
console.log("replaceKeyGlobal: " + replaceKeyGlobal);

//function show(ID){
    // Using eval
    //var expression = "function show" + ID + "(ID){\n\tvar elementWithID =  document.getElementById(ID);\n\telementWithID.onclick = getAndProcessHTML(eval(fetchFilePathGlobal); + eval(ID); + \".html\", querySelectorIDGlobal, replaceKeyGlobal)\;\n}";
    //var evalExpression = "eval(" + expression + ")\;";
    //console.log("ID: " + ID);
    //console.log("evalExpression:\n" + evalExpression);
    //eval(expression);

    // Using Function
    //return Function('function show' + ID + '(' + ID + '){\n\tconsole.log(\"using Function constructor\");\n\tvar elementWithID =  document.getElementById(' + ID + ');\n\telementWithID.onclick = getAndProcessHTML(fetchFilePathGlobal' + ID + '.html, querySelectorIDGlobal, replaceKeyGlobal);\n}(' + ID + ');');

    // Using window[]
    //window[ID]
//}

var links = [
    {"ID": "Catalog"},
    {"ID": "Orders"},
    {"ID": "Purchase"},
    {"ID": "Reviews"},
    {"ID": "Contact"}
];

for(var i in links){
    console.log("i: " + i);
    console.log("links[i]: " + links[i]);
    console.log("links[i].ID: " + links[i].ID);
    ID = links[i];
    console.log("ID: " + ID);
    links[i].run = function(ID){
        console.log("ID inside function : " + ID);
        console.log("ID.ID.html inside function : " + ID.ID + ".html");
        var elementWithID = document.getElementById(ID.ID);
        console.log("elementWithID : " + elementWithID);
        console.log("fetchFilePathGlobal + ID : " + fetchFilePathGlobal + ID);
        console.log("fetchFilePathGlobal + ID : " + fetchFilePathGlobal + ID.ID);
        elementWithID.onclick = function(){
            getAndProcessHTML(fetchFilePathGlobal + ID.ID + ".html", querySelectorIDGlobal, replaceKeyGlobal);
            console.log(ID.ID + " clicked");
        }
    }
    console.log("links[i].run: " + links[i].run);
    
    links[i].run(ID);

    //show(links[i]);
}