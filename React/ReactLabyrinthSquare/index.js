
    class Cell extends React.Component{
        render(){
          return(
            <div className={this.props.cls}
            onClick={this.props.onClick}>
            </div>
          );
        }
      }
      class Hint extends React.Component{
        render(){
          return(
            <button className="btn btn-primary"
            onClick={this.props.click} >
              Hint
            </button>
          );
        }
      }

      class Laby extends React.Component{
        
        constructor(props){
          super(props);
          this.state={
            game_cells: 110, //number of all cells in the game
            game_with: 11, //number of cells per row
            Old_position: 0,
            New_position: 0,
            view_path: 0,
            path: [0, 11 ,22 ,23 ,34 ,33 ,44 ,55 ,66 ,77 ,88 ,99 ,100 ,101 ,90 ,79 ,68 ,69 ,58 ,47 ,36 ,25 ,26 ,37 ,48 ,59 ,70 ,71 ,72 ,73 ,84 ,95 ,96 ,107 ,108 ,109],
            cell_states: [
              [8, 4, 0, 1], [0, 4, 2, 1], [0, 0, 2, 1], [0, 0, 2, 1], [0, 0, 2, 1], [0, 0, 2, 1], [0, 0, 2, 1], [0, 0, 2, 1], [0, 0, 2, 1], [8, 0, 0, 1], [8, 4, 0, 1], 
              [8, 4, 0, 0], [0, 4, 0, 1], [0, 0, 0, 1], [0, 0, 2, 1], [0, 0, 2, 1], [0, 0, 0, 1], [0, 0, 2, 1], [0, 0, 0, 1], [0, 0, 2, 1], [8, 0, 2, 0], [8, 4, 0, 0], 
              [0, 4, 2, 0], [8, 0, 0, 0], [8, 4, 0, 0], [0, 4, 0, 1], [8, 0, 0, 1], [8, 4, 0, 0], [8, 4, 0, 1], [8, 4, 0, 0], [0, 4, 0, 1], [8, 0, 0, 1], [8, 4, 0, 0], 
              [0, 4, 0, 1], [8, 0, 2, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], 
              [8, 4, 0, 0], [8, 4, 0, 1], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], 
              [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 2, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 2, 0], [8, 4, 0, 0], [0, 4, 2, 0], [8, 0, 2, 0], [8, 4, 0, 0], [8, 4, 0, 0], 
              [8, 4, 0, 0], [8, 4, 0, 0], [0, 4, 0, 1], [8, 0, 0, 0], [0, 4, 0, 0], [0, 0, 0, 1], [0, 0, 0, 0], [8, 0, 0, 1], [8, 4, 0, 1], [0, 4, 2, 0], [8, 0, 0, 0],
              [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [0, 4, 2, 1], [8, 0, 2, 0],
              [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [8, 4, 0, 0], [0, 4, 2, 0], [0, 0, 0, 0], [0, 0, 2, 1], [8, 0, 2, 1],
              [0, 4, 2, 0], [0, 0, 2, 0], [8, 0, 2, 0], [8, 4, 2, 0], [8, 4, 2, 0], [8, 4, 2, 0], [0, 4, 2, 0], [8, 0, 2, 1], [0, 4, 2, 0], [0, 0, 2, 1], [8, 0, 2, 1]
            ]
          }
          // autofocus(this.refs.game);
        }
        setGameFocus(){
          ReactDOM.findDOMNode(this.refs.game).focus();
        }
        renderAll(){
          var table = [];
          for (var i = 0; i < this.state.game_cells; i++) {
            // console.log(cell_states[i])
            if(i%this.state.game_with === 0)
              table.push (<br clear="both"/>);
            if(i === this.state.game_cells-1)
              table.push (this.renderCell(i, this.state.cell_states[i], 0, 1));
            else
              table.push (this.renderCell(i, this.state.cell_states[i]));
          }
          return(table);
        }
        hundleClick(){
          this.setState({view_path: 1})
        }
        renderHint(){

          return(
            <Hint click={()=>this.hundleClick()} />
          );
        }
        renderCell(pos, etat, isPlayer, isEnd) {
          var e = "cell ";
          if(this.state.view_path===1 && this.state.path.indexOf(pos)!==-1){
            e += "path ";
          }
          for (var i = 0; i<etat.length; i++) {
            if (etat[i]!== 0) {
              e += "etat"+etat[i]+" ";
            }
          }
          // var e = "cell ""etat"+etat;
          var end = (isEnd===1)? " end" :"";
          isPlayer = 0;
          if (isPlayer === 0 && this.state.New_position === pos) {
            isPlayer = 1;
          }
          var player = (isPlayer===1)? " player" :"";

          if(isEnd===1 && isPlayer===1){
            this.setState({Old_position: 0, New_position: 0, view_path: 0});
            console.log('EnD')
          }
            return (
              <Cell 
                cls={e+player+end}
                />
            );
        }
        onKeyPressed(e) {
          if(e.keyCode>36 && e.keyCode<41){
            var position = this.state.New_position;
            var New_position = this.state.New_position;
              // this.state.Old_position = New_position;
              var thisState = this.state.cell_states[position];
              if(e.keyCode===37 && (New_position - 1 > -1) && thisState[1]===0){//left 0400
                New_position -= 1; 
              }
              if(e.keyCode===38 && (New_position - this.state.game_with > -1) && thisState[3]===0){//top 0001
                New_position -= this.state.game_with; 
              }
              if(e.keyCode===39 && (New_position + 1 <= this.state.game_cells) && thisState[0]===0){//right 8000
                New_position += 1; 
              }
              if(e.keyCode===40 && (New_position + this.state.game_with <= this.state.game_cells) && thisState[2]===0){//down 0020
                New_position += this.state.game_with; 
              }
              this.setState({Old_position: position, New_position: New_position})
          // console.log(New_position)
          }
        }
        render(){
          return(
            <div ref="game"
              className="game" 
              onKeyDown={(e) => this.onKeyPressed(e)}
              // onClick={()=>this.setGameFocus()}
              // onClick={()=>this.hundleClick()}
              tabIndex="0"
              >
              <h1>click if not working</h1>
              <div className="game-board">
                {this.renderAll()}
              
                {this.renderHint()}
              </div>
            </div>
          );
        }
      }

      ReactDOM.render(<Laby / >, document.getElementById('root'));