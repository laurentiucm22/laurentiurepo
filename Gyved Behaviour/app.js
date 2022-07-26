const makeUser = function () {
  let result = [];
  return {
    jump: function () {
      /**/
      result.push("jumping");
      return this;
    },
    speak: function () {
      /**/
      result.push("speaking");
      return this;
    },
    run: function () {
      /**/
      result.push("running");
      return this;
    },
    swim: function () {
      /**/
      result.push("swiming");
      return this;
    },
    sleep: function () {
      result.push("sleeping");
      /**/ return this;
    },
    exec: function () {
      /**/
      if (result.length === 0) {
        result.push("");
      }
      result.join(", ");
      console.log(result);
    },
  };
};
const user = makeUser();
user.sleep().swim().speak().jump().swim().sleep().run().run().exec();
