import React from 'react';
import LineDropdown from './LineDropdown.js'
import RadioButton from './RadioButton.js'
import { Tabs } from '@tableau/tableau-ui'

const { tableau } = window;

let radioList = ['Yes', 'No'];

let list01 = [
    { value: 'alpha'},
    { value: 'bravo'},
    { value: 'charlie'},
    { value: 'delta'},
    { value: 'zebra'}
];


class ConfigDialog extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            sheetList: ['abc'],
            configuration: <></>
        };
    }

    initializeSheetFilter = () => {
    //initializeSheetFilter() {    
        this.configuration = <>
            <LineDropdown listData={this.sheetList} title='Please select worksheet' /><br/><br/>
            <RadioButton radioData={radioList} radioTitle='Dollar Sign?'/>
            </>
    }

    componentWillMount() {
        this.setState({ selectedTabIndex: 0 });

        try{
            tableau.extensions.initializeDialogAsync().then(() => {
                console.log('Debug: component will mount.');
                const tableauSettings = tableau.extensions.settings.getAll();
                const tableauDashboard = tableau.extensions.dashboardContent.dashboard;

                tableauDashboard.worksheets.forEach(function (worksheet) {
                    //this.sheetList.push(worksheet.name);
                });

                console.log('Debug tableauSettings: ', tableauSettings);
                //console.log('Debug sheetList: ', sheetList);
                console.log('Debug tableauDashboard: ', tableauDashboard);
            });
        }
        catch(err){
            console.log('window.tableau.extensions did not load');
        }
    }

    componentDidMount() {
        console.log('Debug: component did mount');
        console.log('this.state.sheetList.length: ', this.state.sheetList.length);

        let TempList = ["Tab Superstore Data", "Tabulated Data US Census"];

        if (this.state.sheetList.length < 10) {
            console.log('Condition if met');
            //checks: [ ...this.state.checks, 'some element']
            //this.setState({ sheetList: [ ...this.state.sheetList, 'xxxBBB'], })

            /*this.setState(previousState => ({
                sheetList: [...previousState.sheetList, 'new value']
            }));  */

            this.setState(state => {
                const sheetList = state.sheetList.concat('new value');
                return{
                    sheetList
                };
            });



            console.log('sheetList: ', this.state.sheetList);
        }
        //console.log('sheetList: ', this.state.sheetList);

        //this.initializeSheetFilter();
    }

    getWorksheetList(){
        console.log('Running getWorksheetList function.');
    }


    render() {


        /*const configuration = <>
            <LineDropdown listData={this.sheetList} title='Please select worksheet' /><br/><br/>
            <RadioButton radioData={radioList} radioTitle='Dollar Sign?'/>
            </>;*/

        const options = <>
            <span>Test options</span><br/>
            <span>Test options2</span>
            </>;
        const formatting = <>
            <span>Test formatting</span><br/>
            <span>Test formatting2</span>
            </>;
        const panels = [this.configuration, options, formatting];

        const tabs = [ { content: 'Extension Config' }, { content: 'Optional Features' }, { content: 'Source / Attribution' } ];

        return(
            <>
            <h1>Tableau Extension D3 Sankey Diagram ConfigDialog.</h1>

            <br/>
            <Tabs
            activation='manual'
            alignment='left'
            onTabChange={(index) => {
                console.log(`onChange: ${index}`);
                this.setState({ selectedTabIndex: index });
            }}
            selectedTabIndex={this.state.selectedTabIndex}
            tabs={tabs}
            >

            {/*<span>{tabs[this.state.selectedTabIndex].content} panel content</span>*/}
            {panels[this.state.selectedTabIndex]}
            </Tabs>

            <br/>

            {/*<LineDropdown listData={list01} title='Please select worksheet' />
            <br/>
            <br/>
            <RadioButton radioData={radioList} radioTitle='Dollar Sign?'/>*/}
            </>
        )
    }
}

export default ConfigDialog

