import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { TareasService } from './tareas.service';

const appRoutes: Routes = [
  { path: 'tareas', component: TareasComponent },
  { path: 'crear-tarea', component: CrearTareaComponent },
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    CrearTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
