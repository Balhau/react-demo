class Utils {
    static shuffle(array: Array<any>): Array<any> {
        return array.sort(() => Math.random() - 0.5);
    }
}

export const updateState = (oldState: any, newValues: any) => {
    return {
        ...oldState,
        ...newValues
    };
};

export default Utils;