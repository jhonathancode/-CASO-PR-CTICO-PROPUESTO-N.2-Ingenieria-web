import { Component, OnInit } from '@angular/core';
import { Tarea } from './tarea';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: Tarea[] = [];
  filtro: string = '';

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.tareasService.getTareas().subscribe(tareas => this.tareas = tareas);
  }

  eliminarTarea(tarea: Tarea) {
    this.tareasService.eliminarTarea(tarea.id).subscribe(() => {
      this.tareas = this.tareas.filter(t => t.id !== tarea.id);
    });
  }

}
