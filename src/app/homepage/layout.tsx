import 'material-icons/iconfont/material-icons.css';




export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}


export default function RootLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className='w-full md:m-0 md:p-0 bg-white justify-start md:min-h-screen flex flex-col md:flex-row'>
            {children}
        </div>

    )
}



    (function(g,u,i,d,e,s){g[e] = g[e] || [];var f=u.getElementsByTagName(i)[0];var k=u.createElement(i);k.async=true;k.src='https://static.userguiding.com/media/user-guiding-'+s+'-embedded.js';f.parentNode.insertBefore(k,f);if(g[d])return;var ug=g[d]={q:[]};ug.c=function(n){return function(){ug.q.push([n, arguments])};};var m=['previewGuide','finishPreview','track','triggerNps','hideChecklist','launchChecklist'];for(var j=0;j<m.length;j+=1){ug[m[j]] = ug.c(m[j]);}})(window,document,'script','userGuiding','userGuidingLayer','BM571140II4ID');


    window.userGuiding.identify(userId*, attributes) 
     // example with attributeswindow.
     userGuiding.identify('1Ax69i57j0j69i60l4', {  email: 'user@awesome.com',  name: 'Awesome User',  created_at: 1644403436643,})
     
     // or just send userId without attributes
     window.userGuiding.identify('1Ax69i57j0j69i60l4')