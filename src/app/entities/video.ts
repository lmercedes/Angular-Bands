export class Video {
    constructor(protected id, protected name, private embed){
        this.id = id,
        this.name = name,
        this.embed = embed
    }

    getEmbed(){
        return this.embed
    }

    getName (){
        return this.name
    }
    
    getId(){
        return this.id;
    }
}