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


const configuration = <>
                        <LineDropdown listData={list01} title='Please select worksheet' /><br/><br/>
                        <RadioButton radioData={radioList} radioTitle='Dollar Sign?'/>
                      </>;

const options = <>
                    <span>Test options</span><br/>
                    <span>Test options2</span>
                </>;
const formatting = <>
                        <span>Test formatting</span><br/>
                        <span>Test formatting2</span>
                   </>;
const panels = [configuration, options, formatting];

const tabs = [ { content: 'Extension Config' }, { content: 'Optional Features' }, { content: 'Source / Attribution' } ];


class ConfigDialog extends React.Component {

    componentWillMount() {
        this.setState({ selectedTabIndex: 0 });

        try{
            tableau.extensions.initializeDialogAsync().then(() => {
                console.log('Debug: component will mount.');
                const tableauSettings = tableau.extensions.settings.getAll();
                const tableauDashboard = tableau.extensions.dashboardContent.dashboard;

                console.log('Debug tableauSettings: ', tableauSettings);
                console.log('Debug tableauDashboard: ', tableauDashboard);
            });
        }
        catch(err){
            console.log('window.tableau.extensions did not load');
        }
    }

    componentDidMount() {
        console.log('Debug: component did mount');
    }

    getWorksheetList(){
        console.log('Running getWorksheetList function.');
    }

    render() {
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

