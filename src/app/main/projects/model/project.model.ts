export class Project{
    constructor(
        public _id?: string,
        public nombre?: string,
        public descripcion?: string,
        public projectManager?: any,
        public assignedTo?: any,
        public status?: boolean,
        public created?: Date
    ){}
}
