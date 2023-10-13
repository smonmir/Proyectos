export class Joke {

    private pregunta:String;
    private respuesta:String;
    private oculto:boolean;

    constructor(pregunta:String, respuesta:String){
        this.pregunta = pregunta;
        this.respuesta = respuesta;
        this.oculto = true;
    }

    public getPregunta(){
        return this.pregunta;
    }

    public setPregunta(value:String){
        this.pregunta = value
    }

    public getRespuesta(){
        return this.respuesta;
    }

    public setRespuesta(value:String){
        this.respuesta = value
    }

    public getOculto(){
        return this.oculto;
    }

    public ocultar(){
        this.oculto = !this.oculto;
    }


}
