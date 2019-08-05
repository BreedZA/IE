import React, {Component} from 'react';
import { connect } from 'react-redux';
/*import * as actionTypes from '../../store/actions/actionTypes';*/
import * as ProgressBarActions from '../../store/actions/index';



import Auxil from '../../hoc/Auxil'
import Progress from '../../components/Progress/Progress';
import SelectControls from '../../components/Progress/SelectControls/SelectControls';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import Layout from '../../components/Layout/Layout';

class ProgressBar extends Component {

    state = {

        loading: false
    }
    // fetches phases from the API
    componentDidMount() {
      /*
            })*/
    }

    /*addPhaseHandler = (type) => {
        const oldCount = this.state.bars[type];
        const updatedCount = oldCount + 1;
        const updatedBars = {
            ...this.state.bars

        };
        updatedBars[type] = updatedCount;
        this.setState({bars: updatedBars});
        };


        removePhaseHandler = (type) => {
            const oldCount = this.state.bars[type];
            if(oldCount <= 0){
                return;
            }
            const updatedCount = oldCount - 1;
            const updatedBars = {
                ...this.state.bars

            };
            updatedBars[type] = updatedCount;
            this.setState({bars: updatedBars});
    };*/

        processStoreHandler = () => {
            this.setState({loading: true});
            const progress = {
                bars: this.state.bars,
                patient: {
                    name : 'Andrew',
                    address: {
                        street: 'craighall road',
                        zipCode: '2195',
                        country: 'South africa'
                    },
                    email : 'lyonsandy@ymail.com'
                }
            }
            axios.post('/progress.json', progress)
                .then(response => {
                    this.setState({loading: false});
                })
                .catch(error => {this.setState({loading: false})});
        };

    render() {
        const disabledInfo ={
            ...this.props.br
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let progressSum = null;
        if(this.state.loading){
         progressSum = <Spinner/>;
        }
        return (
            <Auxil>
                <Layout>
                <Progress bars={this.props.br}/>
                <SelectControls
                phaseAdded={this.props.onPhaseAdded}
                phaseRemoved={this.props.onPhaseRemove}
                phaseSave={this.processStoreHandler}
                disabled={disabledInfo}
                />
                <div>
                    {progressSum}
                </div>
                </Layout>
            </Auxil>
        );
    }
}
const mapStateToProps = state => {
    return {
        br: state.bars
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onPhaseAdded: (barPhases) => dispatch(ProgressBarActions.addPhase(barPhases)),
        onPhaseRemove: (barPhases) => dispatch(ProgressBarActions.removePhase(barPhases))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
