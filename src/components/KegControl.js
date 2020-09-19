import React from "react";
import KegList from './KegList';
import KegForm from './KegForm';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            selectedKeg: null,
            editing: false
        };
    }


      handleClick = () => {
        if (this.state.selectedKeg != null) {
            this.setState({
                selectedKeg: null,
                editing: false
            });
        } else {
            const { dispatch } = this.props;
            const action = a.toggleForm();
            dispatch(action);  
            }
      }

      handleAddingNewKegToList = (newKeg) => {
          const { dispatch } = this.props;
          const action = a.addKeg(newKeg);
          dispatch(action);
          const action2 = a.toggleForm();
          dispatch(action2);
      }


        handleEditingKegInList = (kegToEdit) => {
            const { dispatch } = this.props;
            const action = a.addKeg(kegToEdit);
            dispatch(action);
            this.setState({
                editing: false,
                selectedKeg: null
            });
        }
 

      handleSelectedKeg = (id) => {
          const selectedKeg = this.props.masterKegList[id];
          this.setState({selectedKeg: selectedKeg
        });
      }

        handleDeletingKeg = (id) => {
            const { dispatch } = this.props;
            const action = a.deleteKeg(id);
            dispatch(action);
            this.setState({selectedKeg: null});
        }


    // handlePintPour = (id) => {
    //     const keg = this.state.masterKegList
    //     .filter(keg => keg.id === id)[0];
    //     if (keg.pintCount > 0) {
    //         keg.pintCount --;
    //         }
    //         const changedMasterKegList = this.state.masterKegList
    //         .filter(keg => keg.id !== this.state.selectedKeg.id)
    //         .concat(keg);
    //         this.setState({
    //             masterKegList: changedMasterKegList,
    //             editing: false,
    //         });
    //     }
      
        render() {
            let currentlyVisibleState = null;
            let buttonText = null;

            if (this.state.selectedKeg !=null) {
                currentlyVisibleState = <KegDetail 
                keg = {this.state.selectedKeg} 
                // onPintPour = {this.handlePintPour}
                />
                buttonText = "Return to List";
            }

                else if (this.props.formVisibleOnPage) {
                currentlyVisibleState = <KegForm 
                onNewKegCreation={this.handleAddingNewKegToList} />;
                buttonText = "Return to List"; 
                } else {
                currentlyVisibleState = <KegList 
                kegList={this.props.masterKegList} 
                onKegSelection={this.handleSelectedKeg}
                 />;
                buttonText = "Add Keg" 
                }
                
                return (
                <React.Fragment>
                    {currentlyVisibleState}
                    <button onClick={this.handleClick}>{buttonText}</button>
                </React.Fragment>
            );
        }

};

KegControl.propTypes = {
    masterKegList: PropTypes.object
}

const mapStateToProps = state => {
    return {
        masterKegList: state.masterKegList,
        formVisibleOnPage: state.formVisibleOnPage
        // masterKegList: state
    }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;



