import React, {FunctionComponent as FN, useEffect, useState} from 'react';
import Aux from './aux';
import Modal from '../components/UI/Modal';

const withErrorHandler = (WrappedComponent:FN,axios:any) => 
    (props:any) => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const [reqPointer,setReqPointer] :any = useState(null);
        const [resPointer,setResPointer] :any = useState(null);

        const [error,setError]=useState<any>();

        const closeModelHandler = ()=>{
            setError(null);
        }

        const requestInterceptor = (req:any) => {
            setError(null);
            return req;
        };
        const responseErrorInterceptor = (err:any) => {
            setError(err);
            return err;
        };
        
        useEffect(() => {
            setReqPointer(axios.interceptors.request.use(requestInterceptor));
            setResPointer(axios.interceptors.response.use(null,responseErrorInterceptor));

            //Equivalent to componentWillUnmount
        return () => {
            console.log("Component will unmount");
            // eslint-disable-next-line
            axios.interceptors.request.eject(reqPointer);
            // eslint-disable-next-line
            axios.interceptors.request.eject(resPointer);
            // eslint-disable-next-line
        };}, []);

        const wrapped = (<WrappedComponent {...props}/>);

        return (
            <Aux>
                <Modal modelClosed={closeModelHandler} show={error}>
                    { error ? error.message : null }
                </Modal>
                { error ? null : wrapped }
            </Aux>
        )
    };

export default withErrorHandler;
