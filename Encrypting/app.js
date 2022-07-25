//prettier-ignore
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
const message = document.querySelector(".message");
const secredCode = document.querySelector(".secred_code");
const resultMsg = document.querySelector(".result-msg");
const error = document.querySelector(".error");

// prettier-ignore
const encrytBtn = document.querySelector(".encrypt").addEventListener("click", () => {
    let messageContent = message.value;
    let secredCodeContent = secredCode.value;

    // Error logic
    if (messageContent && secredCodeContent) {
      resultMsg.textContent = "Your encrypted message:"

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

function encyptMessage(message, secredKey) {
  console.log("It's working!");
}
