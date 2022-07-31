//prettier-ignore
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
const message = document.querySelector(".message");
const secredCode = document.querySelector(".secred_code");
const resultMsg = document.querySelector(".result-msg");
const error = document.querySelector(".error");
const textArea = document.querySelector("#result_textarea");
const copyBtn = document.querySelector("#copyBtn");

// Ecrypt logic and events
// prettier-ignore
const encrytBtn = document.querySelector(".encrypt").addEventListener("click", () => {
    let messageContent = message.value;
    let secredCodeContent = secredCode.value;

    // Error logic
    if (messageContent && secredCodeContent) {
      resultMsg.textContent = "Your encrypted message"

    } else {
      if (messageContent.length <= 0 && secredCodeContent.length <= 0) {
        return error.textContent = "All fields are required!";
      }
      if (messageContent && secredCodeContent.length <= 0) {
        return error.textContent = "Please entere secred key!";
      }
      if (secredCodeContent && messageContent.length <= 0) {
        return error.textContent = "Please entere your message!";
      }
    }
    encyptMessage(messageContent, secredCodeContent);
  });

function encyptMessage(message, scrKey) {
  let splitedMessage = message.split("");
  let splitedKey = scrKey.split("");

  let newMessage = [];

  if (splitedMessage.length === splitedKey.length) {
    const indexSum = splitedMessage.map((el, index) => {
      return (
        // prettier-ignore
        (characters.indexOf(el.toUpperCase()) + characters.indexOf(splitedKey[index].toUpperCase())) % characters.length
      );
    });

    for (let i = 0; i < indexSum.length; i++) {
      newMessage.push(characters[indexSum[i]]);
    }
    let result = newMessage.join("");

    textArea.textContent = result;
  }

  if (splitedMessage.length > splitedKey.length) {
    // find the index of the msg and key

    let keyIdx = splitedMessage.map((el, index) => {
      console.log("Index", index);
      console.log("Mod", index % splitedKey.length);
      console.log("Length", splitedKey.length);
      return (
        // prettier-ignore
        (characters.indexOf(el.toUpperCase()) + characters.indexOf(splitedKey[index % splitedKey.length].toUpperCase())) % characters.length
      );
    });

    let encrypted = "";

    for (let i = 0; i < keyIdx.length; i++) {
      encrypted = encrypted + characters[keyIdx[i]];

      console.log(characters[keyIdx[i]]);
    }
    textArea.textContent = encrypted;
  }
}

// Decrypt logic and events

// prettier-ignore
const decryptBtn = document.querySelector(".decrypt").addEventListener("click", () => {
  let messageContent = message.value;
  let secredCodeContent = secredCode.value;

    // Error logic
  if (messageContent && secredCodeContent) {
    resultMsg.textContent = "Your decrypted message"

  } else {
    if (messageContent.length <= 0 && secredCodeContent.length <= 0) {
      return error.textContent = "All fields are required!";
    }
    if (messageContent && secredCodeContent.length <= 0) {
      return error.textContent = "Please entere secred key!";
    }
    if (secredCodeContent && messageContent.length <= 0) {
      return error.textContent = "Please entere your message!";
    }
  }
  decryptMessage(messageContent, secredCodeContent);
})

function decryptMessage(message, scrKey) {
  let splitedMessage = message.split("");
  let splitedKey = scrKey.split("");

  let decryptedMsgResult = [];

  if (splitedMessage.length === splitedKey.length) {
    const revMsg = splitedMessage.map((el, index) => {
      return (
        // prettier-ignore
        characters.indexOf(el.toUpperCase()) - (characters.indexOf(splitedKey[index].toUpperCase()) % characters.length)
      );
    });
    for (let i = 0; i < splitedMessage.length; i++) {
      decryptedMsgResult.push(characters[revMsg[i]]);
    }

    let result = decryptedMsgResult.join("");

    textArea.textContent = result;
  }

  if (splitedMessage.length > splitedKey.length) {
    const keyIdx = splitedMessage.map((el, index) => {
      // prettier-ignore
      return (characters.indexOf(el.toUpperCase()) - characters.indexOf(splitedKey[index % splitedKey.length].toUpperCase())) % characters.length
    });

    let decrypted = "";

    for (let i = 0; i < keyIdx.length; i++) {
      decrypted = decrypted + characters[keyIdx[i]];

      console.log(characters[keyIdx[i]]);
    }
    textArea.textContent = decrypted;
  }
}

// Copy btn logic
copyBtn.addEventListener("click", () => {
  textArea.select();
  document.execCommand("copy");
});
