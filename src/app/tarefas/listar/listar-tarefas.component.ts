import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService:TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos(); 
    // this.tarefas = [
    //   new Tarefa(1,"Tarefa 1",true),
    //   new Tarefa(2,"Tarefa 2",false),
    // ]
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

}
