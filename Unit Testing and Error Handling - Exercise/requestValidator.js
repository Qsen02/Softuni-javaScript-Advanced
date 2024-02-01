function validateRequest(inputObject) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let validURI = /^[\w.]+$/;
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let validMessage = /[<>\\&'"]+/;

    if (!validMethods.includes(inputObject.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }
    if (!validURI.test(inputObject.uri) || !("uri" in inputObject)) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!validVersions.includes(inputObject.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    if (validMessage.test(inputObject.message) || !("message" in inputObject)) {
        throw new Error("Invalid request header: Invalid Message");
    }
    return inputObject;
}
console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));