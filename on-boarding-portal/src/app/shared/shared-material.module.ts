// This is a shared module that is used throughout the app.

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCheckboxModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatToolbarModule,
        MatIconModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatGridListModule,
        MatDividerModule } from '@angular/material';

import { ToastrModule } from 'ngx-toastr';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentifyStudentTypeDirective } from './directives/identify-student-type.directive';
import { SearchPipe } from './pipes/search.pipe';
import { CategoryWiseStudentPipe } from './pipes/category-wise-student.pipe';
import { PortalFooterComponent } from './portal-footer/portal-footer.component';
import { PortalHeaderComponent } from './portal-header/portal-header.component';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [IdentifyStudentTypeDirective, SearchPipe, CategoryWiseStudentPipe, PortalFooterComponent, PortalHeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDividerModule,
    ToastrModule.forRoot()
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDividerModule,
    IdentifyStudentTypeDirective,
    ToastrModule,
    SearchPipe,
    CategoryWiseStudentPipe,
    PortalHeaderComponent,
    PortalFooterComponent
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class SharedMaterialModule { }
