class Utils {
    static shuffle(array:Array<any>) : Array<any> {
        return array.sort(()=> Math.random()-0.5);
    }
}

export default Utils;