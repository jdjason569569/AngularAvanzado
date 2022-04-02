import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

//Components
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { CommonModule } from '@angular/common';



const  routes:  Routes  = [
    {
        path:  '', component:  MainComponent,
        children: [
            {path:  '' , redirectTo: 'listado', pathMatch: 'full'},
            {path:  'listado',component: ListComponent},
            {path:  'crear',component: AddComponent},
            {path:  'editar',component: EditComponent}
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export  class  AdminRoutingModule { }