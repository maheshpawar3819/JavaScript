function Stopwatch() {
  let start,
    end,
    duration = 0;

  this.start = function () {
    start = new Date();
    console.log("Stopwatch started.");
  };

  this.stop = function () {
    end = new Date();
    let seconds = (end.getTime() - start.getTime()) / 1000;
    duration += seconds;
    console.log("Stopwatch stopped.");
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

let stpwatch = new Stopwatch();

stpwatch.start();
setTimeout(() => {
  stpwatch.stop();
  console.log("Duration:", stpwatch.duration);
}, 3000);
