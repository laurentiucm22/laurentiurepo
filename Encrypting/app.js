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

// function encyptMessage(message, scrKey) {
//   const splitMessage = message.split("");
//   const splitKey = scrKey.split("");
//   const result = splitKey.map((el, idx) => {
//     // prettier-ignore
//     return characters.indexOf(el.toUpperCase()) + characters.indexOf(splitMessage[idx].toUpperCase());
//   });
//   for (
//     let i = splitMessage.length - splitKey.length;
//     i < splitMessage.length;
//     i++
//   ) {
//     result.push(
//       characters.indexOf(splitMessage[i].toUpperCase()) +
//         characters.indexOf(splitKey[splitKey.length - 1].toUpperCase())
//     );
//   }
//   let text = "";
//   for (let i = 0; i < result.length; i++) {
//     text += characters[result[i]];
//   }
//   textArea.innerHTML = text;
// }

// function encyptMessage(message, scrKey) {
//   const splitMessage = message.split("");
//   const splitKey = scrKey.split("");

//   const result = splitMessage.map((el, idx) => {
//     return (
//       // prettier-ignore
//       characters.indexOf(el.toUpperCase()) + characters.indexOf(splitKey[idx].toUpperCase())
//     );
//   });
//   // prettier-ignore
//   console.log(encryptedMsg);
// }
// encyptMessage("ababab", "cdcdcd");

function encyptMessage(message, scrKey) {
  let splitedMessage = message.split("");
  let splitedKey = scrKey.split("");

  let newMessage = [];

  const indexSum = splitedMessage.map((el, index) => {
    return (
      // prettier-ignore
      characters.indexOf(el.toUpperCase()) + characters.indexOf(splitedKey[index].toUpperCase())
    );
  });

  for (let i = 0; i < indexSum.length; i++) {
    newMessage.push(characters[indexSum[i]]);
  }
  let result = newMessage.join("");

  textArea.textContent = result;
  console.log(result);

  // const indexSum = msgIndex + keyIndex;
}
// encyptMessage("abcabc", "defdef");
