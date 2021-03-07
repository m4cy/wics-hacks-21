
function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const Snowflake = props => {
    return /*#__PURE__*/(
      React.createElement("p", { className: "Snowflake", id: `item${props.id}`, style: props.style }, "*"));
  
  
  
  };
  
  class Snow extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "snow",
      () => {
        let animationDelay = '0s';
        let fontSize = '100px';
        let arr = Array.from('The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ');
        return arr.map((el, i) => {
          animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
          fontSize = `${Math.floor(Math.random() * 10) + 10}px`;
          let style = {
            animationDelay,
            fontSize };
  
          return /*#__PURE__*/React.createElement(Snowflake, { key: i, id: i, style: style });
        });
      });}
  
    render() {
      return /*#__PURE__*/(
        React.createElement("div", { className: "App" },
        this.snow()));
  
  
    }}
  
  
  
  //************************************
  ReactDOM.render( /*#__PURE__*/
  React.createElement(Snow, null),
  document.getElementById('root'));

  var source = "snowmusic.mp3";
var audio = new Audio(); // use the constructor in JavaScript, just easier that way
audio.addEventListener("load", function() {
  audio.play();
}, true);
audio.src = source;
audio.autoplay = true; // add this

document.getElementById('audio').play();
