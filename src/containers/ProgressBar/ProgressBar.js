import React, {Component} from 'react';
import Auxil from '../../hoc/Auxil'
import Progress from '../../components/Progress/Progress';
import SelectControls from '../../components/Progress/SelectControls/SelectControls';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
class ProgressBar extends Component {

    state = {
        bars: {
            phaseOne : 0,
            phaseTwo : 0,
            phaseThree: 0,
            phaseFour: 0


        },
        loading: false
    }
    componentDidMount() {
        axios.get('https://react-my-project-3b490.firebaseio.com/saveBars.json')
            .then(response => {
                this.setState({bars : response.data})
            })
    }

    addPhaseHandler = (type) => {
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
    };

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
            ...this.state.bars
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
                <Progress bars={this.state.bars}/>
                <SelectControls
                phaseAdded={this.addPhaseHandler}
                phaseRemoved={this.removePhaseHandler}
                phaseSave={this.processStoreHandler}
                disabled={disabledInfo}
                />
                <div>
                    {progressSum}
                </div>
            </Auxil>
        );
    }
}

export default  ProgressBar;
