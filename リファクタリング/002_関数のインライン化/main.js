//////////////////////パターンA/////////////////
function rating(aDriver){
    return aDriver.numberOfLateDelivers > 5 ? 2 : 1;
}
//////////////////////////////////////////////////

///////////////////パターンB///////////////////////
function reportLines(aCustomer){
    const lines = [];
    out.push(["name",aCustomer.name]);
    out.push(["location",aCustomer.location]);
    return lines;
}
//////////////////////////////////////////////////
