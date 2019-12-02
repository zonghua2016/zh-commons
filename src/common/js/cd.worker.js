self.onmessage = function (e) {
  const timer = setInterval(() => {
    let now = Date.now(),
      end = e.data.end,
      leftTime = end - now;
    if (leftTime > 0) {
      self.postMessage({
        leftTime
      });
    } else {
      clearInterval(timer);
      self.postMessage({
        leftTime: 0
      });
      self.close();
    }
  }, 60)
}
