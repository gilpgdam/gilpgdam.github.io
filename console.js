(() => {
  const lo = console.log;
  const err = console.error;
  console.log = (...arguments) => {
    lo.apply(null, arguments);
    const div = document.createElement("div");
    div.textContent = arguments.join(" ");
    document.body.append(div);
  }
  console.error = (...arguments) => {
    err.apply(null, arguments);
    const div = document.createElement("div");
    div.textContent = arguments.join(" ");
    document.body.append(div);
  }
})();
