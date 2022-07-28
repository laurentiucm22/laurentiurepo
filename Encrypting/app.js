//prettier-ignore
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
const message = document.querySelector(".message");
const secredCode = document.querySelector(".secred_code");
const resultMsg = document.querySelector(".result-msg");
const error = document.querySelector(".error");
const textArea = document.querySelector("#result_textarea");

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
        return error.textContent = "Please entere the secred key!";
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
        characters.indexOf(el.toUpperCase()) + characters.indexOf(splitedKey[index].toUpperCase())
      );
    });
    console.log(indexSum);

    for (let i = 0; i < indexSum.length; i++) {
      newMessage.push(characters[indexSum[i]]);
    }
    let result = newMessage.join("");

    textArea.textContent = result;
  }

  if (splitedMessage.length > splitedKey.length) {
    // find the index of the msg and key

    let keyIdx = splitedKey.map((el) => {
      return characters.indexOf(el.toUpperCase());
    });
    // when the length is bigger then the length of the key increment the key characters and concatenate them to it
    let addToKey = keyIdx.map((el) => {
      return el + 1;
    });

    let shortKeyResult = [...keyIdx, ...addToKey];

    for (let i = 0; i < shortKeyResult.length; i++) {
      newMessage.push(characters[shortKeyResult[i]]);
    }

    let shortResult = newMessage.join("");
    textArea.textContent = shortResult;
  }
}
