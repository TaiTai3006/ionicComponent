import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sample-page1',
    loadChildren: () => import('./pages/sample-page1/sample-page1.module').then( m => m.SamplePage1PageModule)
  },
  {
    path: 'sample-page2',
    loadChildren: () => import('./pages/sample-page2/sample-page2.module').then( m => m.SamplePage2PageModule)
  },
  {
    path: 'sample-page3',
    loadChildren: () => import('./pages/sample-page3/sample-page3.module').then( m => m.SamplePage3PageModule)
  },
  {
    path: 'sample-page4',
    loadChildren: () => import('./pages/sample-page4/sample-page4.module').then( m => m.SamplePage4PageModule)
  },
  {
    path: 'exercise4',
    loadChildren: () => import('./pages/exercise4/exercise4.module').then( m => m.Exercise4PageModule)
  },
  {
    path: 'sample-page5',
    loadChildren: () => import('./pages/sample-page5/sample-page5.module').then( m => m.SamplePage5PageModule)
  },
  {
    path: 'sample-page6',
    loadChildren: () => import('./pages/sample-page6/sample-page6.module').then( m => m.SamplePage6PageModule)
  },
  {
    path: 'sample-page8',
    loadChildren: () => import('./pages/sample-page8/sample-page8.module').then( m => m.SamplePage8PageModule)
  },
  {
    path: 'exercise6',
    loadChildren: () => import('./pages/exercise6/exercise6.module').then( m => m.Exercise6PageModule)
  },
  {
    path: 'samole-page12',
    loadChildren: () => import('./pages/samole-page12/samole-page12.module').then( m => m.SamolePage12PageModule)
  },
  {
    path: 'sampl-page13',
    loadChildren: () => import('./pages/sampl-page13/sampl-page13.module').then( m => m.SamplPage13PageModule)
  },
  {
    path: 'sampl-page14',
    loadChildren: () => import('./pages/sampl-page14/sampl-page14.module').then( m => m.SamplPage14PageModule)
  },
  {
    path: 'sampl-page15',
    loadChildren: () => import('./pages/sampl-page15/sampl-page15.module').then( m => m.SamplPage15PageModule)
  },
  {
    path: 'sampl-page16',
    loadChildren: () => import('./pages/sampl-page16/sampl-page16.module').then( m => m.SamplPage16PageModule)
  },
  {
    path: 'exercise7',
    loadChildren: () => import('./pages/exercise7/exercise7.module').then( m => m.Exercise7PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
