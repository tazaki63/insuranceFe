import { BranchManager } from "./branchManager";

export class Branch{

    constructor(

        public branchId:number, 
        public branchName:string,
        public address:string,
        public phone:string,
        public location:string,
        public date:string,
        public city:string,
        public state:string,
        public branchManager:BranchManager

    ){}
}