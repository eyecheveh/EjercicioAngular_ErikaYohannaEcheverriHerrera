import { AUTO_STYLE } from "@angular/animations";
import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Auto } from 'src/app/datos/auto';
import { AutosService } from "src/app/shared/autos.service";

@Component ({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html",
})
export class ListaAutosComponent implements OnInit {

    faStar = faStar;

    starsList = [];
    tituloPagina: string = "Lista de Automóviles";

    listaAutos: Auto[] = [];
    listaAutosFiltrados: Auto[] = [];

    muestraImagen: boolean = false;
    anchoImagen = 200;
    margenImagen = 80;

    private _filtro: string = "";
    get filtro(): string {
        return this._filtro;
    }
    set filtro( filtro: string ) {
        this._filtro = filtro;
        console.log( this._filtro );
        this.filtraAutos( this._filtro );
    }

    filtraAutos( filtrarPor: string ): void {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        this.listaAutosFiltrados = this.listaAutos.filter(
            ( auto: Auto ) => auto.marca.toLocaleLowerCase().includes( filtrarPor )
        )
    }

    constructor( private _autosService: AutosService ) {}

    ngOnInit(): void {
        this.listaAutos = this._autosService.obtenListaAutos();
        this.listaAutosFiltrados = this.listaAutos;
    }

    toggleImage(): void {
        this.muestraImagen = !this.muestraImagen;
    }

    onClickCalificacion( mensaje: string ): void {
        alert( "Dieron click en la calificación: " + mensaje );
    }

}

