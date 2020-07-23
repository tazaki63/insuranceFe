import { BranchManager } from 'src/app/branchmanager';
import { CPR } from './cpr';
import { Customer } from './customer';

export class Agent{
    constructor(
        public agentId:number,
        public agentName:string,
        public fatherName:string,
        public age:number,
        public sex:string,
        public qualification:string,
        public branchCity:string,
        public branchState:string,
        public branchAddress:string,
        public password:string,
        public branchManager:BranchManager,
        public cpr:CPR,
        public customers:Customer[]
    ){}
}