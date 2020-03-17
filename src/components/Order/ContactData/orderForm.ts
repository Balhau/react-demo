export const orderForm : any = {
    name: {
        inputType: "input",
        elementConfig: {
            type: "text",
            placeholder:"Your Name"
        },
        value: "",
        validation:{
            required:true,
            minlen: 5
        },
        valid:false
    },
    email: {
        inputType: "input",
        elementConfig: {
            type: "text",
            placeholder:"Your Email"
        },
        value: "",
        validation:{
            required:true,
            minlen: 5
        },
        valid:false
    },
    street: {
        inputType: "input",
        elementConfig: {
            type: "text",
            placeholder:"Your Street"
        },
        value: "",
        validation:{
            required:true,
            minlen:10
        },
        valid:false
    },
    country: {
        inputType: "input",
        elementConfig: {
            type: "text",
            placeholder:"Your Country"
        },
        value: "",
        validation:{
            required:true,
            minlen:4
        },
        valid:false
    },
    postal: {
        inputType: "input",
        elementConfig: {
            type: "text",
            placeholder:"Your Postal Number"
        },
        value: "",
        validation:{
            required:true,
            minlen:6
        },
        valid:false
    },
    deliveryMethod:{
        inputType: "select",
        elementConfig: {
            options: [
                { value : "fastest", displayValue: "Fastest"},
                { value : "cheapest", displayValue: "Cheapest"}
            ]
        },
        validation:{
            required:false
        },
        valid:true
    }
};

export const validateInput = (value:any,rules:any)=>{
    let isValid=true
    if(rules.required){
        isValid=value.trim()!==''
    }

    if(rules.minlen){
        isValid = value.length > rules.minlen;
    }
    return isValid;
};