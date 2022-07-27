const makeUser = function () {
  return {
    result: [],
    jump: function () {
      /**/
      this.result.push("jumping");
      return this;
    },
    speak: function () {
      /**/
      this.result.push("speaking");
      return this;
    },
    run: function () {
      /**/
      this.result.push("running");
      return this;
    },
    swim: function () {
      /**/
      this.result.push("swiming");
      return this;
    },
    sleep: function () {
      this.result.push("sleeping");
      /**/ return this;
    },
    exec: function () {
      /**/
      if (this.result.length === 0) {
        this.result.push("");
      }
      this.result.join(", ");
      console.log(this.result);
    },
  };
};
const user = makeUser();
user.sleep().swim().speak().jump().swim().sleep().run().run().exec();
