import React from "react";
import ReactDOM from "react-dom/client"


//React.createElement => Js Object =>render =>HTML Element

// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     'hey i am react elemen'
// )


//  const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById('root2'))

// root.render(heading)

// console.log(heading);


//JSX =>JSX is not html in javascript. JSX is a HTML or XML like syntax.  Javascript syntax which is easier to create react elements

//JSX =>Babel transpiles JSX to => React.createElement => JS Object => HTML Element 




// const jsxHeading =(
//             <h1 id="heading" className="head" tabIndex ="1">
//                 hey react using jsx
//             </h1>
            
// );

// console.log(jsxHeading);
// root.render(jsxHeading)








// React Components
//Class Based Components - OLD
//Functional Based Components - NEW
//line 33 and 35-37 is same 
// const HeadingComponent2 = ()=>{
//     return <h1 className="head2"> Namaste React Functional Component</h1>
// }


//COMPONENT COMPOSITION


// const Title = ()=> (<h3>React from Title element</h3>)

// const HeadingComponent = ()=> (
//     <div id="container">
//         <Title/>
//          <h1 className="head"> Namaste React Functional Component</h1>
//     </div>
    
   
// )
// const Image = ()=>(<img src="./img/image.jpg"/>)



// root.render(<HeadingComponent/>)

//PRACTICE 1
const Para = ()=>{
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem eos amet nemo ipsum reiciendis nulla assumenda cumque voluptatibus. Fugiat officia dolorem pariatur ex tempore velit alias repudiandae modi ducimus.</p>
        </div>
    )
}
//WAYS TO EXECUTE REACT COMPONENTS
const MyHead = ()=>{
    return (
    
        <div>
            <h2 className="heads" >My head using react Component</h2>
            <Para></Para>
            <Para/>
            {Para()}
        </div>
        

)
}

 root2.render(<MyHead/>)

//PRACTICE2
// const arr =[1,2,3,45]

// const AboutHarry = ()=> (
//     <div>
//         <p>
//         Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. Wikipedia
//         Author: J. K. Rowling
//         </p>
//     </div>
// )

// const Title = function(){ 
 
//     return (<div>
       
//          <h1>HARRY POTTER</h1>
//          {arr.map(itm=>itm+20)}
//          <AboutHarry/>
//     </div>
//     )
       
// }



//REACT ELEMENT INSIDE REACT COMPONENT
// const elm3 =  (
//     <h4> hello elm3</h4>
// )

// const Head2 = ()=>(
//     <div>
//         {elm3}
//         <h2>new react element</h2>
//     </div>
// )

// root2.render(<Head2/>)



//REACT COMPONENT INSIDE REACT ELEMENT

// const Head = ()=>(
//     <div>
     
//         <h1>Hey React Component</h1>
        
//     </div>
// )
// const myElement= (
    
//     <div>
//         {element2}
//           <h2> hey sreact element</h2>
//           <Head/>
//     </div>
  
// )


// root2.render(myElement)