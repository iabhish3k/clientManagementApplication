"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[637],{6543:(e,a,s)=>{s.d(a,{p:()=>t});const t="https://clientmanagementapplication.onrender.com"},7637:(e,a,s)=>{s.r(a),s.d(a,{default:()=>v});var t=s(5043),d=s(6213),i=s(2462),l=s(3536),n=s(3003),r=s(4510),c=s(6543),o=s(579);const v=()=>{var e,a,s,v,h,u,m;const p=(0,n.d4)(r.Cd),[x,g]=(0,t.useState)(""),[j,N]=(0,t.useState)(null),[A,y]=(0,t.useState)(!1),b=(0,t.useCallback)((0,l.debounce)((e=>{(async e=>{if(e){y(!0);try{const a=await d.A.post(`${c.p}/api/panvalidation`,{pan:e},{headers:{Authorization:`Bearer ${p}`}});N({success:!0,msg:a.data.msg,data:a.data.data.data})}catch(t){var a,s;N({success:!1,message:(null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message)||"Error validating PAN"})}finally{y(!1)}}else N(null)})(e)}),300),[]);return(0,t.useEffect)((()=>()=>{b.cancel()}),[b]),(0,o.jsxs)("div",{style:{backgroundColor:"#343a40",color:"white",minHeight:"100vh",padding:"20px"},children:[(0,o.jsx)("h1",{className:"text-center mb-4",children:"PAN Validation"}),(0,o.jsx)("div",{className:"d-flex justify-content-center mb-4",children:(0,o.jsx)(i.A.Group,{controlId:"pan",style:{width:"400px"},children:(0,o.jsx)(i.A.Control,{type:"text",placeholder:"Enter your PAN",value:x,onChange:e=>{const{value:a}=e.target;g(a),b(a)},style:{borderColor:A?"orange":""}})})}),A&&(0,o.jsx)("p",{className:"text-center",children:"Validating PAN..."}),j&&(0,o.jsx)("div",{className:"text-center",style:{marginTop:"10px"},children:(0,o.jsx)("p",{style:{color:j.success?"green":"red"},children:j.success?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:j.msg}),(0,o.jsx)("br",{}),(0,o.jsx)("strong",{style:{color:"white"},children:"Details:"}),(0,o.jsxs)("div",{style:{color:"white"},children:[(0,o.jsxs)("div",{children:["First Name: ",(null===(e=j.data)||void 0===e?void 0:e.first_name)||"N/A"]}),(0,o.jsxs)("div",{children:["Middle Name: ",(null===(a=j.data)||void 0===a?void 0:a.middle_name)||"N/A"]}),(0,o.jsxs)("div",{children:["Last Name: ",(null===(s=j.data)||void 0===s?void 0:s.last_name)||"N/A"]}),(0,o.jsxs)("div",{children:["PAN Number: ",(null===(v=j.data)||void 0===v?void 0:v.pan_number)||"N/A"]}),(0,o.jsxs)("div",{children:["DOB Match: ",(null===(h=j.data)||void 0===h?void 0:h.dob_match)||"N/A"]}),(0,o.jsxs)("div",{children:["PAN Active: ",(null===(u=j.data)||void 0===u?void 0:u.pan_active)||"N/A"]}),(0,o.jsxs)("div",{children:["Aadhaar Seeding Status: ",(null===(m=j.data)||void 0===m?void 0:m.aadhaar_seeding_status)||"N/A"]})]})]}):j.message})})]})}}}]);
//# sourceMappingURL=637.0286d81e.chunk.js.map