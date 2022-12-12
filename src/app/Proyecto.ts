export interface Proyecto {
    /*
    id?: number; //cuando creamos podria no venir  
    nombre_proyecto: string;
    fecha_realizacion: string;
    descripcion: string;
    link: string;
    imagenes: string;
    id_domicilio: string;
    tipo_ocupacion: string;
    ultima_actualizacion: string;
    image_logo: string;
    reminder: boolean;
    */
    id?: number; //cuando creamos podria no venir  
    nombre_proyecto: string;
    fecha_inicio: Date;
    fecha_fin:Date;
    descripcion: string;
    link: string;
    url_imagenes: string;
    domicilio: string;
    tipo_ocupacion: string;
    ultima_actualizacion: Date;
    url_image_logo: String;
    reminder: boolean;
    persona_id: number;


}