import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule, MatMenuModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';


@NgModule({

    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatMenuModule,
        MatSidenavModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatMenuModule,
        MatSidenavModule
    ],
})


export class MaterialModule { }
