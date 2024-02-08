function extensibleObject() {
    let parent = {};
    let childObj = Object.create(parent);

    childObj.extend = function(obj) {
        let entries = Object.entries(obj);
        for (let [key, value] of entries) {
            if (typeof(value) === "function") {
                parent[key] = value;
            } else {
                childObj[key] = value;
            }
        }
    }
    return childObj;
}
let myObj = extensibleObject();
const template = {
    extensionMethod: function() {},
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);