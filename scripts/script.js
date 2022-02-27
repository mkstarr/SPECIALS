var getHTML = async function (file) {
    /*
    var response = await fetch(file, {method:'POST'});
    var output = await new Promise(response => {return response.text()});
    return output;
    */
    /*
    let response = fetch(file, {method:'POST'});
    let result = await response.then(res => res.text()).then(HTML => {return HTML});
    return result;
    */
    return fetch(file).then(response => response.text());
  };