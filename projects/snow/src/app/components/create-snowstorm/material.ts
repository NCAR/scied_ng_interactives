import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatExpansionModule, MatFormFieldModule, MatSnackBarModule],
    exports: [MatButtonModule, MatExpansionModule, MatFormFieldModule, MatSnackBarModule],
})


export class MaterialModule { }
