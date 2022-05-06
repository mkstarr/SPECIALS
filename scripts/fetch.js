async function getAndProcessHTML(fetchFilePath, querySelectorID, replaceKey){
  //var result = await fetch(fetchFilePath, {method:'POST'}).then(response => response.text()).then(data => replaceHTML(querySelectorID, replaceKey, data)).catch(err => console.log('error: ' + err));
  var result = await fetch(fetchFilePath, {method:'POST'}).then(response => response.text()).then(data => displayHTML(querySelectorID, data)).catch(err => console.log('error: ' + err));
  return result;
}

function replaceHTML(querySelectorID, replaceKey, data){
  console.log("Calling replaceHTML()...");
  console.log("querySelectorID: " + querySelectorID);
  var querySelectorIDFull = "\#" + querySelectorID;
  console.log("#querySelectorID: " + "\#" + querySelectorID);
  console.log("querySelectorIDFull: " + querySelectorIDFull);
  console.log("$(querySelectorIDFull): " + $(querySelectorIDFull));
  console.log("$(querySelectorIDFull).html(): " + $(querySelectorIDFull).html());
  console.log("$(querySelectorIDFull).innerHTML: " + $(querySelectorIDFull).innerHTML);
  console.log("document.getElementById(querySelectorID): " + document.getElementById(querySelectorID));
  console.log("document.getElementById(querySelectorID).innerHTML: " + document.getElementById(querySelectorID).innerHTML);
  
  console.log("replaceKey: " + replaceKey);
  replaceKeyFull = "\{\{"+replaceKey+"\}\}";
  console.log("replaceKeyFull: " + replaceKeyFull);

  console.log("data: " + data);

  //$(querySelectorID).innerHTML = $(querySelectorID).innerHTML.replace("\{\{page content\}\}", data); // Doesn't work b/c $() fetches inner HTML of queried element to start with.
  document.getElementById(querySelectorID).innerHTML = document.getElementById(querySelectorID).innerHTML.replace(replaceKeyFull, data);
}

function displayHTML(querySelectorID, data){
  console.log("Calling displayHTML()...")
  console.log("querySelectorID: " + querySelectorID);
  var querySelectorIDFull = "\#" + querySelectorID;
  console.log("#querySelectorID: " + "\#" + querySelectorID);
  console.log("querySelectorIDFull: " + querySelectorIDFull);
  console.log("$(querySelectorIDFull): " + $(querySelectorIDFull));
  console.log("$(querySelectorIDFull).html(): " + $(querySelectorIDFull).html());
  console.log("$(querySelectorIDFull).innerHTML: " + $(querySelectorIDFull).innerHTML);
  console.log("document.getElementById(querySelectorID): " + document.getElementById(querySelectorID));
  console.log("document.getElementById(querySelectorID).innerHTML: " + document.getElementById(querySelectorID).innerHTML);

  console.log("data: " + data);

  //$(querySelectorID).innerHTML = $(querySelectorID).innerHTML.replace("\{\{page content\}\}", data); // Doesn't work b/c $() fetches inner HTML of queried element to start with.
  document.getElementById(querySelectorID).innerHTML = data;
}

var fetchFilePathGlobal;
var querySelectorIDGlobal;
var replaceKeyGlobal;

function declareFetchVariables(fetchFilePath, querySelectorID, replaceKey){
  fetchFilePathGlobal = fetchFilePath;
  querySelectorIDGlobal = querySelectorID;
  replaceKeyGlobal = replaceKey;
}
