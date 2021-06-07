export class Note {

    title: string;
    content: string;
    isImportant: boolean;
    date: Date;
    color: string;

    constructor(title:string, content:string, isImportant:boolean, date: Date, color: string) {
        this.title = title;
        this.content = content;
        this.isImportant = isImportant;
        this. date = date;
        this.color = color;
    }

}