import React from 'react';
import classes from './ContactInfo.module.css';

export const ContactInfo = (props:any) => {
    const data=props.contact.formData;
    const contacts = Object.keys(data).map((key:any) => (
        <div key={key}>
            <div className={classes.Label}>
                <strong>{key}:</strong>
            </div>
            <div className={classes.Span}>
                {data[key]["value"]}
            </div>
        </div>
        
    ));
    return (
        <div className={classes.ContactInfo}>
            {contacts}
        </div>
    );
};