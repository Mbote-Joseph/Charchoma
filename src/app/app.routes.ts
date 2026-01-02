import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'ecommerce',
    loadChildren: () =>
      import('../features/ecommerce/ecommerce.module').then(m => m.EcommerceModule)
  },
  {
    path: 'bookings',
    loadChildren: () =>
      import('../features/bookings/bookings.module').then(m => m.BookingsModule)
  },
  {
    path: 'messaging',
    loadChildren: () =>
      import('../features/messaging/messaging.module').then(m => m.MessagingModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'loyalty',
    loadChildren: () =>
      import('../features/loyalty/loyalty.module').then(m => m.LoyaltyModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('../features/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'recommendation',
    loadChildren: () =>
      import('../features/recommendation/recommendation.module').then(m => m.RecommendationModule)
  },
  {
    path: 'company',
    loadChildren: () =>
      import('../features/company/company.module').then(m => m.CompanyModule)
  },
  { path: '', redirectTo: 'company', pathMatch: 'full' },
  { path: '**', redirectTo: 'company' }
];

