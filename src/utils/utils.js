class Utils {

    static forceArray(data) {
        if(data === undefined)
            return data;
        return (Array.isArray(data)) ? data : [data];
    }

    static orderMetadata(metadata) {
        let orderedMetadata = {};
        Object.keys(metadata).sort(function(keyA, keyB){
            return keyA.toLowerCase().localeCompare(keyB.toLowerCase());
        }).forEach(function (key) {
            orderedMetadata[key] = metadata[key];
            if(metadata[key] && metadata[key].childs && Object.keys(metadata[key].childs).length > 0){
                orderedMetadata[key].childs = Utils.orderMetadata(metadata[key].childs);
            }
        });
        return orderedMetadata;
    }

    static orderSObjects(sObjects) {
        let orderedSObjects = {};
        Object.keys(sObjects).sort(function(keyA, keyB){
            return keyA.toLowerCase().localeCompare(keyB.toLowerCase());
        }).forEach(function (key) {
            orderedSObjects[key] = sObjects[key];
            if(sObjects[key] && sObjects[key].fields && Object.keys(sObjects[key].fields).length > 0){
                orderedSObjects[key].fields = Utils.orderSObjects(sObjects[key].fields);
            }
        });
        return orderedSObjects;
    }
}
module.exports = Utils;