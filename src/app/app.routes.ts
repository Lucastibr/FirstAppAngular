import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './Institucional/contato/contato.component';
import { SobreComponent } from './Institucional/sobre/sobre.component';
import { Component } from '@angular/core';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

export const rootRouterConfig : Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path:'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'features', component: DataBindingComponent},
    {path: 'produtos', component: ListaProdutoComponent}
];