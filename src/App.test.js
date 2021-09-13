// import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Calculator from './Calculator';

Enzyme.configure({adapter:new Adapter()});  

describe('App tests', () => {
    it("Simple Text Message Testing", ()=>{
        let wrapper  = shallow(<Calculator/>)       // load the component
        let text    = wrapper.find("h1").text();  // get the content of h1 tag
        expect("Welcome to My Calculator").toBe(text); 
    });

    it("Calculator test", ()=>{
        let wrapper  = shallow(<Calculator/>)       // load the component
        let ref    = wrapper.instance();            // get a reference of the state
        let currentEquation = "1+3";
        let result = ref.calculateEquation(currentEquation);
        expect("4").toBe(result); 
    });

    it('Allow Two Consecutive numbers', () => {
      let wrapper = shallow(<Calculator/>);
      let ref = wrapper.instance();
      let oldInput = "1";
      let newInput = "9";
      let result = ref.allowNewInput(oldInput, newInput);
      expect(result).toBeTruthy();
    });

    it('Do not allow two Consecutive arithmetic operations', () => {
      let wrapper = shallow(<Calculator/>);
      let ref = wrapper.instance();
      let oldInput = "/";
      let newInput = "*";
      let result = ref.allowNewInput(oldInput, newInput);
      expect(result).toBeFalsy();
    });
});