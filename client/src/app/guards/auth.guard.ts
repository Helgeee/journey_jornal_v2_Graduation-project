// import { CanActivateFn, Router } from "@angular/router";
// import { AuthServise } from "../auth/services/auth.servise";
// import { inject } from "@angular/core";

// export function authGuard(): CanActivateFn{
//     return () => {
//         const authService: AuthServise = inject(AuthServise)
//         const router: Router = inject(Router)

//         if(AuthServise.isAuthSig()){
//             return true
//         }
//         router.navigate('[/login]')
//         return false
//     }
// }