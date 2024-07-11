import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { PassagemDestaqueComponent } from "src/app/pages/busca/passagem-destaque/passagem-destaque.component";
import { PassagemComponent } from "src/app/pages/busca/passagem/passagem.component";
import { CompanhiasComponent } from "./filtros-complementares/companhias/companhias.component";
import { FiltrosComplementaresComponent } from "./filtros-complementares/filtros-complementares.component";
import { LabelComponent } from "./filtros-complementares/label/label.component";
import { ParadasComponent } from "./filtros-complementares/paradas/paradas.component";
import { PrecosComponent } from "./filtros-complementares/precos/precos.component";
import { MaterialModule } from "src/app/core/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { BuscaComponent } from "./busca.component";
import { BuscaRoutingModule } from "./busca-routing.module";

@NgModule({
    declarations:[
        BuscaComponent,
        PassagemComponent,
        ParadasComponent,
        CompanhiasComponent,
        PrecosComponent,
        LabelComponent,
        FiltrosComplementaresComponent,
        PassagemDestaqueComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        MaterialModule,
        ReactiveFormsModule,
        BuscaRoutingModule
    ],
    exports:[
        BuscaComponent,
        PassagemComponent,
        ParadasComponent,
        CompanhiasComponent,
        PrecosComponent,
        LabelComponent,
        FiltrosComplementaresComponent,
        PassagemDestaqueComponent
    ]
})

export class BuscaModule{}