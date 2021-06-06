export class Note {

    title: string;
    content: string;
    isImportant: boolean;
    date: Date;

    constructor(title:string, content:string, isImportant:boolean, date: Date) {
        this.title = title;
        this.content = content;
        this.isImportant = isImportant;
        this. date = date;
    }

}