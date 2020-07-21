import {Agent} from './agent';
import {Customer} from './customer';
import {Policy} from './policy';


export class CPR{
    constructor(
        public customerPolicyId:number,
        public premiumType:string,
        public date:String,
        public nomineeName:string,
        public relationship:string,
        public agentCommPremiumAmt:number,
        public termsconditions:boolean,
        public agent:Agent,
        public policy:Policy,
        public customer:Customer
    ){}
}