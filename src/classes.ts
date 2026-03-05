const Coisas=["cadeira", "chave", "mesa"]
class person{
    name: string
    height: number

    constructor (name: string, height: number){
        this.name=name
        this.height=height
    }
}
class date{
    date: number

    constructor(date: number){
        this.date=date
    }
}
export default person
export {Coisas,date}