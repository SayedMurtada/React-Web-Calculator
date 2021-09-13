import React, { Component } from 'react'

/* the remaining job is to create a test using jest
    and test the code   Done
    then build using npm build
    then create an image in docker and see if it works 
    then push the code to github
    then run the code in aws
    do not forget to stop the aws after finishing the work
*/


export default class Calculator extends Component {
    constructor (props){
        super(props);
        this.state = {Equation:"", latestInput:"2"};
    }

    allowNewInput(inputName, oldInput){
        let Signs = ["+","-", "*", "/", "."];
        let Numbers = ["0","1","2","3","4","5","6","7","8","9"]
        let result = (Signs.indexOf(oldInput) === -1 && Signs.indexOf(inputName)!==-1) || Numbers.indexOf(inputName) !== -1;
        return result;
    }

    handleChange = (event) =>{
        let inputName = event.target.name;
        let oldInput = this.state.latestInput;
        if (this.allowNewInput(inputName, oldInput)){
            let oldEquation = this.state.Equation;
            let newEquation = oldEquation+inputName;
            this.setState({Equation:newEquation, latestInput:inputName});
        }
    }

    calculateEquation(Equation){
        var output = eval(Equation);
        return output.toString();
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        let latestEquation = this.state.Equation;
        let result = this.calculateEquation(latestEquation);
        this.setState({Equation:result});
    }
    resetCal = (event) =>{
        this.setState({Equation:"", latestInput:""})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Welcome to My Calculator</h1>
                <table class="table table-dark w-25 h-25">
                    {/* Output Row */}
                    <thead>
                        <th colSpan="4">
                            <input type="text" id="Equation" name ="Equation" class="w-100" value={this.state.Equation} readOnly />
                        </th>
                    </thead>
                    
                    {/* First Row */}
                    <tbody>
                        <tr>
                            <td scope="col"><input type="button" id="Numbers" name="+" value="+" onClick={this.handleChange}/></td>
                            <td scope="col"><input type="button" id="Numbers" name="-" value="-" onClick={this.handleChange}/></td>
                            <td scope="col"><input type="button" id="Numbers" name="*" value="x" onClick={this.handleChange}/></td>
                            <td scope="col"><input type="button" id="Numbers" name="/" value="÷" onClick={this.handleChange}/></td>
                        </tr>
                        {/* Second Row */}
                        <tr>
                            <td><input type="button" id="Numbers" name="7" value="7" onClick={this.handleChange}/></td>
                            <td><input type="button" id="Numbers" name="8" value="8" onClick={this.handleChange}/></td>
                            <td><input type="button" id="Numbers" name="9" value="9" onClick={this.handleChange}/></td>
                            <td id="tdEqual" rowSpan="4"><input type="submit" id="equal" value="="/></td>

                        </tr>
                        {/* Third Row */}
                        <tr>
                            <td><input type="button" id="Numbers" name="4" value="4" onClick={this.handleChange}/></td>
                            <td><input type="button" id="Numbers" name="5" value="5" onClick={this.handleChange}/></td>
                            <td><input type="button" id="Numbers" name="6" value="6" onClick={this.handleChange}/></td>
                        </tr>
                        {/* Fourth Row */}
                        <tr>
                            <td><input type="button" id="Numbers" name="1" value="1" onClick={this.handleChange}/></td>
                            <td><input type="button" id="Numbers" name="2" value="2" onClick={this.handleChange}/></td>
                            <td><input type="button" id="Numbers" name="3" value="3" onClick={this.handleChange}/></td>
                        </tr>
                        {/* Fifth Row */}
                        <tr>
                            <td><input type="button" id="Numbers" name="0" value="0" onClick={this.handleChange}/></td>
                            <td><input type="button" id="Numbers" name="." value="." onClick={this.handleChange}/></td>
                            <td><input type="reset" id="Numbers" class="btn btn-danger" value="AC" onClick={this.resetCal}/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            
        )
    }
}
