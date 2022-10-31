function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const AddPlayerForm = ({ addPlayer }) => {
  let playerInput = React.createRef();

  let handleSubmit = e => {
    e.preventDefault();
    addPlayer(playerInput.current.value);
    e.currentTarget.reset();
  };

  return /*#__PURE__*/(
    React.createElement("form", { onSubmit: handleSubmit }, /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      placeholder: "Enter a player name",
      ref: playerInput }), /*#__PURE__*/

    React.createElement("input", {
      type: "submit",
      value: "Add Player" })));



};

AddPlayerForm.propTypes = {
  addPlayer: PropTypes.func };

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    {
      players: [
      {
        name: "Johnny Rose",
        score: 0,
        id: 1 },

      {
        name: "Moira Rose",
        score: 0,
        id: 2 },

      {
        name: "David Rose",
        score: 0,
        id: 3 },

      {
        name: "Alexis Rose",
        score: 0,
        id: 4 }] });_defineProperty(this, "prevPlayerId",




    4);_defineProperty(this, "handleScoreChange",

    (index, delta) => {
      this.setState(prevState => ({
        score: prevState.players[index].score += delta }));

    });_defineProperty(this, "highestScore",

    () => {

      // const hello = Math.max.apply(Math, this.state.players.map(o => o.score))
      //const hello = Math.max(...this.state.players.map(o => o.score), 0);
      const hello = this.state.players.reduce((current, prev) => current.score > prev.score ? current : prev).score;
      if (hello) {
        return hello;
      }
    });_defineProperty(this, "handleAddPlayer",

    name => {
      this.setState(prevState => {
        return {
          players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1 }] };



      });
    });_defineProperty(this, "handleRemovePlayer",

    id => {
      this.setState(prevState => {
        return {
          players: prevState.players.filter(p => p.id !== id) };

      });
    });}

  render() {
    const highScore = this.highestScore();

    return /*#__PURE__*/(
      React.createElement("div", { className: "scoreboard" }, /*#__PURE__*/
      React.createElement(Header, {
        players: this.state.players }), ",",

      this.state.players.map((player, index) => /*#__PURE__*/
      React.createElement(Player, {
        name: player.name,
        score: player.score,
        index: index,
        key: player.id.toString(),
        removePlayer: this.handleRemovePlayer,
        id: player.id,
        changeScore: this.handleScoreChange,
        isHighScore: highScore === player.score // is a player's 'score' prop equal to the high score?
      })), /*#__PURE__*/

      React.createElement(AddPlayerForm, { addPlayer: this.handleAddPlayer })));


  }}

const Counter = ({ index, changeScore, score }) => {

  return /*#__PURE__*/(
    React.createElement("div", { className: "counter" }, /*#__PURE__*/
    React.createElement("button", { className: "counter-action decrement", onClick: () => changeScore(index, -1) }, " - "), /*#__PURE__*/
    React.createElement("span", { className: "counter-score" }, score), /*#__PURE__*/
    React.createElement("button", { className: "counter-action increment", onClick: () => changeScore(index, +1) }, " + ")));


};

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func };

const Header = ({ title, players }) => {
  return /*#__PURE__*/(
    React.createElement("header", null, /*#__PURE__*/
    React.createElement(Stats, { players: players }), /*#__PURE__*/
    React.createElement("h1", null, title), /*#__PURE__*/
    React.createElement(Stopwatch, null)));


};

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object) };


Header.defaultProps = {
  title: 'Scoreboard' };

const Icon = props => {
  return /*#__PURE__*/(
    React.createElement("svg", { viewBox: "0 0 44 35", className: props.isHighScore ? 'is-high-score' : null }, /*#__PURE__*/
    React.createElement("path", { d: "M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z", transform: "translate(0 0.301727)" }), /*#__PURE__*/
    React.createElement("rect", { width: "30.4986", height: "3.07759", transform: "translate(6.56987 31.5603)" })));


};

Icon.propTypes = {
  isHighScore: PropTypes.bool };

class Player extends React.PureComponent {











  render() {
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore } =
    this.props;
    return /*#__PURE__*/(
      React.createElement("div", { className: "player" }, /*#__PURE__*/

      React.createElement("span", { className: "player-name" }, /*#__PURE__*/
      React.createElement("button", { className: "remove-player", onClick: () => removePlayer(id) }, "\u2716"), /*#__PURE__*/

      React.createElement(Icon, { isHighScore: this.props.isHighScore }),

      name), /*#__PURE__*/


      React.createElement(Counter, {
        score: score,
        changeScore: changeScore,
        index: index })));




  }}_defineProperty(Player, "propTypes", { changeScore: PropTypes.func, removePlayer: PropTypes.func, name: PropTypes.string.isRequired, id: PropTypes.number.isRequired, score: PropTypes.number, index: PropTypes.number, isHighScore: PropTypes.bool });


const Stats = ({ players }) => {


  const totalPlayers = players.length;
  const totalPoints = players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return /*#__PURE__*/(
    React.createElement("table", { className: "stats" }, /*#__PURE__*/
    React.createElement("tbody", null, /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", null, "Players:"), /*#__PURE__*/
    React.createElement("td", null, totalPlayers)), /*#__PURE__*/

    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", null, "Total Points:"), /*#__PURE__*/
    React.createElement("td", null, totalPoints)))));




};

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number })) };


class Stopwatch extends React.Component {







  constructor() {
    super();_defineProperty(this, "tick",















    () => {
      if (this.state.isRunning) {
        const now = Date.now();
        this.setState(prevState => ({
          previousTime: now,
          elapsedTime: prevState.elapsedTime + (now - this.state.previousTime) }));

      }
    });_defineProperty(this, "handleStopWatch",

    () => {
      this.setState(prevState => ({
        isRunning: !prevState.isRunning }));

      if (!this.state.isRunning) {
        this.setState({
          previousTime: Date.now() });

      }
    });_defineProperty(this, "handleReset",

    () => {
      this.setState({
        elapsedTime: 0 });

    });this.state = { isRunning: false, elapsedTime: 0, previousTime: 0 };}componentDidMount() {this.intervalID = setInterval(() => this.tick(), 100);}componentWillUnmount() {clearInterval(this.intervalID);}

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return /*#__PURE__*/(
      React.createElement("div", { className: "stopwatch" }, /*#__PURE__*/
      React.createElement("h2", null, "Stopwatch"), /*#__PURE__*/
      React.createElement("span", { className: "stopwatch-time" }, seconds), /*#__PURE__*/
      React.createElement("button", { onClick: this.handleStopWatch }, " ", this.state.isRunning ? 'Stop' : 'Start'), /*#__PURE__*/
      React.createElement("button", { onClick: this.handleReset }, "Reset")));


  }}_defineProperty(Stopwatch, "propTypes", { isRunning: PropTypes.bool, elapsedTime: PropTypes.number, previousTime: PropTypes.number });

ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById('root'));