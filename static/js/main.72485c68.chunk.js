(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(8),r=n.n(o),c=(n(15),n(1)),s=n(2),i=n(5),u=n(3),m=n(6),g=n(4),d=function(e,t){return l.a.createElement("option",{disabled:e.disabled||e.separator,key:t,value:e.value},e.value)},b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.listData,n=this.props.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,n),l.a.createElement("br",null),l.a.createElement(g.DropdownSelect,{kind:"line",defaultValue:"DEFAULT"},(e="None selected",l.a.createElement("option",{value:"DEFAULT",disabled:!0},e)),t.map(d)),l.a.createElement("br",null))}}]),t}(a.Component),h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={checkedValue:"one"},n.onChange=function(e){return n.setState({checkedValue:e.target.value})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.radioData,n=this.props.radioTitle;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,n),l.a.createElement("br",null),t.map(function(t,n){return l.a.createElement(l.a.Fragment,{key:n},l.a.createElement(g.Radio,{checked:e.state.checkedValue===t,onChange:e.onChange,name:"ordinal",value:t},t),l.a.createElement("br",null))}))}}]),t}(a.Component),p=window.tableau,f=["Yes","No"],E=[],D=[],y=[],v=(l.a.createElement(l.a.Fragment,null),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).initializeSheetFilter=function(){l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{listData:n.sheetList,title:"Please select worksheet"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h,{radioData:f,radioTitle:"Dollar Sign?"}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.setState({selectedTabIndex:0});try{p.extensions.initializeDialogAsync().then(function(){console.log("Debug: component will mount.");var e=p.extensions.settings.getAll(),t=p.extensions.dashboardContent.dashboard;t.worksheets.forEach(function(e){E.push(e.name),e.getSummaryDataAsync({maxRows:1}).then(function(e){console.log("Debug running worksheet.getSummaryDataAsync... "),e.columns.forEach(function(e){"float"!==e.dataType&&"int"!==e.dataType||D.push(e.fieldName),"string"===e.dataType&&y.push(e.fieldName)})})}),console.log("Debug tableauSettings: ",e),console.log("Debug sheetList02: ",E),console.log("Debug tableauDashboard: ",t),console.log("Debug measureColumns: ",D),console.log("Debug dimensionColumns: ",y)})}catch(e){console.log("window.tableau.extensions did not load")}}},{key:"componentDidMount",value:function(){console.log("Debug: component did mount");E.length<1&&(console.log("Condition if met"),E=["Tab Superstore Data","Tabulated Data US Census"],console.log("sheetList02: ",E)),console.log("sheetList: ",E)}},{key:"getWorksheetList",value:function(){console.log("Running getWorksheetList function.")}},{key:"render",value:function(){var e=this,t=l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,"Test options"),l.a.createElement("br",null),l.a.createElement("span",null,"Test options2")),n=l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,"Test formatting"),l.a.createElement("br",null),l.a.createElement("span",null,"Test formatting2")),a=[this.configuration,t,n];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Tableau Extension D3 Sankey Diagram ConfigDialog."),l.a.createElement("br",null),l.a.createElement(g.Tabs,{activation:"manual",alignment:"left",onTabChange:function(t){console.log("onChange: ".concat(t)),e.setState({selectedTabIndex:t})},selectedTabIndex:this.state.selectedTabIndex,tabs:[{content:"Extension Config"},{content:"Optional Features"},{content:"Source / Attribution"}]},a[this.state.selectedTabIndex]),l.a.createElement("br",null))}}]),t}(l.a.Component));r.a.render(l.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.72485c68.chunk.js.map