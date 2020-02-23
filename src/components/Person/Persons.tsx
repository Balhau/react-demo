import React, {FunctionComponent as FN} from 'react';
import Aux from '../../hoc/aux'

type Person={
    name: string,
    age: number,
};

type PersonsProps={
    size:number
};

const persons : Array<string> = [
    "John","Mark","Frank","Hanz","Skank",
    "Bruce","Martha","Landis","Matheus",
    "Carla","Vanessa","Paula","Rute","Diana",
    "Joana","Rui","Paulo","Anes"
];

const p = (size: number) => {
    let parray : Array<Person> = [];
    for(let i=0;i<size;i++){
        parray.push({
            name: persons[Math.floor(Math.random()*persons.length)],
            age: Math.floor(Math.random())*80
        });
    }
    return (
        parray.map((person:Person) => {
        return (
        <Aux>
            <div className='line-block'>
                <h1>{person.name}</h1>
                <p>{person.age}</p>
            </div>
        </Aux>)
    }))
}

export const Persons : FN<PersonsProps> = ({size}) => <div>{p(size)}</div>