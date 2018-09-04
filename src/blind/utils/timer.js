const Timer = {
  _data: {},
  start(key) {
    Timer._data[key] = new Date();
  },
  stop(key) {
    var time = Timer._data[key];
    if(time) {
      Timer._data[key] = new Date() - time;
    }
  },
  getTime(key) {
    return Timer._data[key];
  },
  getFormattedTime(key) {
    return `${key} in ${Timer._data[key]} millionseconds`;
  },
};
export default Timer;
