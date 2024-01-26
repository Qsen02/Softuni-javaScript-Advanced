function encodeAndDecodeMessages() {
    let sender = document.querySelector("textarea[placeholder='Write your message here...']");
    let receiver = document.querySelector("textarea[placeholder='No messages...']");
    let buttons = document.querySelectorAll("button");
    let btnsArray = Array.from(buttons);
    btnsArray.forEach(btn => btn.addEventListener("click", endcodeAndDecode));

    function endcodeAndDecode(event) {
        let target = event.currentTarget;
        if (target.textContent == "Encode and send it") {
            let inputMessage = sender.value;
            let encodedMsg = ""
            for (let char of inputMessage) {
                let code = char.charCodeAt();
                code++;
                char = String.fromCharCode(code);
                encodedMsg += char;
            }
            receiver.value = encodedMsg;
            sender.value = "";
        } else if (target.textContent == "Decode and read it") {
            let inputMessage = receiver.value;
            let encodedMsg = ""
            for (let char of inputMessage) {
                let code = char.charCodeAt();
                code--;
                char = String.fromCharCode(code);
                encodedMsg += char;
            }
            receiver.value = encodedMsg;
        }
    }
}