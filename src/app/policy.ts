export class Policy{
    constructor(
        public policyId:number,
        public policyName:string,
        public policyTerm:number,
        public policyAmount:number,
        public policyInterest:number,
        public date:string,
        public policyType:string,
        public maturityAmount:number

    ){}
}