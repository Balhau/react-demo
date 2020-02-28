import React, {FunctionComponent as FN} from 'react';
import Aux from './aux';
import Modal from '../components/UI/Modal';

const withErrorHandler = (WrappedComponent: FN,axios:any) => {
    return (props:any) => {
        return (
            <Aux>
                <Modal>
                    Something didn't work
                </Modal>
                <WrappedComponent {...props}/>
            </Aux>
        )
    }
};

export default withErrorHandler;