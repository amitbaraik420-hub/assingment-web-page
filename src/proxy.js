// import { NextResponse } from 'next/server'
// import Profile from './app/(profile)/profile/page'
// import { headers } from 'next/headers';
// import { auth } from './app/lib/auth';

 
// // This function can be marked `async` if using `await` inside
// export async function proxy(request) {
//        const session = await auth.api.getSession({
//         headers: headers(),
//        })   
//      if(!session){
//         return NextResponse.redirect(new URL('/signin', request.url))
//      }   
// }
 
// export const config = {
//   matcher:["/Profile","/courses/:path*"] ,
// }
import { NextResponse } from 'next/server'
import { headers } from 'next/headers';
import { auth } from './app/lib/auth';

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: headers(),
    })

   
    if(!session){
        return NextResponse.redirect(new URL('/signin', request.url))
    }

  
    return NextResponse.next(); 
}

export const config = {
   
    matcher: ["/profile", "/courses/:path*"] 
}
