import React, {Component, Fragment} from 'react';
import { CREATORS as NameActions } from '../../store/ducks/names';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TesteRedux extends Component {

    componentDidMount(){
        const { listNames } = this.props;
        listNames('Gabriel Tamura Mamiya');
    }

    render(){

        const { names } = this.props;

        return (
            <Fragment>
                {names.loading ? <div>Carregando</div> : <div> names.name</div> }
                
            </Fragment>
        );
    }
};

const mapStateToProps = (state) => ({
    names: state.names
});

const mapDispatchToProps = (dispatch) => 
    bindActionCreators(NameActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TesteRedux);