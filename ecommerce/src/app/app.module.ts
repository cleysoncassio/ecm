import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatcardComponent } from './components/bookstore-app/matcard/matcard.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatIconModule }  from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';






@NgModule({
  declarations: [
    AppComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    MatcardComponent,
    ToolbarComponent,








  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
