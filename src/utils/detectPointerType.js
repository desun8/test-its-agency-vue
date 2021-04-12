// скоплириванный ts

var Pointer;
(function (Pointer) {
  Pointer["Mouse"] = "js-pointer-mouse";
  Pointer["Touch"] = "js-pointer-touch";
})(Pointer || (Pointer = {}));
export default () => {
  let currType = "";
  let prevType = "";
  const getType = (value) => {
    switch (value) {
      case "touch":
        currType = Pointer.Touch;
        break;
      case "mouse":
        currType = Pointer.Mouse;
        break;
      default:
        currType = "";
    }
  };
  const setHtmlCLass = () => {
    if (currType !== prevType) {
      if (prevType !== "") {
        document.documentElement.classList.remove(prevType);
      }
      if (currType !== "") {
        document.documentElement.classList.add(currType);
      }
    }
    prevType = currType;
  };
  const removeHandle = () => {
    window.removeEventListener("pointermove", handlePointerMove, false);
  };
  const handlePointerMove = (event) => {
    getType(event.pointerType);
    setHtmlCLass();
    setTimeout(removeHandle, 0);
  };
  window.addEventListener("pointermove", handlePointerMove, false);
};
