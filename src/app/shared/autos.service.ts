import { Injectable } from "@angular/core";	
import { Auto } from "../datos/auto";

@Injectable ({
    providedIn: "root"
    })

export class AutosService{
    listaAutos: Auto[] = [];

public obtenListaAutos(): Auto[] {
    if( this.obtenListaAutos.length == 0 )
        this.listaAutos = this._determinaListaAutos();
    return this.listaAutos;
}

public obtenAuto( id: number ): Auto | undefined {
    if( this.listaAutos.length ==0 ) {
        this.listaAutos = this._determinaListaAutos();
    }
    return this.listaAutos.find( auto => auto.id == id );
}

private _determinaListaAutos(): Auto[] {
    let listaAutos = [
        {
            id:1,
            marca: "Hyundai",
            modelo: "Venue",
            anio: 2022,
            color: "Azul",
            kilometros: 30000,
            calificacion: 4,
            precio: 100000000,
            imagenUrl: "assets/imagenAutos/Hyundai_Venue.jpg"
        },
        {
            id:2,
            marca: "Mazda",
            modelo: "CX_5",
            anio: 2019,
            color: "Blanco",
            kilometros: 50000,
            calificacion: 4.5,
            precio: 140000000,
            imagenUrl: "assets/imagenAutos/Mazda_CX-5.jpg"
        },
        {
            id:3,
            marca: "Nissan",
            modelo: "March",
            anio: 2016,
            color: "Rojo",
            kilometros: 70000,
            calificacion: 3,
            precio: 42000000,
            imagenUrl: "assets/imagenAutos/Nissan_March.jpg"
        },
        {
            id:4,
            marca: "Sandero",
            modelo: "Stepway",
            anio: 2020,
            color: "Gris",
            kilometros: 40000,
            calificacion: 3.8,
            precio: 60000000,
            imagenUrl: "assets/imagenAutos/Sandero_Stepway.jpg"
        },            {
            id:5,
            marca: "Toyota",
            modelo: "Fortuner",
            anio: 2021,
            color: "Negro",
            kilometros: 20000,
            calificacion: 5,
            precio: 190000000,
            imagenUrl: "assets/imagenAutos/Toyota_Fortuner.jpg"
        },
    ]
    return listaAutos
}
}