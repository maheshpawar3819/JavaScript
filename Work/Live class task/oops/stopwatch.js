// start function, stop function, duration in seconds -> 3.512 s
function Stopwatch() {
  let startTime, endTime, running, duration = 0;
 
  this.start = function() {
    if(running) {
      throw new Error('Stopwatch is already running!');
    }
 
    running = true;
 
    startTime = new Date();
  }
 
  this.stop = function() {
    if(!running) {
      throw new Error('Stopwatch is not yet running');
    }
 
    running = false;
 
    endTime = new Date();
 
    const seconds = (endTime.getTime() - startTime.getTime())/1000;
 
    duration = duration + seconds;
  }
 
  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  }
 
  Object.defineProperty(this, 'duration', {
    get: function() {return duration}
  })
}
 
let sw = new Stopwatch();

/*
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

*/
