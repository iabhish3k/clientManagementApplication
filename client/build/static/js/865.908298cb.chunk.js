"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[865],{6543:(e,s,a)=>{a.d(s,{p:()=>r});const r="http://localhost:3001"},9865:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var r=a(5043),t=a(8155),i=a(4196),n=a(1468),d=a(2462),l=a(3003),c=a(6213),o=a(633),h=a(6543),u=a(579);const m=()=>{const{role:e,token:s}=(0,l.d4)((e=>e.auth)),[a,m]=(0,r.useState)([]),[p,x]=(0,r.useState)(!0),[j,A]=(0,r.useState)(!1),[y,v]=(0,r.useState)({id:null,name:"",email:"",password:"",clientId:""}),[f,g]=(0,r.useState)([]),[$,w]=(0,r.useState)(1),[b,C]=(0,r.useState)(1),[N,k]=(0,r.useState)(!1),S=async()=>{try{const e=await c.A.get(`${h.p}/api/user?page=${$}&limit=5`,{headers:{Authorization:`Bearer ${s}`}});m(e.data.data.users),C(e.data.data.pagination.totalPages)}catch(e){o.Ay.error("Failed to fetch users",3)}finally{x(!1)}},I=function(){v(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),A(!0)},U=()=>{A(!1),v({id:null,name:"",email:"",password:"",clientId:""})},B=e=>{const{name:s,value:a}=e.target;v({...y,[s]:a})};return(0,r.useEffect)((()=>{S(),"admin"===e&&(async()=>{try{const e=await c.A.get(`${h.p}/api/client/list`,{headers:{Authorization:`Bearer ${s}`}});g(e.data.data)}catch(e){o.Ay.error("Error fetching clients",3)}})()}),[$,e]),(0,u.jsxs)("div",{style:{backgroundColor:"#343a40",color:"white",minHeight:"100vh",paddingTop:"20px"},children:[(0,u.jsx)("h1",{className:"text-center mb-4",children:"Users"}),(0,u.jsx)("div",{className:"d-flex justify-content-end",style:{width:"80%",margin:"0 auto"},children:(0,u.jsx)(t.A,{variant:"primary",className:"mb-3",onClick:()=>I(),children:"Add User"})}),(0,u.jsxs)(i.A,{striped:!0,bordered:!0,hover:!0,variant:"dark",style:{backgroundColor:"#343a40",width:"80%",margin:"0 auto"},children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Name"}),(0,u.jsx)("th",{children:"Email"}),"admin"===e&&(0,u.jsx)("th",{children:"Client"}),(0,u.jsx)("th",{children:"Actions"})]})}),(0,u.jsx)("tbody",{children:p?(0,u.jsx)("tr",{children:(0,u.jsx)("td",{colSpan:"4",className:"text-center",children:"Loading..."})}):a.length<=0?(0,u.jsx)("tr",{children:(0,u.jsx)("td",{colSpan:"4",className:"text-center",children:"No data available"})}):Array.isArray(a)&&a.map((a=>(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:a.name}),(0,u.jsx)("td",{children:a.email}),"admin"===e&&(0,u.jsx)("td",{children:a.Client.name}),(0,u.jsxs)("td",{children:[(0,u.jsx)(t.A,{variant:"warning",onClick:()=>I(a),children:"Edit"}),(0,u.jsx)(t.A,{variant:"danger",onClick:()=>(async e=>{if(window.confirm("Are you sure you want to delete this user?"))try{await c.A.delete(`${h.p}/api/user/${e}`,{headers:{Authorization:`Bearer ${s}`}}),o.Ay.success("User deleted successfully",3),S()}catch(a){o.Ay.error("Failed to delete user",3)}})(a.id),className:"ml-2",children:"Delete"})]})]},a.id)))})]}),Array.isArray(a)&&a.length>0&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"d-flex justify-content-end mt-3",style:{width:"80%",margin:"0 auto"},children:(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)(t.A,{disabled:1===$,onClick:()=>w((e=>e-1)),className:"mr-2",children:"Previous"}),(0,u.jsxs)("span",{className:"mr-2",children:["Page ",$," of ",b]}),(0,u.jsx)(t.A,{disabled:$===b,onClick:()=>w((e=>e+1)),children:"Next"})]})})}),(0,u.jsxs)(n.A,{show:j,onHide:U,children:[(0,u.jsx)(n.A.Header,{closeButton:!0,children:(0,u.jsx)(n.A.Title,{children:y.id?"Edit User":"Add User"})}),(0,u.jsx)(n.A.Body,{children:(0,u.jsxs)(d.A,{onSubmit:async e=>{e.preventDefault(),k(!0);try{if(y.id){const{id:e,name:a,email:r,password:t,clientId:i}=y,n={name:a,email:r,password:t,clientId:i};await c.A.put(`${h.p}/api/user/${e}`,n,{headers:{Authorization:`Bearer ${s}`}}),o.Ay.success("User updated successfully",3)}else await c.A.post(`${h.p}/api/user`,y,{headers:{Authorization:`Bearer ${s}`}}),o.Ay.success("User created successfully",3);S(),U()}catch(t){var a,r;o.Ay.error((null===(a=t.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)||"Failed to save user",3)}finally{k(!1)}},children:[(0,u.jsxs)(d.A.Group,{controlId:"name",children:[(0,u.jsx)(d.A.Label,{children:"Name"}),(0,u.jsx)(d.A.Control,{type:"text",name:"name",value:y.name,onChange:B,required:!0})]}),(0,u.jsxs)(d.A.Group,{controlId:"email",children:[(0,u.jsx)(d.A.Label,{children:"Email"}),(0,u.jsx)(d.A.Control,{type:"email",name:"email",value:y.email,onChange:B,required:!0})]}),(0,u.jsxs)(d.A.Group,{controlId:"password",children:[(0,u.jsx)(d.A.Label,{children:y.id?"New Password":"Password"}),(0,u.jsx)(d.A.Control,{type:"text",name:"password",value:y.password,onChange:B,required:!y.id})]}),"admin"===e&&(0,u.jsxs)(d.A.Group,{controlId:"clientId",children:[(0,u.jsx)(d.A.Label,{children:"Client"}),(0,u.jsxs)(d.A.Control,{as:"select",name:"clientId",value:y.clientId,onChange:B,children:[(0,u.jsx)("option",{value:"",children:"Select Client"}),Array.isArray(f)&&f.map((e=>(0,u.jsx)("option",{value:e.id,children:`${e.name} || ${e.email}`},e.id)))]})]}),(0,u.jsx)(t.A,{variant:"primary",type:"submit",disabled:N,children:y.id?"Update User":"Add User"})]})})]})]})}},4196:(e,s,a)=>{a.d(s,{A:()=>l});var r=a(8139),t=a.n(r),i=a(5043),n=a(7852),d=a(579);const l=i.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,striped:i,bordered:l,borderless:c,hover:o,size:h,variant:u,responsive:m,...p}=e;const x=(0,n.oU)(a,"table"),j=t()(r,x,u&&`${x}-${u}`,h&&`${x}-${h}`,i&&`${x}-${"string"===typeof i?`striped-${i}`:"striped"}`,l&&`${x}-bordered`,c&&`${x}-borderless`,o&&`${x}-hover`),A=(0,d.jsx)("table",{...p,className:j,ref:s});if(m){let e=`${x}-responsive`;return"string"===typeof m&&(e=`${e}-${m}`),(0,d.jsx)("div",{className:e,children:A})}return A}))}}]);
//# sourceMappingURL=865.908298cb.chunk.js.map