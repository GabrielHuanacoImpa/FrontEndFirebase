// es una interface que permite que haya consistencia de tipo de datos
export interface Idioma {
    id?: number; //cuando creamos podria no venir
    habilidad: string;
    nivel: number;
    reminder: boolean;
    persona_id: number;
}