export class ServerData{
    
    public name:string;
    public memory:string;
    public cpu:string;
    public status:string;
    public id?:string;
    
    constructor(
         name:string,
         memory:string,
         cpu:string,
         status:string,
         id:string,

        ){
            this.name= name;
            this.memory = memory
            this.cpu= cpu;
            this.status=status;
            this.id=id
        }
}