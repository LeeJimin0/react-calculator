import React from 'react'
import './index.css'

class Main extends React.Component {
  state = {
    inputValue: ''
  }

  onClick = (value) => {
    if (value === '=') {
      this.setState({
        inputValue: eval(this.state.inputValue)
      })
    } else if (value === 'AC') {
      this.setState({
        inputValue: ''
      })
    } else {
      this.setState({
        inputValue: this.state.inputValue + value
      })
    }
  }

  render() {
    return (
      <div id='app'>
        <div className='inputArea'>
          <input type='text' value={this.state.inputValue} />
        </div>
        <div className='buttonArea'>
          <ul className='buttonBox'>
            <li className='row1'>
              <button
                onClick={() => {
                  this.onClick('AC')
                }}
              >
                AC
              </button>
              <button
                onClick={() => {
                  this.onClick('%')
                }}
              >
                %
              </button>
              <button
                onClick={() => {
                  this.onClick('/')
                }}
              >
                /
              </button>
              <button
                onClick={() => {
                  this.onClick('*')
                }}
              >
                *
              </button>
            </li>
            <li className='row2'>
              <button
                onClick={() => {
                  this.onClick('7')
                }}
              >
                7
              </button>
              <button
                onClick={() => {
                  this.onClick('8')
                }}
              >
                8
              </button>
              <button
                onClick={() => {
                  this.onClick('9')
                }}
              >
                9
              </button>
              <button
                onClick={() => {
                  this.onClick('-')
                }}
              >
                -
              </button>
            </li>
            <li className='row3'>
              <button
                onClick={() => {
                  this.onClick('4')
                }}
              >
                4
              </button>
              <button
                onClick={() => {
                  this.onClick('5')
                }}
              >
                5
              </button>
              <button
                onClick={() => {
                  this.onClick('6')
                }}
              >
                6
              </button>
              <button
                onClick={() => {
                  this.onClick('+')
                }}
              >
                +
              </button>
            </li>
            <li className='row4'>
              <button
                onClick={() => {
                  this.onClick('1')
                }}
              >
                1
              </button>
              <button
                onClick={() => {
                  this.onClick('2')
                }}
              >
                2
              </button>
              <button
                onClick={() => {
                  this.onClick('3')
                }}
              >
                3
              </button>
              <button
                onClick={() => {
                  this.onClick('.')
                }}
              >
                .
              </button>
            </li>
            <li className='row5'>
              <button
                className='button_0'
                onClick={() => {
                  this.onClick('0')
                }}
              >
                0
              </button>
              <button
                className='button_color'
                onClick={() => {
                  this.onClick('=')
                }}
              >
                =
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Main
