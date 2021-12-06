import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home1',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home1',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lecturer-report',
    loadChildren: () => import('./lecturer-report/lecturer-report.module').then( m => m.LecturerReportPageModule)
  },
  {

    path: 'lecture-dashboard',
    loadChildren: () => import('./lecture-dashboard/lecture-dashboard.module').then( m => m.LectureDashboardPageModule)
  },
  {
    path: 'lecturer-report',
    loadChildren: () => import('./lecturer-report/lecturer-report.module').then( m => m.LecturerReportPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {

    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },


  {
    path: 'hod-dashboard',
    loadChildren: () => import('./hod-dashboard/hod-dashboard.module').then( m => m.HodDashboardPageModule)
  },
  {
    path: 'hod-report',
    loadChildren: () => import('./hod-report/hod-report.module').then( m => m.HodReportPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'detailed-report',
    loadChildren: () => import('./detailed-report/detailed-report.module').then( m => m.DetailedReportPageModule)
  },
  {
    path: 'lec-detailed-report',
    loadChildren: () => import('./lec-detailed-report/lec-detailed-report.module').then( m => m.LecDetailedReportPageModule)
  },
  {
    path: 'hod-view-module',
    loadChildren: () => import('./hod-view-module/hod-view-module.module').then( m => m.HodViewModulePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
