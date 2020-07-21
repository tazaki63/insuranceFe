
import {Agent} from './agent';
import {Branch} from './branch';
import {Policy} from './policy';

export class Customer{
    constructor(
        public customerId:number,
        public customerName:string,
        public fatherName:string,
        public age:number,
        public date:string,
        public sex:string,
        public qualification:string,
        public address:string,
        public occupation:string,
        public passw:string,
        public email:string,
        public premiumAmount:number,
        public agent:Agent,
        public policy:Policy,
        public branch:Branch
        

    ){}
}