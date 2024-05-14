
// Se define y exporta la clase Registro
export class Registro {
    
    // Valores iniciales
    public format : string = "";
    public text : string = "";
    public type : string = "";
    public icon : string = "";
    public created : Date;

    // Constructor de la clase Registro
    constructor(format :string, text: string){
        this.format = format;
        this.text = text;
        this.created = new Date();
        this.determinarTipo();
    }

    // Determina el tipo de registro basado en los primeros cuatro caracteres del text del registro
    private determinarTipo() {
        const inicioText = this.text.substring(0,4);
        console.log('TIPO', inicioText);
        
        // Casos para el texto
        switch(inicioText){
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;
            case 'geo:':
                this.type = 'geo';
                this.icon = 'pin';
                break;            
            // Por defecto
            default:
                this.type = 'No reconocido';
                this.icon = 'create';
                break;
        }
    }
}
