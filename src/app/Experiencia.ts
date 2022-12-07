// es una interface que permite que haya consistencia de tipo de datos
export interface Experiencia {
    id?: number; //cuando creamos podria no venir  
    tipo: string;
    tiempo: string;
    fecha_experiencia: string;
    Lugar: string;
    fecha_ultima_actualizacion: string;
    image_logo: string;
    reminder: boolean;
}