const makeUser = function () {
  return {
    action: "",
    jump: function () {
      /**/
      this.action += "jumping";
      return this;
    },
    speak: function () {
      /**/
      this.action += "speaking";
      return this;
    },
    run: function () {
      /**/
      this.action += "running";
      return this;
    },
    swim: function () {
      /**/
      this.action += "swiming";
      return this;
    },
    sleep: function () {
      /**/
      this.action += "sleeping";
      return this;
    },
    exec: function () {
      /**/
      this.action;
      return this;
    },
  };
};
const user = new makeUser();
// user.sleep().swim().speak().jump().swim().sleep().run().run().exec();

console.log(
  user.sleep().swim().speak().jump().swim().sleep().run().run().exec()
);
