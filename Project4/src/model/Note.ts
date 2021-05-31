export class Note {

    title: string;
    content: string;
    isImportant: boolean;

    constructor(title:string, content:string, isImportant:boolean) {
        this.title = title;
        this.content = content;
        this.isImportant = isImportant;
    }

}