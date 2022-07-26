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

function encyptMessage(message, scrKey) {
  const splitMessage = message.split("");
  const splitKey = scrKey.split("");
  let encryptedMsg = [];

  const result = splitMessage.map((el, idx) => {
    return (
      // prettier-ignore
      characters.indexOf(el.toUpperCase()) + characters.indexOf(splitKey[idx].toUpperCase())
    );
  });
  // prettier-ignore
  for (let i = 0; i < result.length; i++) encryptedMsg.push(characters.at(result[i]));
  let encryptedMsgStr = encryptedMsg.join("");
  console.log(encryptedMsgStr);
}
encyptMessage("ababab", "cdcdcd");
// // Decrypt error logic and events
// // prettier-ignore
// const decryptBtn = document.querySelector(".decrypt").addEventListener("click", () => {
//   let messageContent = message.value;
//   let secredCodeContent = secredCode.value;

//   if(messageContent && secredCodeContent) {
//     resultMsg.textContent = "Your decrypted message:"
//   } else {
//     if (messageContent.length <= 0 && secredCodeContent.length <= 0) {
//       return error.textContent = "All fields are required!";
//     }
//     if (messageContent && secredCodeContent.length <= 0) {
//       return error.textContent = "Please entere the secred key!";
//     }
//     if (secredCodeContent && messageContent.length <= 0) {
//       return error.textContent = "Please entere your message!";
//     }
//   }
// });

// function decryptMessage(message, scrKey) {
//   const splitMessage = message.split("");
//   const splitKey = scrKey.split("");

//   const result = splitKey.map((elem, idx) => {
//     return (
//       // prettier-ignore
//       characters.indexOf(elem.toUpperCase()) + characters.indexOf(scrKey[idx].toUpperCase())
//     );
//   });
//   console.log(result);
// }
// decryptMessage("abcabc", "accdca");
