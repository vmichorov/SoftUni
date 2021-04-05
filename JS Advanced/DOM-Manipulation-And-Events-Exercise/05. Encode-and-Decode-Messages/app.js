function encodeAndDecodeMessages() {
    const btns = Array.from(document.querySelectorAll('button'));
    const textAreas = Array.from(document.querySelectorAll('textarea'));
    for (const btn of btns) {
        btn.addEventListener('click', onClick);
    }

    function onClick(ev) {
        const btnText = ev.target.textContent;
        switch (btnText) {
            case 'Encode and send it':
                const messageToEncode = textAreas[0].value;
                let encoded = '';
                for (let i = 0; i < messageToEncode.length; i++) {
                    let code = messageToEncode.charCodeAt(i);
                    code++;
                    encoded += String.fromCharCode(code);
                }
                textAreas[1].textContent = encoded;
                break;
            case 'Decode and read it':
                const messageToDecode = textAreas[1].value;
                let decoded = '';
                for (let i = 0; i < messageToDecode.length; i++) {
                    let code = messageToDecode.charCodeAt(i);
                    code--;
                    decoded += String.fromCharCode(code);
                }
                textAreas[1].textContent = decoded;
                break;
        }
    }
}