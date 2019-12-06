(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));n(210),n(211),n(207),n(212),n(213),n(214);var o=n(208);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var r={id:"quickstart-api-basics",title:"API Basics"},i=[{value:"Controlled Inputs",id:"controlled-inputs",children:[]},{value:"Controlling Rich Text",id:"controlling-rich-text",children:[]}],l={rightToc:i},c="wrapper";function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(c,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document provides an overview of the basics of the ",Object(o.b)("inlineCode",{parentName:"p"},"Draft")," API. A\n",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/plaintext"}),"working example"),"\nis also available to follow along."),Object(o.b)("h2",{id:"controlled-inputs"},"Controlled Inputs"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Editor")," React component is built as a controlled ContentEditable component,\nwith the goal of providing a top-level API modeled on the familiar React\n",Object(o.b)("em",{parentName:"p"},"controlled input")," API."),Object(o.b)("p",null,"As a brief refresher, controlled inputs involve two key pieces:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A ",Object(o.b)("em",{parentName:"li"},"value")," to represent the state of the input"),Object(o.b)("li",{parentName:"ol"},"An ",Object(o.b)("em",{parentName:"li"},"onChange")," prop function to receive updates to the input")),Object(o.b)("p",null,"This approach allows the component that composes the input to have strict\ncontrol over the state of the input, while still allowing updates to the DOM\nto provide information about the text that the user has written."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"class MyInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {value: ''};\n    this.onChange = (evt) => this.setState({value: evt.target.value});\n  }\n  render() {\n    return <input value={this.state.value} onChange={this.onChange} />;\n  }\n}\n")),Object(o.b)("p",null,"The top-level component can maintain control over the input state via this\n",Object(o.b)("inlineCode",{parentName:"p"},"value")," state property."),Object(o.b)("h2",{id:"controlling-rich-text"},"Controlling Rich Text"),Object(o.b)("p",null,"In a React rich text scenario, however, there are two clear problems:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A string of plaintext is insufficient to represent the complex state of a rich editor."),Object(o.b)("li",{parentName:"ol"},"There is no such ",Object(o.b)("inlineCode",{parentName:"li"},"onChange")," event available for a ContentEditable element.")),Object(o.b)("p",null,"State is therefore represented as a single immutable\n",Object(o.b)("a",a({parentName:"p"},{href:"/docs/api-reference-editor-state"}),"EditorState")," object, and\n",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," is implemented within the ",Object(o.b)("inlineCode",{parentName:"p"},"Editor")," core to provide this state\nvalue to the top level."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"EditorState")," object is a complete snapshot of the state of the editor,\nincluding contents, cursor, and undo/redo history. All changes to content and\nselection within the editor will create new ",Object(o.b)("inlineCode",{parentName:"p"},"EditorState")," objects. Note that\nthis remains efficient due to data persistence across immutable objects."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"import {Editor, EditorState} from 'draft-js';\n\nclass MyEditor extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {editorState: EditorState.createEmpty()};\n    this.onChange = (editorState) => this.setState({editorState});\n  }\n  render() {\n    return <Editor editorState={this.state.editorState} onChange={this.onChange} />;\n  }\n}\n")),Object(o.b)("p",null,"For any edits or selection changes that occur in the editor DOM, your ",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," handler will execute with the latest ",Object(o.b)("inlineCode",{parentName:"p"},"EditorState")," object based on those changes."))}s.isMDXComponent=!0}}]);