function customrender(reactElement,mainContainer){
    /* const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute=('href',reactElement.props.href)
    domElement.setAttribute=('target',reactElement.props.target)
    mainContainer.appendChild(domElement); 
    *///! the aove can be done but if react element has more props then it tougher we can use loop
    const domelement= document.createElement(reactElement.type)
    domelement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if(prop==reactElement.children) continue;
        domelement.setAttribute=(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domelement);
//! actually  this is how  React works too a element is made using tree as like reactElement we are traversing it 
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:"_blank"
    },
    children:'Click me to visit google'
    //* the jsx code is converted to the code above mentioned by bundler
}
const mainContainer = document.querySelector('#root');
customrender(reactElement,mainContainer)