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

let sheetList02 = [];
let measureColumns = [];
let dimensionColumns = [];
let configuration =<></>;


class ConfigDialog extends React.Component {


    /*state = { 
        sheetList: ['abc'],
        configuration: <></>
    };*/

    initializeSheetFilter = () => {
    //initializeSheetFilter() {    
        configuration = <>
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
                    sheetList02.push(worksheet.name);

                    worksheet.getSummaryDataAsync({ maxRows: 1 }).then(function (sumdata) {
                        console.log('Debug running worksheet.getSummaryDataAsync... ');

                        sumdata.columns.forEach(function (current_value) {

                            if(current_value.dataType === 'float' || current_value.dataType === 'int') {
                                measureColumns.push(current_value.fieldName);
                            }
                    
                            if(current_value.dataType === 'string') {
                                dimensionColumns.push(current_value.fieldName);
                            }
                    
                        });
                    });
                });

                console.log('Debug tableauSettings: ', tableauSettings);
                console.log('Debug sheetList02: ', sheetList02);
                console.log('Debug tableauDashboard: ', tableauDashboard);
                console.log('Debug measureColumns: ', measureColumns);
                console.log('Debug dimensionColumns: ', dimensionColumns);
            });
        }
        catch(err){
            console.log('window.tableau.extensions did not load');
        }
    }

    componentDidMount() {
        console.log('Debug: component did mount');

        let TempList = ["Tab Superstore Data", "Tabulated Data US Census"];

        if (sheetList02.length < 1) {
            console.log('Condition if met');
            sheetList02 = TempList;
            console.log('sheetList02: ', sheetList02);
        }

        console.log('sheetList: ', sheetList02);
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

