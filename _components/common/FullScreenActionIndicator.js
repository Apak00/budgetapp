import React from "react";
import {ActivityIndicator, Modal, View} from "react-native";
import stylePack from "../../Styles/styles";
import {connect} from "react-redux";

class FullScreenActionIndicator extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <Modal
            transparent={true}
            animationType={'none'}
            visible={this.props.loaderOnStatus}
            onRequestClose={() => {
                console.log('close modal')
            }}>
              <View style={stylePack.modalBackground}>
                  <View style={stylePack.activityIndicatorWrapper}>
                      <ActivityIndicator
                        animating={this.props.loaderOnStatus}/>
                  </View>
              </View>
          </Modal>);
    }
}

const mapStateToProps = (state) => {
    return {
        loaderOnStatus: state.others.loaderOnStatus
    }
};

export default connect(mapStateToProps)(FullScreenActionIndicator);