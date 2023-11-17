
#  State - ==*A form of maintaining a components memory 

## UseState Description - 
*  UseState is a state variable, retaining the data between renders. 
* UseState provides user with a state setter function, to update the variable and trigger React to render the component again

- Example of use - ![[Pasted image 20231027222027.png]]

***In React, `useState`, as well as any other function starting with ”`use`”, is called a Hook.***

![[Pasted image 20231027223156.png]]

*The only argument in useState is the initial value of the variable. In this case the value used was 0 resulting in 'useState(0)'.*

- Every time the component ends up being rendered useState returns an array containing 2 values:
- 1. The variable (in this case 'index').
- 2. The variables setter (in this case 'setIndex'). This has the option to update the variable and trigger React to render the component again. 

*Ex: <span style="color:#87CEEB">const [ index, setIndex ] = useState(0)</span>

*- You are allowed as many state variables you would like in one component.*

<span style="color:#87CEEB">Example</span> -
```
const [index, setIndex] = useState(0);
const [showMore, setShowMore] = useState(false);
```

## Dev notes - 

*Where the state should live -*
- Think of it this way, which components need to access the data we're going to store in state? If it's a single component, the state can live in the component itself. If it's more than 1 component that needs the data, then you should find the common parent to these components. 
